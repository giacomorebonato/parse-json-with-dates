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