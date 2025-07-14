class Bank{
    constructor(accountnumber, balance){
        this.accountnumber = accountnumber;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
        console.log(`You have deposited: ${amount}`);
        console.log(`Your new balance is: ${this.balance}`);
    }

    withdraw(amount){
        if(amount > this.balance){
            console.log("You don't have enough money");
        }else{
            this.balance -= amount;
            console.log(`You have withdrawn: ${amount}`);
            console.log(`Your new balance is: ${this.balance}`);
        }
    }

    getBalance(){
        console.log(`Your balance is: ${this.balance}`);
    } 
}

const bankaccount1 = new Bank("AN-123", 1000);
console.log("Bank Account Details:");
console.log(`Account Number: ${bankaccount1.accountnumber}`);
console.log("Balance: " + bankaccount1.balance);

bankaccount1.deposit(500);
bankaccount1.withdraw(1000);