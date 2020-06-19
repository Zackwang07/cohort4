import syntax from './syntax'

test('check the number',()=>{
    expect(syntax.numberCheck(5)).toBe(true)
    expect(syntax.numberCheck("s")).toBe(false)
});

test('check the string',()=>{
    expect(syntax.stringCheck(5)).toBe(false)
    expect(syntax.stringCheck("k")).toBe(true)
});

test('check the boolean',()=>{
    expect(syntax.booleanCheck(5)).toBe(true)
    expect(syntax.booleanCheck("s")).toBe(false)
});

test('check the array',()=>{
    expect(syntax.arrayCheck()).toStrictEqual(["Saab", "Volvo", "BMW"])
});

test('check the objects',()=>{
    expect(syntax.objectsCheck()).toBe("white")
});

test('check the undifined',()=>{
    expect(syntax.undefinedCheck()).toBe(undefined)
});

test('check the if/else',()=>{
    expect(syntax.ifElseCheck(5,3)).toBe(5)
    expect(syntax.ifElseCheck(2,3)).toBe(3)
});

test('check the functions',()=>{
    expect(syntax.functionsCheck(2,3)).toBe(5)
    expect(syntax.functionsCheck(100,20)).toBe(120)
});

test('check the arrays',()=>{
    expect(syntax.arraysCheck()).toStrictEqual(["Honda","Acura","Volvo","BMW","Toyota"])
});

test('check the forLoop',()=>{
    expect(syntax.forCheck()).toBe(5)
});

test('check the for/in',()=>{
    expect(syntax.forinCheck()).toBe("JohnDoe25")
});

test('check the while',()=>{
    expect(syntax.whileCheck()).toBe(5)
});

test('check the do while',()=>{
    expect(syntax.dowhileCheck()).toBe(5)
});

test('check the forEach',()=>{
    expect(syntax.forEachCheck()).toBe(10)
})