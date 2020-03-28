import mortfunctions from './mortgage.js';

// npm test -- -t round


test ('test the pluming',()=>{
    console.log('Test the unit test pluming');
    mortfunctions.play();
});

test ('Test the mortgage calculation',()=>{
    let result = mortfunctions.calcLoan(1000, 1, 1);
    expect(result.monthly).toBe(83.79);
    expect(result.total).toBe(1005.42);
    expect(result.interest).toBe(5.42);
    
    result = mortfunctions.calcLoan(1000, 10, 1);
    expect(result.monthly).toBe(87.92);
    expect(result.total).toBe(1054.99);
    expect(result.interest).toBe(54.99);
});

test ('Test the round func',()=>{
    expect(mortfunctions.round(123.1234)).toBe(123.12)
    expect(mortfunctions.round(1234.2345)).toBe(1234.23)


});