const syntax ={
// define attributes / variables
    // number
    numberCheck: (input) =>{
        if (typeof input == "number") return true;
        else return false;
    },
    

    //string
    stringCheck: (input) =>{
        if (typeof input == "string") return true;
        else return false;
    },

    //boolean
    numberCheck: (input) =>{
        if (typeof input == "number") return true;
        else return false;
    },
    //array
    arrayCheck: () =>{
        var cars = ["Saab", "Volvo", "BMW"];
        return cars;
    },

    //dictionary / objects
    objectsCheck: () =>{
        var car = {type:"Fiat", model:"500", color:"white"};
        return car.color
    },
    
    //undefined
    undefinedCheck: () =>{
        var a;
        return a;
    },

    //sample if / else
    ifElseCheck: (a,b) =>{
        if (a > b) return a;
        else return b;
    },
    //functions
        //parameters
        //returns
    functionsCheck: (a,b) =>{
        
        return a + b;
    },
    //arrays
        //add to the front
        // add to the end
        //update values
    arraysCheck: () =>{
        var cars = ["Saab", "Volvo", "BMW"];
        cars.splice(0,0,"Honda");
        cars.splice(4,0,"Toyota"); car.push("")
        cars.splice(1,1,"Acura");
        return cars;
    },
    //loops 
    //for
    forCheck: () =>{
        for (var i=0; i<5; i++);
            return i;

    },
    //for/in
    forinCheck:()=>{
        var person = {fname:"John", lname:"Doe", age:25};

        var text = "";
        var x;
        for (x in person) {
            text += person[x];
        }
        return text
    },
    //while
    whileCheck:()=>{
        var i=0;
        while (i<5){
            i++
        };
        return i;
    },
    //do while
    dowhileCheck:()=>{
        var i = 0;
        do {i++}
        while(i<5);
        return i;
    },
    //forEach (with array and function)
    forEachCheck:()=>{
        var sum = 0;
        var numbers = [1, 2, 3, 4];
        numbers.forEach(myFunction);

        function myFunction(item) {
            sum += item;
        }return sum
    }
}




export default syntax;