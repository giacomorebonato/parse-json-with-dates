import { parseJsonWithDates } from '../index'

describe('parse-json-with-dates', () => {
  describe('parsing by passing the key of the fields to convert to date', () => {
    it('works with standards payload', () => {
      const parsed = parseJsonWithDates(JSON.stringify({ a: 'b' }))

      expect(parsed).toHaveProperty('a')
    })

    it('converts dates', () => {
      type MyDate = {
        a: Date
      }
      const parsed = parseJsonWithDates<MyDate>(
        JSON.stringify({ a: new Date() }),
        { dateFields: ['a'] }
      )

      expect(parsed.a).toBeInstanceOf(Date)
    })

    it('converts dates', () => {
      type MyDate = {
        a: Date
      }
      const parsed = parseJsonWithDates<MyDate>(
        JSON.stringify({ a: new Date() }),
        { dateFields: ['a'] }
      )

      expect(parsed.a).toBeInstanceOf(Date)
    })

    it('sets invalid dates', () => {
      type MyDate = {
        a: never
      }
      const parsed = parseJsonWithDates<MyDate>(
        JSON.stringify({ a: 'invalid-date' }),
        { dateFields: ['a'] }
      )

      expect(isNaN(parsed.a)).toBe(true)
    })

    it('parses nested fields with same key', () => {
      type MyDate = {
        a: Date
        b: {
          a: Date
        }
      }
      const parsed = parseJsonWithDates<MyDate>(
        JSON.stringify({ a: new Date(), b: { a: new Date() } }),
        { dateFields: ['a'] }
      )

      expect(parsed.a).toBeInstanceOf(Date)
      expect(parsed.b.a).toBeInstanceOf(Date)
    })

    it('throws for invalid json', () => {
      expect(() => {
        parseJsonWithDates('invalid-json')
      }).toThrow()
    })
  })

  describe('parsing by regex check on date strings', () => {
    it('parse ISO string dates by regex check', () => {
      type MyDate = {
        a: Date
      }
      const parsed = parseJsonWithDates<MyDate>(
        JSON.stringify({ a: new Date().toISOString() }),
        { verifyDateByRegexp: true }
      )

      expect(parsed.a).toBeInstanceOf(Date)
    })
  })
})
