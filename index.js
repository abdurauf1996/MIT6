// Module package CORE

/*setTimeout(function () {
  console.log("ishga tushdi");
}, 5000);

let number = 0;
setInterval(function () {
  console.log("hisob", number);
  number++;
}, 0);*/

const fs = require("fs");
const { networkInterfaces } = require("os");
const data = fs.readFileSync("./input.txt", "utf8");
console.log(data);

console.log("****************");

fs.writeFileSync("./input.txt", `${data} \n\t\t by Abdurauf`);

const new_data = fs.readFileSync("./input.txt", "utf8");
console.log(new_data);

// Module package EXTERNAL

// Module package
