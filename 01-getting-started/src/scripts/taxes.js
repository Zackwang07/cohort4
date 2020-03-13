
const functions = {
    cal: (income) =>{
        // var income = parseInt(document.getElementById("income").value);
        // console.log(income)
        var taxes;
        if (income <= 48535){
            taxes = income*0.15
            // console.log(taxes)
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
    
        // document.getElementById("tax").innerHTML=taxes;
    }
}

export default functions;



        