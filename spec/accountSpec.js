describe('Account', () => {
  describe('.deposit', () => {
    it('increases balance when funds are deposited', () => {
      const account = new Account();
      expect(account.deposit(200)).toEqual(
        '200.00 deposited. Current balance: 200.00'
      );
    });

    it('updates balance when funds are deposited more than one time', () => {
      const account = new Account();
      account.deposit(200);
      expect(account.deposit(100)).toEqual(
        '100.00 deposited. Current balance: 300.00'
      );
    });

    it('updates balance with two decimals when funds with pences is deposited', () => {
      const account = new Account();
      expect(account.deposit(100.50)).toEqual(
        '100.50 deposited. Current balance: 100.50'
      );
    });
  });

  describe('.withdraw', () => {
    it('decreases balance when funds are withdrawn', () => {
      const account = new Account()
      account.deposit(500)
      expect(account.withdraw(100)).toEqual(
        '100.00 withdrawn. Current balance: 400.00'
      );
    });
  });
});
