import { parseJsonWithDates } from './index'

if (typeof window !== 'undefined') {
  ;(window as any).parseJsonWithDates = parseJsonWithDates // eslint-disable-line
}
