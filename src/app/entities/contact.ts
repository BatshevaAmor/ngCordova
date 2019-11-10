export class Contact {
  private _name: String;
  private _img: String;
  private _selected: Boolean = false;
  private _email: Array<String> = [];
  private _number: String;

  constructor(name: String, img: String, selected: Boolean, email: Array<String>, number: String) {
    this._name = name;
    this._img = img;
    this._selected = selected;
    this._email = email;
    this._number = number;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get img(): String {
    return this._img;
  }

  set img(value: String) {
    this._img = value;
  }

  get selected(): Boolean {
    return this._selected;
  }

  set selected(value: Boolean) {
    this._selected = value;
  }

  get email(): Array<String> {
    return this._email;
  }

  set email(value: Array<String>) {
    this._email = value;
  }

  get number(): String {
    return this._number;
  }

  set number(value: String) {
    this._number = value;
  }
}
