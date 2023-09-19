/*function parametr(abc) {
  let count = 0;
  for (let i = 0; i < abc.length; i++) {
    if (count === abc.charAt) {
      count++;
    }
  }
  return count;
}
console.log(parametr("ab134"));
const validator = require("vali");*/

const validator_1 = require("validator");
const test_1 = validator_1.isInt("10");
console.log("test:", test_1);
