import Calculator from "./Calculator";


test("calculator",()=>{
    expect(Calculator.calculator(1,2,"+")).toBe(3)
    expect(Calculator.calculator(1,2,"-")).toBe(-1)
    expect(Calculator.calculator(1,2,"*")).toBe(2)
    expect(Calculator.calculator(1,2,"/")).toBe(0.5)
   
});
