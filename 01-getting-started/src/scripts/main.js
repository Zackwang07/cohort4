import functions from './functions.js';
import calculator from './Calculator.js';
import TaxesFunctions from './taxes.js';
import arrayFunctions from './arrays.js';
import dicFunctions from './dictionary.js';



// **********
//
// Add the event listeners
// 

idBtn.addEventListener('click', (() => {
    idMsg.textContent = functions.size(idInput.value);
}));


// ---------calculator-----------

btncal.addEventListener("click", ()=>{  
    result.textContent = calculator.calculator(num1.value, num2.value, opr.value);
});


// -------- Canadian Taxes --------

btnTax.addEventListener("click",()=>{
    taxesResult.textContent = TaxesFunctions.cal(parseInt(income.value));
});

// ------- Working with Arrays ---------
let myArray = [];

// button add
btnAdd.addEventListener("click",()=>{
    arrayMessage.textContent = arrayFunctions.checkNumber(inputNum.value);
    if (!isNaN(inputNum.value)){
        myArray.push(inputNum.value)
    };   
    document.getElementById("inputNum").value="";
});

// button show
btnShow.addEventListener("click",()=>{
    arrayMessage.textContent = myArray;
});

// button total
btnTotal.addEventListener("click",()=>{
    arrayMessage.textContent = arrayFunctions.total(myArray);
});

// button clear
btnClear.addEventListener("click",()=>{
    myArray = [];
    arrayMessage.textContent = "";
    document.getElementById("inputNum").value="";
})


// ------ Working with Dictionaties ------
btnLookUp.addEventListener("click",()=>{
    dicMessage.textContent = dicFunctions.provinceName(inputDic.value);
})





