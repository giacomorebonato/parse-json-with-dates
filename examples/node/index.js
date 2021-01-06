const { parseJsonWithDates } = require('../../lib')

const data = parseJsonWithDates(
  JSON.stringify({
    a: new Date().toISOString()
  }, ['a'])
)

data.a.toISOString()
