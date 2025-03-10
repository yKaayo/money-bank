import Client from "./Client";

export default class Account {
  static numAccounts = 0;

  #client;
  #balance = 0;

  set client(client) {
    if (client instanceof Client) {
      this.#client = client;
    }
  }

  constructor(cardNumber, client) {
    Account.numAccounts++;

    this.cardNumber = cardNumber;
    this.#client = client;
  }

  take(value) {
    if (this.#balance >= value) {
      this.#balance -= value;
      console.log("Deu certo");

      return value;
    }
    console.log("Deu errado");
  }

  deposit(value) {
    if (value <= 0) {
      console.log("Deu errado");
      return;
    }
    this.#balance += value;
    console.log("Deu Certo");
  }
}
