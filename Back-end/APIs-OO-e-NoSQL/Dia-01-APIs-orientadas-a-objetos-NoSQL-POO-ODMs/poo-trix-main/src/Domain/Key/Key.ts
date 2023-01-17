// src/Domain/Key/Key.ts

class Key {
  private id?: string;
  private value: string;
  private owner: string;
  private type: string;

  constructor(
    value: string,
    owner: string,
    type: string,
    id: string | undefined,
  ) {
    this.value = value;
    this.owner = owner;
    this.type = type;
    this.id = id;
  }

  public getValue() {
    return this.value;
  }

  public setValue(value: string) {
    this.value = value;
  }

  public getOwner() {
    return this.owner;
  }

  public setOwner(keyOwner: string) {
    this.owner = keyOwner;
  }

  public getType() {
    return this.type;
  }

  public setType(type: string) {
    this.type = type;
  }
}

export default Key;