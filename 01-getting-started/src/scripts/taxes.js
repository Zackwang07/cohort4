
const functions = {
    cal: (income) =>{
        let taxes;
        if (income <= 48535){
            taxes = income*0.15

        }
        if (income > 48535 && income <=97069){
            taxes = 48535*0.15 + (income - 48535)*0.205
        }
        if (income > 97069 && income <= 150473){
            taxes = 48535*0.15 + 48534*0.205 + (income - 97069)*0.26
        }
        if (income > 150473 && income <= 214368){
            taxes = 48535*0.15 + 48534*0.205 + 53404*0.26 + (income - 150437)*0.29
        }
        if (income > 214368){
            taxes = 48535*0.15 + 48534*0.205 + 53404*0.26 + 63895*0.29 + (income - 214368)*0.33
        }
        return taxes
    }
}

export default functions;



        