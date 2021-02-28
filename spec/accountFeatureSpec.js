describe('Account Feature', () => {
  it('return a statement of all deposits/withdraws', () => {
    jasmine.clock().install();
    const dateOne = new Date(2021, 1, 21);
    const dateTwo = new Date(2021, 1, 22);
    const dateThree = new Date(2021, 1, 23);

    const account = new Account();

    jasmine.clock().mockDate(dateOne);
    acount.deposit(1000);

    jasmine.clock().mockDate(dateTwo);
    acount.deposit(2000);

    jasmine.clock().mockDate(dateThree);
    acount.withdraw(500);

    statementOutput = [
      'date || credit || debit || balance ',
      '23/02/2021 || || 500.00 || 2500.00 ',
      '22/02/2021 || 2000 || || 3000.00 ',
      '21/02/2021 || 1000 || || 1000.00 ',
    ].join('\n');

    expect(account.statement()).toEqul(statementOutput);

    jasmine.clock().uninstall();
  });
});
