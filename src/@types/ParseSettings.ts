export interface FinalParseSettings {
  dateFields: string[]
  verifyDateByRegex: boolean
  dateRegExp: RegExp
}

export interface ParseSettings {
  dateFields?: string[]
  verifyDateByRegex?: boolean
  dateRegExp?: RegExp
}