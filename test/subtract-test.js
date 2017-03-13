`use strict`

const {assert: {isNumber, equal}} = require(`chai`)
const subtract = require(`../lib/subtract`)

describe(`subtract`, () => {
  it(`should return a number`, () => {
    isNumber(subtract())
  })

  // it(`should take 2 arguments`, () => {
  //   equal(add.length, 2)
  // })

  // it(`should sum the 2 arguments`, () => {
  //   equal(add(1,2), 3)
  // })
})
