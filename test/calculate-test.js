`use strict`

const {assert: {isNumber}} = require(`chai`)
const calculate = require(`../lib/calculate`)

describe(`calculate`, () => {
  it(`should output a number`, () => {
    isNumber(calculate())
  })

  // it(`should get the user input as an array`, () => {
  //   isArray(calculate())
  // })
})
