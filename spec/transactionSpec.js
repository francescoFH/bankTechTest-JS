describe('Transaction', () => {
  describe('.display', () => {
    it('has the date of the transaction was made in the first column, formatted as dd/mm/yyyy', () => {
      let date = new Date(2021, 2, 27);
      jasmine.clock().install();
      jasmine.clock.mockDate(date);
      const transaction = new Transaction;
      expect(transaction.display()).toEqual('27/2/2021 || || || ');
      jasmine.clock().uninstall();
    });
  });
});
