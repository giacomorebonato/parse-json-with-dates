import { FinalParseSettings, ParseSettings } from './@types/ParseSettings'

const defaultSettings = {
  dateFields: [],
  verifyDateByRegex: false,
  dateRegExp: /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
}

const getFinalSettings = (settings: ParseSettings): FinalParseSettings => {
  return { ...defaultSettings, ...settings }
}

export const parseJsonWithDates = <JsonOutput = unknown>(
  text: string,
  settings: ParseSettings = defaultSettings
): JsonOutput => {
  const data: {
    [key: string]: true
  } = {}
  const finalSettings = getFinalSettings(settings)

  for (let i = 0; i < finalSettings.dateFields.length; i++) {
    data[finalSettings.dateFields[i]] = true
  }

  return JSON.parse(text, (key, value) => {
    if (typeof value !== 'string') {
      return value
    }

    if (finalSettings.verifyDateByRegex) {
      if (value.match(finalSettings.dateRegExp)) {
        return new Date(value)
      }
    } else if (Object.prototype.hasOwnProperty.call(data, key)) {
      return new Date(value)
    }

    return value
  })
}
