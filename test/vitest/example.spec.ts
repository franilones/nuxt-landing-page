import { describe, expect, it } from 'vitest'

describe('prueba de Vitest', () => {
  it('suma dos números correctamente', () => {
    const suma = (a: number, b: number): number => a + b
    expect(suma(2, 3)).toBe(5)
  })
})
