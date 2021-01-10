parse-json-with-dates / [Exports](modules.md)

# parse-json-with-dates

| Statements                | Branches                | Functions                | Lines                |
| ------------------------- | ----------------------- | ------------------------ | -------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-90%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) |

A small utility with **zero dependencies** that parses JSON and converts date fields to Date type.  

[Documentation](./docs/modules.md)

## Description

You can parse JSON, by passing the name of the keys that contain date information or by passing the paramenter `verifyDateByRegex: true`, this solution is **less performant** and checks each of the object key using a RegExp to verify if it contains a Date string.

**Example**

```js
import { parseJsonWithDates } from 'parse-json-with-dates'
// or
const { parseJsonWithDates } = require('parse-json-with-dates')

const parsed = parseJsonWithDates(
  JSON.stringify({ 'date-field': new Date() }),
  {
    dateFields: ['date-field']
  }
)

const parsed = parseJsonWithDates(
  JSON.stringify({ 'date-field': new Date() }),
  {
    verifyDateByRegex: true
  }
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
  {
    dateFields: ['date-field']
  }
)

parsed.a.toISOString() // it's a date!
```
