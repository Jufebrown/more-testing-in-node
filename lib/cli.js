`use strict`

process.title = 'Calculator';

const { argv: [,, ...args] } = process,
      { num1, operator, num2 } = require('./parse-args')(args),
      answer = require('./calculate')(num1, operator, num2);


console.log(answer);
