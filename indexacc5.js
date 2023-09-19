const Account = require("./account5");
Account.tellMeAboutClass();
Account.tellMeTime();

console.log("====================");
const myAccount = new Account("Ben", 500000, 6262759077121);
myAccount.giveMeDetails();
myAccount.makeDeposit(1000);

//Bugatti chiyron 2.4mln usd
myAccount.withdrawMoney(240000);
myAccount.makeDeposit(600000);
