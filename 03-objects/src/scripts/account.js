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

    // accountDiv
        const newAccount = document.createElement('div');

    // accountName
        let accountName = document.createElement('div');
        accountName.appendChild(document.createTextNode(this.accountName));
    
    // accountBlance
        let accountBalance = document.createElement('div');
        accountBalance.appendChild(document.createTextNode(this.currentBalance));
    
    // select button
        let btnSelect = document.createElement('button');
        btnSelect.appendChild(document.createTextNode('Select'));
    
    // delete button
        const btnDelete = document.createElement('button');
        btnDelete.appendChild(document.createTextNode('Delete'));
    
        newAccount.appendChild(accountName);
        newAccount.appendChild(accountBalance);
        newAccount.appendChild(btnSelect);
        newAccount.appendChild(btnDelete);
        
        return newAccount;
    }
};

class accountController {
    constructor(){
        this.accountList = [];
    }

    addAccount(account){
        this.accountList.push(account)
    }

    removeAccount(name){
        let index = this.accountList.findIndex(value => value.accountName == name);
        this.accountList.splice(index,1)
    }
   

    lowestAccount(){
        let lowest = this.accountList[0];
        this.accountList.forEach(value =>{
            if (parseInt(value.currentBalance)<parseInt(lowest.currentBalance)){
                lowest = value;
            }
        })
        return lowest;
    }

    highestAccount(){
        let highest = this.accountList[0];
        this.accountList.forEach(value =>{
            if (parseInt(value.currentBalance)>parseInt(highest.currentBalance)){
                highest = value;
            }
        })
        return highest;
    }

    totalBalance(){
        let sum = 0;
        this.accountList.forEach(value =>{
            sum += parseInt(value.currentBalance);
        })
        return sum;
    }
}

export default {account, accountController}