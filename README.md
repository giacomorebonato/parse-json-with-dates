[![parse-json-with-dates stats](https://github-readme-stats.vercel.app/api?username=giacomorebonato)](https://github.com/giacomorebonato/parse-json-with-dates)


# parse-json-with-dates

A small utility that parses JSON and converts date fields to Date type.  

**Example**

```js
import { parseJsonWithDates } from 'parse-json-with-dates'

const parsed = parseJsonWithDates(
  JSON.stringify({ 'date-field': new Date().toISOString() }),
  ['date-field']
)

parsed.a.toISOString()
```

```typescript
import { parseJsonWithDates } from 'parse-json-with-dates'

type MyDate = {
  a: Date
}

parseJsonWithDates<MyDate>(
  JSON.stringify({ 'date-field': new Date().toISOString() }),
  ['date-field']
)

parsed.a.toISOString()
```
