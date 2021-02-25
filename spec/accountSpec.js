describe('Account', () => {
  describe('.deposit', () => {
    it('results in balance of 200 when deposited 200', () => {
      const account = new Account();
      expect(account.deposit(200)).toEqual(
        '200.00 deposited. Current balance: 200.00'
      );
    });

    it('results in balance of 300 when deposited 200 and then 100', () => {
      const account = new Account();
      account.deposit(200);
      expect(account.deposit(100)).toEqual(
        '100.00 deposited. Current balance: 300.00'
      );
    });

    it('results in balance of 100.50 when deposited 100.50', () => {
      const account = new Account();
      expect(account.deposit(100.50)).toEqual(
        '100.50 deposited. Current balance: 100.50'
      );
    });
  });
});
