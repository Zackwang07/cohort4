import dicFunctions from './dictionary.js'

test ("look for province name",()=>{
    expect(dicFunctions.provinceName("AB")).toBe("Alberta")
})