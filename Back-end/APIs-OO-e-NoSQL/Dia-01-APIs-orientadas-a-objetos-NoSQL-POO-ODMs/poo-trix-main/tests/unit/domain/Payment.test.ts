import { expect } from 'chai';
import Payment from '../../../src/Domain/Payment';
import PaymentStatus from '../../../src/utils/PaymentStatus';

describe('Payment', function () {
  it('deve criar um pagamento', function () {
    const payment = new Payment({
      payByPerson: 'Jobs',
      payToPerson: 'Wozniak',
      amount: 50000,
      key: '858.898.630-16',
      id: 'any',
    });

    expect(payment).to.be.instanceOf(Payment);
  });

  it('Deve cancelar o pagamento', function () {
    const payment = new Payment({
      payByPerson: 'Jobs',
      payToPerson: 'Wozniak',
      amount: 50000,
      key: '858.898.670-16',
      id: 'any',
    });

    payment.undo(new Date());

    expect(payment.getStatus()).to.be.equal(PaymentStatus.reversed);
  });

  it('Não deve cancelar o pagamento caso já tenha passado 1 mês', function () {
    const payment = new Payment({
      payByPerson: 'Jobs',
      payToPerson: 'Wozniak',
      amount: 50000,
      key: '858.898.670-16',
      id: 'any',
      // date: new Date('2022-10-10'),
    });

    expect(() => {
      payment.undo(new Date('2022-12-12'));
    }).to.throw('invalid undo operation');
  });
});