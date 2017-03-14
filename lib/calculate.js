`use strict`


module.exports = (num1, operator, num2) => {
  if(operator === '+') {
    let answer = require(`./add`)(num1, num2)
    return answer
  } else if (operator === '-') {
    let answer = require(`./subtract`)(num1, num2)
    return answer
  } else if (operator === '*') {
    let answer = require(`./multiply`)(num1, num2)
    return answer
  }
}
