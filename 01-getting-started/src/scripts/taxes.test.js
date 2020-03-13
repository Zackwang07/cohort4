import functions from './taxes.js'

test ("calculate taxes",()=>{
    expect(functions.cal(1)).toBe(0.15)
})