import accountFunc from './account.js';

test ('test account constructor',()=>{
    console.log(new accountFunc.account('saving', 1000));
    
});

test ('deposit', ()=>{
    const account1 = new accountFunc.account('saving', 1000);
    expect(account1.deposit(500)).toBe(1500);

});

test ('withdraw', ()=>{
    const account1 = new accountFunc.account('saving', 1000);
    expect(account1.withdraw(500)).toBe(500);

});

test ('balance', ()=>{
    const account1 = new accountFunc.account('saving', 1000);
    expect(account1.balance()).toBe('The current balance of saving is 1000');

});

test ('create card', ()=>{
    const account1 = new accountFunc.account('saving', 1000);
    expect(account1.createCard().children.length).toBe(4);
    expect(account1.createCard().children[0].textContent).toBe('saving');
    expect(account1.createCard().children[1].textContent).toBe('1000');
    expect(account1.createCard().children[2].textContent).toBe('Select');
    expect(account1.createCard().children[3].textContent).toBe('Delete');
 
});

test ('accountController', ()=>{
    const accountContro = new accountFunc.accountController();
    console.log(accountContro);
    
});

test ('sorting accounts', ()=>{
    const account1 = new accountFunc.account('saving', 1000);
    const account2 = new accountFunc.account('chequing', 2000);
    const account3 = new accountFunc.account('RESP', 3000);

    const accounts = new accountFunc.accountController();

    accounts.addAccount(account1);
    accounts.addAccount(account2);
    accounts.addAccount(account3);

    accounts.removeAccount('chequing');
    console.log(accounts);

    console.log(accounts.selectAccount('RESP'));
    
    
    expect(accounts.accountList.length).toBe(2);
    expect(accounts.lowestAccount().currentBalance).toBe(1000);
    expect(accounts.highestAccount().currentBalance).toBe(3000);
    expect(accounts.totalBalance()).toBe(4000);


});