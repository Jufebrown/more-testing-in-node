`use strict`


module.exports = () => {
  const { argv: [,, ...args] } = process
  let answer = 2
  console.log('Answer:', answer)

  let testObj = {}
  testObj.answer = answer
  testObj.args = args
  return testObj
}
