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

  // it(`should subtract the second argument from the first`, () => {
  //   equal(subtract(2,1), 1)
  // })
})
