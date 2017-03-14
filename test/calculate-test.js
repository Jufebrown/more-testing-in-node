`use strict`

const {assert: {isNumber, isArray}} = require(`chai`)
const calculate = require(`../lib/calculate`)

describe(`calculate`, () => {
  it(`should output a number`, () => {
    isNumber(calculate().answer)
  })

  it(`should get the user input as an array`, () => {
    isArray(calculate().args)
  })
})
