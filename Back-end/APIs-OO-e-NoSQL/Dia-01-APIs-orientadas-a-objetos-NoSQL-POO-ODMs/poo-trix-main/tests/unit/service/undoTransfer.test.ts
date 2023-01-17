// import { expect } from 'chai';
// import Sinon from 'sinon';
// import Payment from '../../../src/Domain/Payment';
// import PaymentStatus from '../../../src/Domain/PaymentStatus';
// import IPayment from '../../../src/Interfaces/IPayment';
// import PaymentODM, { IPaymentODM } from '../../../src/Models/PaymentODM';
// import TransferService from '../../../src/Services/TransferService';

// class PaymentODMFake implements IPaymentODM {
//   data: IPayment = {
//     amount: 50000,
//     key: '858.898.670-16',
//     payByPerson: 'Jobs',
//     payToPerson: 'Wozniak',
//     id: 'any',
//     status: PaymentStatus.concluded,
//   };
  
//   create = Sinon.stub();

//   async find(): Promise<IPayment> {
//     return this.data;
//   }
//   update(payment: Payment): Promise<void> {
//     this.data.status = payment.getStatus();
//   }
// }

// describe('undoTransfer', function () {
//   it('deveria persistir a alteração', async function () {
//     const paymentODM = new PaymentODMFake();
//     const service = new TransferService(paymentODM);

//     await service.undoTransfer('any');

//     expect(paymentODM.data.status).to.be.equal(PaymentStatus.reversed);
//   });
// });