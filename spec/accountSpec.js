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

    it('updates balance when funds are withdrawned more than one time', () => {
      const account = new Account()
      account.deposit(500)
      account.withdraw(100)
      expect(account.withdraw(200)).toEqual(
        '200.00 withdrawn. Current balance: 200.00'
      );
    });

    it('return error when withdraw requests is higher than balance', () => {
      const account = new Account()
      account.deposit(200)
      expect(account.withdraw(500)).toEqual(
        'Insufficient funds'
      );
    });
  });

  describe('uses Transaction class', () => {
    it('deposit calls for new Transaction', () => {
      let mockObj = {
        Mock: function () {},
      };
      spyOn(mockObj, 'Mock');
      const account = new Account(mockObj.Mock);
      account.deposit(100);
      expect(mockObj.Mock).toHaveBeenCalled();
    });

    it("withdraw calls for new Transaction", () => {
      let mockContainer = {
        Mock: function () {},
      };
      spyOn(mockContainer, "Mock");
      const account = new Account(mockContainer.Mock);
      account.deposit(100);
      account.withdraw(100);
      expect(mockContainer.Mock).toHaveBeenCalledTimes(2);
    });
  });

  describe("uses StatementPrinter class", () => {
    it("statement calls StatementPrinter.print", () => {
      let Mock = {
          print: function(){}
      };
      spyOn(Mock, "print");
      const account = new Account(Transaction, Mock);
      account.statement()
      expect(Mock.print).toHaveBeenCalled();
    });
  });
});
