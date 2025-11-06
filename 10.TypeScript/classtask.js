let accountNumber = 1001;
class BankAccount {
    constructor(owner, initialBalance = 0) {
        this.owner = owner;
        this.balance = initialBalance;
        this.accountNumber = accountNumber++;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance < amount) {
            console.log("Insufficent balance");
            return;
        }
        this.balance -= amount;
    }
    getBalance() {
        return this.balance;
    }
    getOwner() {
        return this.owner;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
    displayInfo() {
        return `Account: ${this.accountNumber} - Owner: ${this.owner} - Balance: ${this.balance}$`;
    }
}
class SavingsAccount extends BankAccount {
    constructor(owner, initialBalance, interestRate) {
        super(owner, initialBalance);
        this.interestRate = interestRate;
        this.withdrawCount = 0;
    }
    applyInterest() {
        const interest = this.getBalance() * this.interestRate / 100;
        this.deposit(interest);
    }
    withdraw(amount) {
        if (this.withdrawCount > 2) {
            console.log("Limit reached!");
            return;
        }
        super.withdraw(amount);
        this.withdrawCount++;
    }
    displayInfo() {
        return `${super.displayInfo()} - InterestRate: ${this.interestRate}%`;
    }
}
class CheckingAccount extends BankAccount {
    constructor(owner, initialBalance, transactionFee) {
        super(owner, initialBalance);
        this.transactionFee = transactionFee;
    }
    withdraw(amount) {
        const total = amount + this.transactionFee;
        super.withdraw(amount);
    }
    displayInfo() {
        return `${super.displayInfo()} - Fee: ${this.transactionFee}$`;
    }
}
class BusinessAccount extends BankAccount {
    constructor(owner, initialBalance, loanLimit) {
        super(owner, initialBalance);
        this.loanLimit = loanLimit;
    }
    requestLoan(amount) {
        if (amount > this.loanLimit) {
            console.log("Loan amount exceeds the allowed limit.");
            return;
        }
        this.deposit(amount);
    }
    displayInfo() {
        return `${super.displayInfo()} - LoanLimit: ${this.loanLimit}$`;
    }
}
const acc1 = new SavingsAccount("Firidun", 1000, 5);
const acc2 = new CheckingAccount("Rza", 500, 2);
const acc3 = new BusinessAccount("Ilkin", 2000, 5000);
acc1.deposit(100);
acc2.withdraw(50);
acc3.requestLoan(3000);
acc1.applyInterest();
console.log(acc1.displayInfo());
console.log(acc2.displayInfo());
console.log(acc3.displayInfo());
export {};
//# sourceMappingURL=classtask.js.map