import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page, context }) => {
  await context.clearCookies()

  await page.goto('/')

  await page.evaluate(() => {
    localStorage.clear()
    sessionStorage.clear()
  })
})

test.describe('Header Integration Tests', () => {
  const getHtml = page => page.locator('html')
  const getThemeButton = page => page.getByTestId('theme-toggle-btn')
  const getAnimationButton = page => page.getByTestId('animation-toggle-btn')
  const getHomeLink = page => page.getByLabel(/Home/)

  test('should change language when selecting new option', async ({ page }) => {
    const languageSelector = page.getByTestId('language-selector').locator('i')
    const input = page.getByTestId('language-selector').locator('input')

    await languageSelector.click()
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
    await expect(input).toHaveValue('English')

    await expect(getHomeLink(page)).toBeVisible()
  })

  test('should toggle animations and update accessibility attributes', async ({ page }) => {
    const animationBtn = getAnimationButton(page)
    const html = getHtml(page)

    await expect(html).toHaveAttribute('data-reduced-motion', 'false')
    await animationBtn.click()

    await expect(animationBtn).toHaveAttribute('aria-label', /Activar animaciones/)
    await expect(html).toHaveAttribute('data-reduced-motion', 'true')
  })

  test('should toggle theme and update accessibility attributes', async ({ page }) => {
    const themeBtn = getThemeButton(page)
    const html = getHtml(page)

    await expect(html).toHaveAttribute('data-theme', 'dark')
    await expect(themeBtn).toHaveAttribute('aria-label', /Cambiar a tema claro/i)

    await themeBtn.click()

    await expect(html).toHaveAttribute('data-theme', 'light')
    await expect(themeBtn).toHaveAttribute('aria-label', /Cambiar a tema oscuro/i)
  })
})

test.describe('Keyboard Navigation', () => {
  const menuLinks = page => page.locator('.header-nav__link')
  const firstLink = page => menuLinks(page).first()

  test('should apply focus styles on navigation link', async ({ page }) => {
    const link = firstLink(page)
    await link.focus()

    await expect(link).toHaveCSS('transform', 'matrix(1.2, 0, 0, 1.2, 0, 0)')
    await expect(link).toHaveCSS('font-weight', '700')
  })

  test('should navigate menu with arrow keys', async ({ page }) => {
    const links = menuLinks(page)

    await firstLink(page).focus()
    await page.keyboard.press('ArrowRight')
    await expect(links.nth(1)).toBeFocused()

    await page.keyboard.press('ArrowLeft')
    await expect(firstLink(page)).toBeFocused()
  })

  test('should focus the first menu item when pressing Home key', async ({ page }) => {
    const links = menuLinks(page)

    await links.nth(2).focus()
    await page.keyboard.press('Home')
    await expect(links.first()).toBeFocused()
  })

  test('should focus the last menu item when pressing End key', async ({ page }) => {
    const links = menuLinks(page)

    await links.first().focus()
    await page.keyboard.press('End')
    await expect(links.last()).toBeFocused()
  })
})

test.describe('Mobile Menu', () => { // Removed .only
  const mobileViewport = { width: 375, height: 667 }
  const header = page => page.locator('header')
  const toggleButton = page => page.getByTestId('mobile-menu-toggle-btn')

  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(mobileViewport)
    await page.goto('/')
  })

  test('should toggle mobile menu visibility', async ({ page }) => {
    const headerElement = header(page)

    await expect(headerElement).toHaveClass(/header--closed/)

    await toggleButton(page).click()
    await expect(headerElement).toHaveClass(/header--open/)

    await toggleButton(page).click()
    await expect(headerElement).toHaveClass(/header--closed/)
  })

  test('should close mobile menu when clicking outside header', async ({ page }) => {
    await toggleButton(page).click()

    const headerElement = header(page)
    await expect(headerElement).toHaveClass(/header--open/)

    await page.locator('main').click({ position: { x: 10, y: 10 } })

    await expect(headerElement).toHaveClass(/header--closed/)
  })
})
