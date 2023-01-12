import PaymentStatus from './PaymentStatus';

type PaymentParams = {
  payByPerson: string,
  payToPerson: string,
  amount: number,
  key: string,
  id?: string,
  status?: PaymentStatus
};

class Payment {
  private id: string | undefined; // undefined se os dados não estiverem no banco (Ex: antes do cadastro)
  private payByPerson: string;
  private payToPerson: string;
  private amount: number;
  private key: string;
  private status: PaymentStatus;

  constructor(params: PaymentParams) {
    this.id = params.id;
    this.payByPerson = params.payByPerson;
    this.payToPerson = params.payToPerson;
    this.amount = params.amount;
    this.key = params.key;
    this.status = params.status || PaymentStatus.concluded;
  }

  undo() {
    this.status = PaymentStatus.reversed;
  }

  getStatus() {
    return this.status;
  }
  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setPayByPerson(payByPerson: string) {
    this.payByPerson = payByPerson;
  }

  public getPayByPerson() {
    return this.payByPerson;
  }

  public setPayToPerson(payToPerson: string) {
    this.payToPerson = payToPerson;
  }

  public getPayToPerson() {
    return this.payToPerson;
  }

  public setAmount(amount: number) {
    this.amount = amount;
  }

  public getAmount() {
    return this.amount;
  }

  public setKey(key: string) {
    this.key = key;
  }

  public getKey() {
    return this.key;
  }
}

export default Payment;