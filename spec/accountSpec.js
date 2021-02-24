describe('Account', () => {
  describe('.deposit', () => {
    it('results in balance of 200 when passed 200', () => {
      const account = new Account();
      expect(account.deposit(100)).toEqual(
        '200.00 deposited. Current balance: 200.00'
      );
    });
  });
});
