`use strict`

const {assert: {isNumber, equal}} = require(`chai`)
const divide = require(`../lib/divide`)

describe(`divide`, () => {
  it(`should return a number`, () => {
    isNumber(divide())
  })

  it(`should take 2 arguments`, () => {
    equal(divide.length, 2)
  })

  it(`should divide the numbers`, () => {
    equal(divide(4,2), 2)
  })
})
