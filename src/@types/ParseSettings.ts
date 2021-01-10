export interface FinalParseSettings {
  dateFields: string[]
  verifyDateByRegexp: boolean
  dateRegExp: RegExp
}

export interface ParseSettings {
  dateFields?: string[]
  verifyDateByRegexp?: boolean
  dateRegExp?: RegExp
}
