const dataFunctions = {
    
    getFirstName(data){
        return data[0].name
    },

    getAllFirstNames(data){
        let firstNames = [];
        data.forEach(element => {
            firstNames.push(element.name)
        });
        return firstNames;
    }


}

export default dataFunctions;