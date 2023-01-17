import PaymentStatus from './PaymentStatus';

type PaymentParams = {
  payByPerson: string,
  payToPerson: string,
  amount: number,
  key: string,
  id?: string,
  status?: PaymentStatus,
  // date?: Date,
};

class Payment {
  private id: string | undefined; // undefined se os dados não estiverem no banco (Ex: antes do cadastro)
  private payByPerson: string;
  private payToPerson: string;
  private amount: number;
  private key: string;
  private status: PaymentStatus;
  // private date: Date;

  constructor(params: PaymentParams) {
    this.id = params.id;
    this.payByPerson = params.payByPerson;
    this.payToPerson = params.payToPerson;
    this.amount = params.amount;
    this.key = params.key;
    this.status = params.status || PaymentStatus.concluded;
    // this.date = params.date || new Date();
  }

  undo(undoDate: Date) {
    // if (this.isExpiredForUndo(undoDate)) {
    //   throw new Error('invalid undo operation');
    // }
    this.status = PaymentStatus.reversed;
  }

  // private isExpiredForUndo(date: Date): boolean {
  //   return date.getTime() - this.date.getTime() > 25920000000;
  // }

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