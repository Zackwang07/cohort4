import dataFunctions from './fetch.js';

btnProblem.addEventListener("click", ()=>{
    console.log("before call");
    dataFunctions.showDelayProblem();
    console.log("after call");   
});

btnSolution.addEventListener("click", ()=>{
    console.log('Before: showDelaySolution');
    dataFunctions.showDelaySolution();
    console.log('After: showDelaySolution');
    
})