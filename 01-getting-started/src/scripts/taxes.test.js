import functions from './taxes.js'

test ("calculate taxes",()=>{
    expect(functions.cal(10000)).toBe(1500);
    expect(functions.cal(50000)).toBe(7580.575);
    expect(functions.cal(150000)).toBe(30991.780000000002);
    expect(functions.cal(200000)).toBe(45488.03);
    expect(functions.cal(300000)).toBe(77902.87);
})