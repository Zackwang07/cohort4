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

})