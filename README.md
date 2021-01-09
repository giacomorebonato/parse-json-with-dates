# parse-json-with-dates

| Statements                | Branches                | Functions                | Lines                |
| ------------------------- | ----------------------- | ------------------------ | -------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-92.31%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-83.33%25-yellow.svg) | ![Functions](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/Coverage-90.91%25-brightgreen.svg) |

A small utility that parses JSON and converts date fields to Date type.  

[Documentation](./docs/modules.md)

**Example**

```js
import { parseJsonWithDates } from 'parse-json-with-dates'

const parsed = parseJsonWithDates(
  JSON.stringify({ 'date-field': new Date() }),
  ['date-field']
)

parsed.a.toISOString() // it's a date!
```

```typescript
import { parseJsonWithDates } from 'parse-json-with-dates'

type MyDate = {
  a: Date
}

const parsed = parseJsonWithDates<MyDate>(
  JSON.stringify({ 'date-field': new Date() }),
  ['date-field']
)

parsed.a.toISOString() // it's a date!
```
