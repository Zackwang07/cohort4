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
};

// details
accountList.addEventListener('click', (e) => {
    if (e.target.className == 'btnSelect') {
        let selectedName = e.target.parentElement.children[0].textContent;
        let selectedBalance = e.target.parentElement.children[1].textContent;

        accountName.textContent = selectedName;
        accountBalance.textContent = selectedBalance;

        const selectedAccoount = new account(selectedName, selectedBalance);
        let amount;
        const btnDeposit = document.getElementById("btnDeposit");
        const btnWithdraw = document.getElementById("btnWithdraw");

        btnDeposit.addEventListener("click", function(){
            amount = document.getElementById("amount").value;
            selectedAccoount.deposit(amount);
            document.getElementById("amount").value = "";
            messageDetails.textContent = "Money has been deposited.";
            accountBalance.textContent = selectedAccoount.currentBalance;
            e.target.parentElement.children[1].textContent = selectedAccoount.currentBalance;
        });

        btnWithdraw.addEventListener("click", () => {
            amount = document.getElementById("amount").value;
            selectedAccoount.withdraw(amount);
            document.getElementById("amount").value = "";
            messageDetails.textContent = "Money has been withdrawed.";
            accountBalance.textContent = selectedAccoount.currentBalance;
            e.target.parentElement.children[1].textContent = selectedAccoount.currentBalance;
        });
    }
})


// create an account

const btnCreate = document.getElementById("btnCreate");
btnCreate.addEventListener("click", () => {
    const accountList = document.createElement('div');
    accountList.className = 'eachAccount';

    let accountName = document.createElement('p');
    let newName = document.getElementById("newName").value;
    accountName.appendChild(document.createTextNode(newName));
    accountName.className = 'accountName';

    let accountBalance = document.createElement('p');
    let newBalance = document.getElementById("newBalace").value;
    accountBalance.appendChild(document.createTextNode(newBalance));
    accountBalance.className = 'accountBalance';

    let btnSelect = document.createElement('button');
    btnSelect.appendChild(document.createTextNode('Select'));
    btnSelect.className = 'btnSelect';

    const btnDelete = document.createElement('button');
    btnDelete.appendChild(document.createTextNode('Delete'));
    btnDelete.className = 'btnDelete'

    accountList.appendChild(accountName);
    accountList.appendChild(accountBalance);
    accountList.appendChild(btnSelect);
    accountList.appendChild(btnDelete);

    accounts.appendChild(accountList);
    document.getElementById("newName").value = "";
    document.getElementById("newBalace").value = "";

});

// delete an account

accountList.addEventListener('click', (e) => {
    if (e.target.className == 'btnDelete') {
        e.target.parentElement.remove();
    }

})