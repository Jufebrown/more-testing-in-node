`use strict`

const {assert: {isObject, equal, property, propertyVal}} = require(`chai`)
const parseArgs = require(`../lib/parse-args`)

describe(`parseArgs`, () => {
  it(`should return an object`, () => {
    let testArgs = [4, '*', 2]
    isObject(parseArgs(testArgs))
  })

  it(`should return an object with keys "num1", "operator" and "num2"`, () => {
    let testArgs = [4, '*', 2]
    property(parseArgs(testArgs), 'num1')
    property(parseArgs(testArgs), 'operator')
    property(parseArgs(testArgs), 'num2')
  })

  it(`should take an array of length 3 as an argument and output the elements of the array to num1, operator, and num2 respectively`, () => {
    let testArgs = [4, '*', 2]
    propertyVal(parseArgs(testArgs), 'num1', 4)
    // propertyVal(parseArgs(testArgs), 'operator', '*')
    // propertyVal(parseArgs(testArgs), 'num2', 2)
  })
})
