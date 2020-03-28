import mortfunctions from './mortgage.js';


// console.log('Hello World');


const btnCompute = document.getElementById('btnCompute');
btnCompute.addEventListener('click', e =>{
    // console.log('Inside click event listener');
    calc();
});

btnCompute.addEventListener('change', e =>{
    console.log('Inside change event listener');
    // calc();
});

function calc(){
    // console.log('we are in the calc function');
    let principle = document.getElementById('principle');
    let yearInterst = document.getElementById('yearInterest');
    let years = document.getElementById('years');

    // console.log(principle.value);
    // console.log(yearInterst.value);
    // console.log(years.value);

    const result = mortfunctions.calcLoan(
        principle.value, 
        yearInterst.value, 
        years.value);

    // console.log(result);
    monthly.value = result.monthly;
    total.value = result.total;
    interest.value = result.interest;



    
}