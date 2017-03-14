`use strict`

module.exports = (argsArr) => {
  let argsObj = {}
  argsObj.num1 = +argsArr[0]
  argsObj.operator = argsArr[1]
  argsObj.num2 = +argsArr[2]
  return argsObj
}
