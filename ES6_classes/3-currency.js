// 3-currency

export default class Currency {
  constructor(code, name) {
    this._code = code; // Attribut privé pour le code de la devise
    this._name = name; // Attribut privé pour le nom de la devise
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`; // Affiche le nom suivi du code entre parenthèses
  }
}
