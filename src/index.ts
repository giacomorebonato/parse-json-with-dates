export const parseJsonWithDates = <T = unknown>(
  text: string,
  dateFields: DateKeys<T>[] = []
): T => {
  const data: DataType = {}

  for (let i = 0; i < dateFields.length; i++) {
    data[dateFields[i]] = true
  }

  return JSON.parse(text, (key, value) => {    
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      return new Date(value)
    }

    return value
  })
}

if (typeof window !== 'undefined') {
  (window as any).parseJsonWithDates = parseJsonWithDates // eslint-disable-line 
}
