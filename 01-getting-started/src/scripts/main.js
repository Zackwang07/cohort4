import functions from './functions.js';
import calculator from './Calculator.js';
import TaxesFunctions from './taxes.js';
import arrayFunctions from './arrays.js';
import dicFunctions from './dictionary.js';



// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));




// ---------calculator-----------



btncal.addEventListener("click", ()=>{
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    var op = document.getElementById("opr").value;
    
    result.textContent = calculator.calculator(n1,n2,op);
});


// -------- Canadian Taxes --------

btnTax.addEventListener("click",()=>{
    var income = parseInt(document.getElementById("income").value);
    taxesResult.textContent = TaxesFunctions.cal(income);
});

// ------- Working with Arrays ---------
var myArray = [];
console.log(myArray);

// button add
btnAdd.addEventListener("click",()=>{
    var input = document.getElementById("inputNum").value;
    arrayMessage.textContent = arrayFunctions.checkNumber(input);
});

btnAdd.addEventListener("click",()=>{
    var input = document.getElementById("inputNum").value;
    // arrayFunctions.addArray(input);
    if (isNaN(input)){
        
    }else{
        myArray.push(input)
    };
    document.getElementById("inputNum").value="";
    console.log(myArray);
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
    var provCode = document.getElementById("inputDic").value;
    dicMessage.textContent = dicFunctions.provinceName(provCode);
})





