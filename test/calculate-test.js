`use strict`

const {assert: {isNumber, isArray, property, equal}} = require(`chai`)
const calculate = require(`../lib/calculate`)

describe(`calculate`, () => {
  it(`should output a number`, () => {
    isNumber(calculate(1, '+', 2))
  })

  it(`should perform addition if operator = '+'`, () => {
    equal(calculate(1, '+', 2), 3)
  })

  it(`should perform subtraction if operator = '-'`, () => {
    equal(calculate(1, '-', 2), -1)
  })

  it(`should perform multiplication if operator = '*'`, () => {
    equal(calculate(2, '*', 3), 6)
  })

  it(`should perform division if operator = '/'`, () => {
    equal(calculate(10, '/', 2), 5)
  })
})
