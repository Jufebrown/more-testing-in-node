`use strict`

const {assert: {isNumber, equal}} = require(`chai`)
const subtract = require(`../lib/subtract`)

describe(`subtract`, () => {
  it(`should return a number`, () => {
    isNumber(subtract())
  })

  it(`should take 2 arguments`, () => {
    equal(subtract.length, 2)
  })

  it(`should subtract the second argument from the first`, () => {
    equal(subtract(2,1), 1)
  })
})
