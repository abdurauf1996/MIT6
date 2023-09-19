const moment = require("moment");
class Account {
  #amount;
  #accoount_id;

  constructor(name, amount, account_id) {
    this.name = name;
    this.#amount = amount;
    this.#accoount_id = account_id;
  }
  tellMeBalance() {
    console.log(`Sizning hisobingida qoldiq:, ${this.#amount}$`);
    return this.#amount;
  }
  withdrawMoney(amount) {
    if (this.#amount > amount) {
      this.#amount -= amount;
      console.log(`Hisob ${amount} yechildi va qoldiq ${this.#amount}`);
    } else {
      console.log(`Sizning balansdagi pul yetarli emas; ${this.#amount}$`);
    }
  }
  makeDeposit(amount) {
    this.#amount += amount;
    console.log(`Hisobingiz toldrildi, hisobingiz ${this.#amount}$`);
  }
  giveMeDetails() {
    console.log(
      `Salom  hurmatli ${
        this.name
      } Bizning banka ishonch bildirganiz uchun tashakur, Sizning xisobingiz ${
        this.#amount
      }$ ga to'ldirldi!`
    );
    console.log("Hisob number:", this.#accoount_id);
  }

  static tellMeAboutClass() {
    console.log("Bu class accountlarni yasash uchun hizmat qiladi");
  }
  static tellMeTime() {
    console.log(`Hozirgi vaqt ${moment().format("YYYY MM DD HH:mm:ss ")}`);
  }
}
module.exports = Account;
