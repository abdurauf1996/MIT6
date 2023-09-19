// Module package CORE

//const { default: inquirer } = require("inquirer");

// Module package EXTERNAL

/*const moment = require("moment");
const time = moment().format(); //"YYYY-MM-DD";
console.log(time);
setInterval(() => {
  const time = moment().format();
  console.log(`hozirgi vaqt:${time}`);
}, 6000);*/

/*const inquirer = require("inquirer");
inquirer
  .prompt([{ type: "input", name: "raqam", message: "raqamni kiriting?" }])
  .then((answer) => {
    console.log("man kiritng raqam qiymati:", answer.raqam);
  })
  .catch((err) => console.log(err));*/

/*const validator = require("validator");
const test = validator.isEmail("foo@bar.com");
console.log("test:", test);

const validator_1 = require("validator");
const test_1 = validator_1.isInt("10");
console.log("test:", test_1);

const validator_2 = require("validator");
const test_2 = validator_2.isIP("66.249.73.237");
console.log("test:", test_2);*/

const { v4: uuidv4 } = require("uuid");
const random = uuidv4();
console.log("random:", random);

const chalk = require("chalk");
const log = console.log;
log(chalk.blue(`uuid creates ${random}`));
//Module package FILE
