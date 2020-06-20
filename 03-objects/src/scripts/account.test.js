import accountFunc from './account.js';

test ('test account constructor',()=>{
    const account1 = new accountFunc.account('saving', 1000);
    expect(account1.accountName).toBe("saving");
    expect(account1.currentBalance).toBe(1000);

});

test ('deposit', ()=>{
    const account1 = new accountFunc.account('saving', 1000);
    expect(account1.deposit(500)).toBe(1500);

});

test ('withdraw', ()=>{
    const account1 = new accountFunc.account('saving', 1000);
    expect(account1.withdraw(500)).toBe(500);

});

test ('create card', ()=>{
    const account1 = new accountFunc.account('saving', 1000);
    expect(account1.createCard().children.length).toBe(4);
    expect(account1.createCard().children[0].textContent).toBe('saving');
    expect(account1.createCard().children[1].textContent).toBe('1000');
    expect(account1.createCard().children[2].textContent).toBe('Select');
    expect(account1.createCard().children[3].textContent).toBe('Delete');
 
});

test ('sorting accounts', ()=>{
    const account1 = new accountFunc.account('saving', 1000);
    const account2 = new accountFunc.account('chequing', 2000);
    const account3 = new accountFunc.account('RESP', 3000);

    const accounts = new accountFunc.accountController();

    accounts.addAccount(account1);
    accounts.addAccount(account2);
    accounts.addAccount(account3);
    expect(accounts.accountList.length).toBe(3);

    expect(accounts.createCardsDiv().children.length).toBe(3);

    accounts.removeAccount('chequing');
    expect(accounts.accountList.length).toBe(2);
    expect(accounts.accountList[1].accountName).toBe('RESP');

    expect(accounts.selectAccount('RESP').accountName).toBe('RESP');
    
    expect(accounts.lowestAccount().currentBalance).toBe(1000);
    expect(accounts.highestAccount().currentBalance).toBe(3000);
    expect(accounts.totalBalance()).toBe(4000);


});