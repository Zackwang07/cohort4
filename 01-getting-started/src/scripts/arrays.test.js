import arrayFunctions from './arrays.js'

test ("check if number",()=>{
    expect(arrayFunctions.checkNumber(2)).toBe("Added in the array")
    expect(arrayFunctions.checkNumber("a")).toBe("It is not a number")

})

test ("add to array",()=>{
    expect(arrayFunctions.addArray(2)).toStrictEqual([2])
    expect(arrayFunctions.addArray("a")).toStrictEqual([])
})

test ("total",()=>{
    expect(arrayFunctions.total([1,2,3])).toBe(6)
})