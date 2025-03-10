export default class Client {
  #cpf;

  get cpf() {
    return this.#cpf;
  }

  constructor(name, cpf) {
    this.name = name;
    this.#cpf = cpf;
  }
}
