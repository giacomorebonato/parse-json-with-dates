type DataType = {
  [key: string]: boolean
}

export const parseJsonWithDates = <T>(
  text: string,
  dateFields: string[] = []
): T => {
  const data: DataType = {}

  for (let i = 0; i < dateFields.length; i++) {
    data[dateFields[i]] = true
  }

  return JSON.parse(text, (key, value) => {
    if (data.hasOwnProperty(key)) {
      return new Date(value)
    }

    return value
  })
}

if (typeof window !== 'undefined') {
  (window as any).parseJsonWithDates = parseJsonWithDates
}
