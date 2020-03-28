const mortfunctions = {
    play(){
        console.log('in mortfunctions');   
    },

    calcLoan(principal, yearInterest, years){

        const interest = yearInterest/100/12;
        const payments = years*12;

        const x = Math.pow(1+interest, payments);
        const monthly = (principal * x * interest)/(x - 1);
        const total = monthly*payments;
        const totalInterest = total - principal;

        return{
            monthly: mortfunctions.round(monthly), 
            total: mortfunctions.round(total), 
            interest: mortfunctions.round(totalInterest)}
    },

    round(num){
        return Math.round(num*100)/100;
    }

};



export default mortfunctions;