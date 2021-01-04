# parse-json-with-dates

A small utility that parses JSON and converts date fields to Date type.  

**Example**

```js
import { parseJsonWithDates } from 'parse-json-with-dates'

parseJsonWithDates(
  JSON.stringify({ 'date-field': new Date() }),
  ['date-field']
)
```

```typescript
import { parseJsonWithDates } from 'parse-json-with-dates'

type MyDate = {
  a: Date
}

parseJsonWithDates<MyDate>(
  JSON.stringify({ 'date-field': new Date() }),
  ['date-field']
)
```
