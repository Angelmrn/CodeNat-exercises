class BankAccount{
    constructor(accNum, accHolder, balance){
        this.accNum = accNum; // Account number
        this.accHolder = accHolder; // Account holder's name
        this.balance = balance; // Account balance
    }

    deposit(amount){
        this.balance += amount;
        console.log("_______________________________________________________________");
        console.log(`Deposited: $${amount}. Deposited into account : ${this.accNum}`);
        console.log("_______________________________________________________________");
    }

    withdraw(amount){
        if(amount > this.balance){
            console.log("_______________________________________________________________");
            console.log(`Insufficient funds for withdrawal of $${amount} from account: ${this.accNum}`);
            console.log("_______________________________________________________________");
        }else{
            this.balance -= amount;
            console.log("_______________________________________________________________");
            console.log(`Withdrew: $${amount}. Remaining balance in account ${this.accNum} is $${this.balance}`);
            console.log("_______________________________________________________________");
        }
    }

    transfer(amount, targetAcc){
        if(amount > this.balance){
            console.log("_______________________________________________________________");
            console.log(`Insufficient funds for transfer from account: ${this.accNum}`);
            console.log("_______________________________________________________________");
        }else{
            this.balance -= amount;
            targetAcc.deposit(amount);
            console.log("_______________________________________________________________");
            console.log(`Transferred: $${amount} from account ${this.accNum} to account ${targetAcc.accNum}. New balance: $${this.balance}`);
            console.log("_______________________________________________________________");
        }
    }

    getBalance(){
        console.log("_______________________________________________________________");
        console.log(`Balance for account ${this.accNum} is $${this.balance}`);
        console.log("_______________________________________________________________");
    }
}

const account1 = new BankAccount('123', 'Alice', 1000);
const account2 = new BankAccount('456', 'Bob', 500);

account1.getBalance();
account2.getBalance();

account1.deposit(200);
account1.getBalance();

account1.withdraw(150);
account1.getBalance();

account1.transfer(300, account2);
account1.getBalance();
account2.getBalance();