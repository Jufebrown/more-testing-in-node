`use strict`

const {assert: {isNumber, isArray, property}} = require(`chai`)
const calculate = require(`../lib/calculate`)

describe(`calculate`, () => {
  it(`should output a number`, () => {
    isNumber(calculate().answer)
  })

  it(`should get the user input as an array`, () => {
    isArray(calculate().args)
  })

  it(`should pass the user args through parse-args to get an object`, () => {
    property(calculate(), 'num1')
    property(calculate(), 'operator')
    property(calculate(), 'num2')
  })

})
