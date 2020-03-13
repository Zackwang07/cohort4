import functions from './daily.js'

test ("convert temp",()=>{
    expect(functions.convertToFahreneit(0)).toBe(32)
    expect(functions.convertToFahreneit(100)).toBe(212)
})