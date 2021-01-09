type DataType = {
  [key: string]: true
}

type DateKeys<T> = string &
  {
    [P in keyof T]: T[P] extends Date
      ? P
      : T[P] extends object
      ? DateKeys<T[P]>
      : never
  }[keyof T]

export const parseJsonWithDates = <T = any>(
  text: string,
  dateFields: DateKeys<T>[] = []
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
  ;(window as any).parseJsonWithDates = parseJsonWithDates
}
