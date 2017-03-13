`use strict`

const {assert: {isNumber, equal}} = require(`chai`)
const multiply = require(`../lib/multiply`)

describe(`multiply`, () => {
  it(`should return a number`, () => {
    isNumber(multiply())
  })

  it(`should take 2 arguments`, () => {
    equal(multiply.length, 2)
  })

  it(`should multiply the numbers`, () => {
    equal(multiply(2,1), 2)
  })
})
