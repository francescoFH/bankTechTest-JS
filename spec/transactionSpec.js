describe('Transaction', () => {
  describe('.display', () => {
    it('has the date of the transaction was made in the first column, formatted as dd/mm/yyyy', () => {
      let date = new Date(2021, 1, 27);
      jasmine.clock().install();
      jasmine.clock().mockDate(date);
      const transaction = new Transaction;
      expect(transaction.display()).toEqual('27/02/2021 || || || ');
      jasmine.clock().uninstall();
    });

    it('has the credit amount in the second column', () => {
      let date = new Date(2021, 1, 27);
      jasmine.clock().install();
      jasmine.clock().mockDate(date);
      const transaction = new Transaction(10000);
      expect(transaction.display()).toEqual('27/02/2021 || 100.00 || || ');
      jasmine.clock().uninstall();
    });
  });
});
