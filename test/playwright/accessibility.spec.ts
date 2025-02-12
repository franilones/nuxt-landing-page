import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test.describe('Accessibility tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })
  test('Check accessibility with axe-core', async ({ page }) => {
    const axe = new AxeBuilder({ page }).withTags(['wcag21a', 'wcag21aa'])
    const accessibilityScanResults = await axe.analyze()

    // Show violations in console if there are any
    if (accessibilityScanResults.violations.length > 0) {
      console.error('Violaciones de accesibilidad encontradas:')
      accessibilityScanResults.violations.forEach((violation) => {
        console.error(`Regla: ${violation.id} - Impacto: ${violation.impact}`)
        violation.nodes.forEach((node) => {
          console.error('Nodos afectados:', node.target.join(', '))
        })
      })
    }
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Has main landmark', async ({ page }) => {
    const main = page.locator('main')
    expect(main).toBeVisible()
  })

  test('Has banner landmark', async ({ page }) => {
    const banner = page.locator('header[role="banner"]')
    expect(banner).toBeVisible()
  })
})
