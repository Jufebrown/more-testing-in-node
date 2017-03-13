`use strict`

const {assert: {isObject, equal, property}} = require(`chai`)
const parseArgs = require(`../lib/parse-args`)

describe(`parseArgs`, () => {
  it(`should return a number`, () => {
    isObject(parseArgs())
  })

  it(`should return an object with keys "num1", "operator" and "num2"`, () => {
    property(parseArgs(), 'num1')
    property(parseArgs(), 'operator')
    property(parseArgs(), 'num2')
  })

})
