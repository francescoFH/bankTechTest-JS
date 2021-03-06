# Bank Tech Tests - JavaScript
Example of tech test to practice code quality and process.

This is a reimplementation of my Ruby tech test, [available here](https://github.com/francescoFH/bank-tech-test).

It allows you to create an account, deposit funds into it, withdraw funds from it, and print statements.

### How to Run the App
```
$ git clone https://github.com/francescoFH/bankTechTest-JS
$ open SpecRunner.html
open JavaScript console on browser
  > let account = new Account
  > account.deposit(1000)
  > account.deposit(3500)
  > account.withdraw(500)
  > account.statement()
    date || credit || debit || balance
    02/03/2021 ||  || 3000.00 || 500.00
    02/03/2021 || 2500.00 ||  || 3500.00
    02/03/2021 || 1000.00 ||  || 1000.00
```
<img src="https://github.com/francescoFH/bankTechTest-JS/blob/main/JS-console.png" width="400" height="300">

### How to Test the App
Installed Jasmine, a JS browser testing framework.
```
$ open SpecRunner.html
```

# Approach
I have created different classes to keep my app simple and readable:
  * account class to be able to create accounts, make deposits and withdraws and to see statements
  * conversions class to be able to convert the amount to pence
  * transaction class to be able to display transaction with date and deposit/withdraw/balance
  * moment class to be able to convert date objects into formatted strings. I have included a local copy of a small library in src/moment.min.js  
  * statementPrinter class to be able to print the statement correctly

### User Stories
```
As a customer,
So that I can keep control of my money,
I want to open a bank account.
```
```
As a customer,
So that I can safely keep my money in a bank,
I want to make deposits into my account.
```
```
As a customer,
So that I can take out my money from my bank,
I want to make withdrawals from my account.
```
```
As a customer,
So that I can see my transactions
I want to print a bank statement.
```

### Acceptance criteria
**Given** a client makes a deposit of 1000 on 10-01-2021  
**And** a deposit of 2000 on 11-01-2021
**And** a withdrawal of 500 on 12-01-2021  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
12/01/2021 || || 500.00 || 2500.00
11/01/2021 || 2000.00 || || 3000.00
10/01/2021 || 1000.00 || || 1000.00
```
