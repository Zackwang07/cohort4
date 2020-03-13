

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

    addArray: (input)=>{
        
        if (isNaN(input)){
        
        }else{
            myArray.push(input)
        }
        return myArray
    },

    

    showArray: () => {
        document.getElementById("Message").innerHTML = array;

    },

    total: (myArray) => {
        var sum = 0;
        
        myArray.forEach(element => {

            sum += parseInt(element);

        });
        // document.getElementById("Message").innerHTML = sum;
        return sum;
    },

    clearArray: () => {
        array = [];
        document.getElementById("Message").innerHTML = "";
        document.getElementById("input4").value = "";
    }
}


export default functions;
