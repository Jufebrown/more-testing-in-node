`use strict`

const {assert: {isNumber, equal}} = require(`chai`)
const add = require(`../lib/add`)

describe(`add`, () => {
  it(`should return a number`, () => {
    isNumber(add())
  })

  it(`should take 2 arguments`, () => {
    equal(add.length, 2)
  })
})
