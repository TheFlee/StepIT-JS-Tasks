let accountNumber: number = 1001

class BankAccount {
    private owner: string
    private balance: number
    private accountNumber: number

    constructor(owner: string, initialBalance: number = 0) {
        this.owner = owner
        this.balance = initialBalance
        this.accountNumber = accountNumber++
    }

    deposit(amount: number): void {
        this.balance += amount
    }

    withdraw(amount: number): void {
        if (this.balance < amount) {
            console.log("Insufficent balance")
            return
        }
        this.balance -= amount
    }

    getBalance(): number {
        return this.balance
    }

    getOwner(): string {
        return this.owner
    }

    getAccountNumber(): number {
        return this.accountNumber
    }

    displayInfo(): string {
        return `Account: ${this.accountNumber} - Owner: ${this.owner} - Balance: ${this.balance}$`
    }
}

class SavingsAccount extends BankAccount {
    private interestRate: number
    private withdrawCount: number

    constructor(owner: string, initialBalance: number, interestRate: number) {
        super(owner, initialBalance);
        this.interestRate = interestRate;
        this.withdrawCount = 0;
    }

    applyInterest(): void {
        const interest = this.getBalance() * this.interestRate / 100
        this.deposit(interest)
    }

    withdraw(amount: number): void {
        if (this.withdrawCount > 2) {
            console.log("Limit reached!")
            return
        }
        super.withdraw(amount)
        this.withdrawCount++
    }

    displayInfo(): string {
        return `${super.displayInfo()} - InterestRate: ${this.interestRate}%`
    }
}

class CheckingAccount extends BankAccount {
    private transactionFee: number

    constructor(owner: string, initialBalance: number, transactionFee: number) {
        super(owner, initialBalance)
        this.transactionFee = transactionFee
    }

    withdraw(amount: number): void {
        const total = amount + this.transactionFee
        super.withdraw(amount)
    }

    displayInfo(): string {
        return `${super.displayInfo()} - Fee: ${this.transactionFee}$`
    }
}

class BusinessAccount extends BankAccount {
    private loanLimit: number

    constructor(owner: string, initialBalance: number, loanLimit: number) {
        super(owner, initialBalance);
        this.loanLimit = loanLimit
    }

    requestLoan(amount: number): void {
        if (amount > this.loanLimit) {
            console.log("Loan amount exceeds the allowed limit.")
            return
        }
        this.deposit(amount)
    }

    displayInfo(): string {
        return `${super.displayInfo()} - LoanLimit: ${this.loanLimit}$`
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