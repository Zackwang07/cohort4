import arrayFunctions from './arrays.js'

test ("check if number",()=>{
    expect(arrayFunctions.checkNumber(2)).toBe("Added in the array")
    expect(arrayFunctions.checkNumber("a")).toBe("It is not a number")

});


test ("total",()=>{
    expect(arrayFunctions.total([1,2,3])).toBe(6)
})