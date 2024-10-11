// formatNumber.test.js
import { describe, it, expect } from 'vitest'
import { formatNumber } from './utils'

describe('formatNumber function', () => {
  it('should format number in de-DE locale correctly', () => {
    const result = formatNumber(123456.78)
    expect(result).toMatchSnapshot() // Snapshot saved with output "123.456,78"
  })
})
