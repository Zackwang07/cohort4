import accountFunc from './account.js';




// create an account
let accounts = new accountFunc.accountController();

const btnCreate = document.getElementById("btnCreate");
btnCreate.addEventListener("click", () => {
    // create card
    let newAccount = new accountFunc.account(document.getElementById('newName').value, document.getElementById('newBalance').value)
    divAccounts.appendChild(newAccount.createCard());
    
    document.getElementById("newName").value = "";
    document.getElementById("newBalance").value = "";

    // add to array
    accounts.addAccount(newAccount);
    console.log(accounts);
});

// delete an account

divAccounts.addEventListener('click', (e) => {
    
    // delete card
    if (e.target.textContent == 'Delete' && e.target.tagName == 'BUTTON') {
        e.target.parentElement.remove();
    }

    // remove from array
    
    accounts.removeAccount(e.target.parentElement.children[0].textContent)
    // console.log(e.target.parentElement.children[0].textContent);
    // console.log(e.target.parentElement.children[1].textContent);
    console.log(accounts);
    
});

// details
// accountList.addEventListener('click', (e) => {
//     if (e.target.className == 'btnSelect') {
//         let selectedName = e.target.parentElement.children[0].textContent;
//         let selectedBalance = e.target.parentElement.children[1].textContent;

//         accountName.textContent = selectedName;
//         accountBalance.textContent = selectedBalance;

//         const selectedAccoount = new account(selectedName, selectedBalance);
//         let amount;
//         const btnDeposit = document.getElementById("btnDeposit");
//         const btnWithdraw = document.getElementById("btnWithdraw");

//         btnDeposit.addEventListener("click", function(){
//             amount = document.getElementById("amount").value;
//             selectedAccoount.deposit(amount);
//             document.getElementById("amount").value = "";
//             messageDetails.textContent = "Money has been deposited.";
//             accountBalance.textContent = selectedAccoount.currentBalance;
//             e.target.parentElement.children[1].textContent = selectedAccoount.currentBalance;
//         });

//         btnWithdraw.addEventListener("click", () => {
//             amount = document.getElementById("amount").value;
//             selectedAccoount.withdraw(amount);
//             document.getElementById("amount").value = "";
//             messageDetails.textContent = "Money has been withdrawed.";
//             accountBalance.textContent = selectedAccoount.currentBalance;
//             e.target.parentElement.children[1].textContent = selectedAccoount.currentBalance;
//         });
//     }
// })

