class BankAccount {
  constructor(accountHolder, accountNumber, balance = 0) {
    this.accountHolder = accountHolder;
    this.balance = balance;
    this.accountNumber = accountNumber;
  }

  deposit(sum) {
    if (sum > 0) {
      this.balance += sum;
      return `$${sum} deposited.\n Current balance: $${this.balance}`;
    } else {
      return "Deposit amount must be positive";
    }
  }
  withdraw(sum) {
    if (sum > 0 && this.balance >= sum) {
      this.balance -= sum;
      return `$${sum} withdrawn.\nCurrent balance: $${this.balance}`;
    } else {
      return "Invalid withdrawal amount or insufficient funds";
    }
  }
  checkBalance() {
    return `Account balance for ${this.accountHolder}:$${this.balance}`;
  }
}

const accounts = new Map();

function createAccount() {
  const accountHolder = document.getElementById("acc-holder").value;
  const initialBalance = parseFloat(
    document.getElementById("initial-balance").value
  );
  if (accountHolder === "") {
    return (document.getElementById(
      "resultContainer"
    ).innerText = `To create account you need a valid holder name.`);
  } else {
    const accountNumber = Math.floor(Math.random() * 10000000);

    const newAccount = new BankAccount(
      accountHolder,
      accountNumber,
      initialBalance
    );
    accounts.set(accountNumber, newAccount);
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerText = `Account created. Account Number: ${accountNumber}`;
    resultContainer.style.visibility = "visible";
  }
}

function deposit() {
  const accountNumber = parseInt(document.getElementById("acc-number").value);
  const amount = parseFloat(document.getElementById("amount").value);
  const account = accounts.get(accountNumber);
  if (account) {
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerText = account.deposit(amount);
    resultContainer.style.visibility = "visible";
  } else {
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerText = "Account not found";
    resultContainer.style.visibility = "visible";
  }
}

function withdraw() {
  const accountNumber = parseInt(document.getElementById("acc-number").value);
  const amount = parseFloat(document.getElementById("amount").value);
  const account = accounts.get(accountNumber);
  if (account) {
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerText = account.withdraw(amount);
    resultContainer.style.visibility = "visible";
  } else {
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerText = "Account not found";
    resultContainer.style.visibility = "visible";
  }
}

function checkBalance() {
  const accountNumber = parseInt(document.getElementById("acc-number").value);
  const amount = parseFloat(document.getElementById("amount").value);
  const account = accounts.get(accountNumber);
  if (account) {
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerText = account.checkBalance(amount);
    resultContainer.style.visibility = "visible";
  } else {
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerText = "Account not found";
    resultContainer.style.visibility = "visible";
  }
}
