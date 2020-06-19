

const functions = {
    
    checkNumber: (input) => {
        
        var result
        if (isNaN(input)){
            result = "It is not a number"
        }else{
            result = "Added in the array"
        }
        return result
    },

    total: (myArray) => {
        var sum = 0;       
        myArray.forEach(element => {
            sum += parseInt(element);
        });
        return sum;
    },

}


export default functions;
