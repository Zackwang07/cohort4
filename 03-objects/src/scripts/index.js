import accountFunc from './account.js';


// create an account
let arrayAccounts = new accountFunc.accountController();

const btnCreate = document.getElementById("btnCreate");
btnCreate.addEventListener("click", () => {

    let newAccount = new accountFunc.account(document.getElementById('newName').value, document.getElementById('newBalance').value)
    // add to array
    arrayAccounts.addAccount(newAccount);

    //update cards


    updatecards();
    resetFields();
    updateSummary();
});

// delete an account

divAccounts.addEventListener('click', (e) => {
    // delete card
    if (e.target.textContent == 'Delete' && e.target.tagName == 'BUTTON') {
        // remove from array
        arrayAccounts.removeAccount(e.target.parentElement.children[0].textContent);

        updatecards();
        resetFields();
        divAccountName.textContent = "";
        divAccountBalance.textContent = "";
        updateSummary();
    }
});

// 
function updatecards() {

    if (divAccounts.children.length > 0) {
        divAccounts.textContent = "";
    }
    divAccounts.append(arrayAccounts.createCardsDiv());
}


function updateSummary() {
    if (arrayAccounts.accountList.length == 0) {
        spanLowest.textContent = "";
        spanHighest.textContent = "";
        spanTotal.textContent = "";
    } else {
        // Show lowest account
        spanLowest.textContent = `${arrayAccounts.lowestAccount().accountName}:${arrayAccounts.lowestAccount().currentBalance}`;
        // Show Highest Account
        spanHighest.textContent = `${arrayAccounts.highestAccount().accountName}:${arrayAccounts.highestAccount().currentBalance}`;
        // Show total balance
        spanTotal.textContent = arrayAccounts.totalBalance();
    }

}

function resetFields() {
    document.getElementById("newName").value = "";
    document.getElementById("newBalance").value = "";
    document.getElementById("amount").value = "";

}

//account transition

//select account
divAccounts.addEventListener('click', (e) => {
    if (e.target.textContent == 'Select' && e.target.tagName == 'BUTTON') {
        console.log('clicked btnSelect');

        divAccountName.textContent = e.target.parentElement.children[0].textContent;
        divAccountBalance.textContent = e.target.parentElement.children[1].textContent;
        // console.log(arrayAccounts.selectAccount(e.target.parentElement.children[0].textContent));     
    }
});
//deposit
const btnDeposit = document.getElementById("btnDeposit");
btnDeposit.addEventListener('click', () => {
    const selectedAccount = new accountFunc.account(divAccountName.textContent, divAccountBalance.textContent);
    const amount = document.getElementById("amount").value;
    selectedAccount.deposit(amount);
    //update div
    messageDetails.textContent = "Money has been deposited.";
    divAccountBalance.textContent = selectedAccount.currentBalance;
    //update array
    arrayAccounts.selectAccount(divAccountName.textContent).currentBalance = selectedAccount.currentBalance;
    // console.log(arrayAccounts.selectAccount(divAccountName.textContent));

    updatecards();
    resetFields();
    updateSummary();

});

// withdraw
const btnWithdraw = document.getElementById("btnWithdraw");
btnWithdraw.addEventListener("click", () => {
    const selectedAccount = new accountFunc.account(divAccountName.textContent, divAccountBalance.textContent);
    const amount = document.getElementById("amount").value;
    selectedAccount.withdraw(amount);
    //update div
    messageDetails.textContent = "Money has been withdrawed.";
    divAccountBalance.textContent = selectedAccount.currentBalance;
    //update array
    arrayAccounts.selectAccount(divAccountName.textContent).currentBalance = selectedAccount.currentBalance;
    
    updatecards();
    resetFields();
    updateSummary();
});
