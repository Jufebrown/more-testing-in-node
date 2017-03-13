`use strict`

const {assert: {isObject, equal}} = require(`chai`)
const parseArgs = require(`../lib/parse-args`)

describe(`parseArgs`, () => {
  it(`should return a number`, () => {
    isObject(parseArgs())
  })

  // it(`should take 2 arguments`, () => {
  //   equal(parseArgs.length, 2)
  // })

  // it(`should parseArgs the numbers`, () => {
  //   equal(parseArgs(4,2), 2)
  // })
})
