`use strict`


module.exports = (num1, operator, num2) => {
  if(operator === '+') {
    let answer = require(`../lib/add`)(num1, num2)
    return answer
  }
}
