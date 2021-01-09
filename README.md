# parse-json-with-dates

A small utility that parses JSON and converts date fields to Date type.  

[Documentation](./docs/index.html)

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
