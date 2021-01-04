import { parseJsonWithDates } from '../index'

describe('parse-json-with-dates', () => {
  it('works with standards payload', () => {
    const parsed = parseJsonWithDates(JSON.stringify({ a: 'b' }))

    expect(parsed).toHaveProperty('a')
  })

  it('converts dates', () => {
    type MyDate = {
      a: Date
    }
    const parsed = parseJsonWithDates<MyDate>(
      JSON.stringify({ a: '2021-01-04T16:11:39.462Z' }),
      ['a']
    )

    expect(parsed.a).toBeInstanceOf(Date)
  })

  it('converts dates', () => {
    type MyDate = {
      a: Date
    }
    const parsed = parseJsonWithDates<MyDate>(
      JSON.stringify({ a: '2021-01-04T16:11:39.462Z' }),
      ['a']
    )

    expect(parsed.a).toBeInstanceOf(Date)
  })

  it('sets invalid dates', () => {
    type MyDate = {
      a: any
    }
    const parsed = parseJsonWithDates<MyDate>(
      JSON.stringify({ a: 'invalid-date' }),
      ['a']
    )

    expect(isNaN(parsed.a)).toBe(true)
  })

  it('throws for invalid json', () => {
    expect(() => {
      parseJsonWithDates('invalid-json')
    }).toThrow()
  })
})
