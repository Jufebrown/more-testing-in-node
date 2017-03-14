`use strict`


module.exports = () => {
  const { argv: [,, ...args] } = process,
        { num1, operator, num2 } = require('./parse-args')(args)


  let answer = 2
  console.log('Answer:', answer)

  let testObj = {}
  testObj.answer = answer
  testObj.args = args
  testObj.num1 = num1
  testObj.operator = operator
  testObj.num2 = num2
  return testObj
}
