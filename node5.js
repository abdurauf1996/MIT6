const calculate = require("./hisob5.js");
const natija = calculate.kopaytish(80, 30);
console.log("natija:", natija);

console.log("++++++++++++++++++");

const natija2 = calculate.qoshish(80, 30);
console.log("natija:", natija2);
console.log("+++++++++++++++++++");
const natija3 = calculate.ayrish(279, 30);
console.log("natija:", natija3);

// console.log(require("module").wrapper);
