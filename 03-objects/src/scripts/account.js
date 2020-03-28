class account {

    constructor(accountName, startingBalance) {
        this.accountName = accountName;
        this.currentBalance = startingBalance;
    }

    deposit(amount) {
        return this.currentBalance = parseInt(this.currentBalance) + parseInt(amount);
    }

    withdraw(amount) {
        return this.currentBalance = this.currentBalance - amount;
    }

    balance() {
        return `The current balance of ${this.accountName} is ${this.currentBalance}`;
    }

    createCard(){
        const newDiv = document.createElement('div');

        // Title
        const h2 = document.createElement('h2');
        newDiv.appendChild(h2)

        // deposit section
        
        
    }
};

class accountController {
    constructor(){}

    createAccount(newName, startBalance){

    }

    lowestAccount(){
        
    }
}

export default {account, accountController}