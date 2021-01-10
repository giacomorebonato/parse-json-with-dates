export type DateKeys<T> = string &
  {
    [P in keyof T]: T[P] extends Date
      ? P
      : T[P] extends Record<string, unknown>
      ? DateKeys<T[P]>
      : never
  }[keyof T]
