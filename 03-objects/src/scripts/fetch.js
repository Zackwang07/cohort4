const dataFunctions = {

    url: 'https://uinames.com/api/?amount=10',
    
    getFirstName(data){
        return data[0].name
    },

    getAllFirstNames(data){
        let firstNames = [];
        data.forEach(element => {
            firstNames.push(element.name)
        });
        return firstNames;
    },

    showDelayProblem() {
        console.log('One');
        setTimeout(() => {
            console.log('Two');
        }, 1 * 1000);
        console.log('Three');
    },

    async showDelaySolution() {
        try {
            console.log('One');
            const value = await                 // Simulate fetch
                new Promise(
                    (resolve, reject) =>
                        setTimeout(() => resolve("Two"),
                            1 * 1000));
            // Now that we have the value we can use it.
            console.log(value);
            console.log('Three');
        } catch (error) {
            console.log(error);
        }
    },

    // async getUsers() {
    //     try {
    //         const response = await fetch(dataFunctions.url);
    //         const data = await response.json();
    //         return data;
    //     } catch (error) {
    //         console.error('Error:', error);
    //         throw (error);
    //     }
    // },

    // async workWithData() {
    //     const data = await dataFunctions.getUsers();
    //     console.log(functions.getFirstName(data));
    //     console.log(functions.getAllFirstNames(data));
    // },

    async postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST',     // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',       // no-cors, *cors, same-origin
            cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow',         // manual, *follow, error
            referrer: 'no-referrer',    // no-referrer, *client
            body: JSON.stringify(data)  // body data type must match "Content-Type" header
        });
    
        const json = await response.json();    // parses JSON response into native JavaScript objects
        json.status = response.status;
        json.statusText = response.statusText;
        // console.log(json, typeof(json));
        return json;
    },
}

export default dataFunctions;