import accountFunc from './account.js';
import { City, Community } from './city.js';
import fetchFunc from './fetch.js';


// create an account
let arrayAccounts = new accountFunc.accountController();

const btnCreate = document.getElementById("btnCreate");
btnCreate.addEventListener("click", () => {

    let newAccount = new accountFunc.account(document.getElementById('newName').value, document.getElementById('newBalance').value)
    // add to array
    arrayAccounts.addAccount(newAccount);

    updatecards();
    resetFields();
    updateSummary();
});

//select account
divAccounts.addEventListener('click', (e) => {
    if (e.target.textContent == 'Select' && e.target.tagName == 'BUTTON') {
        console.log('clicked btnSelect');

        divAccountName.textContent = e.target.parentElement.children[0].textContent;
        divAccountBalance.textContent = e.target.parentElement.children[1].textContent;
        resetFields();
    }
});

// delete an account
divAccounts.addEventListener('click', (e) => {
    if (e.target.textContent == 'Delete' && e.target.tagName == 'BUTTON') {
        // remove from array
        arrayAccounts.removeAccount(e.target.parentElement.children[0].textContent);

        updatecards();
        resetFields();
        divAccountName.textContent = "";
        divAccountBalance.textContent = "";
        updateSummary();
    }
});

// functions
function updatecards() {

    divAccounts.textContent = "";
    divAccounts.append(arrayAccounts.createCardsDiv());
}

function updateSummary() {
    if (arrayAccounts.accountList.length == 0) {
        spanLowest.textContent = "";
        spanHighest.textContent = "";
        spanTotal.textContent = "";
    } else {
        // Show lowest account
        spanLowest.textContent = `${arrayAccounts.lowestAccount().accountName}:${arrayAccounts.lowestAccount().currentBalance}`;
        // Show Highest Account
        spanHighest.textContent = `${arrayAccounts.highestAccount().accountName}:${arrayAccounts.highestAccount().currentBalance}`;
        // Show total balance
        spanTotal.textContent = arrayAccounts.totalBalance();
    }

}

function resetFields() {
    document.getElementById("newName").value = "";
    document.getElementById("newBalance").value = "";
    document.getElementById("amount").value = "";

}

//account transition


//deposit
const btnDeposit = document.getElementById("btnDeposit");
btnDeposit.addEventListener('click', () => {
    const selectedAccount = new accountFunc.account(divAccountName.textContent, divAccountBalance.textContent);
    const amount = document.getElementById("amount").value;
    selectedAccount.deposit(amount);
    //update div
    messageDetails.textContent = "Money has been deposited.";
    divAccountBalance.textContent = selectedAccount.currentBalance;
    //update array
    arrayAccounts.selectAccount(divAccountName.textContent).currentBalance = selectedAccount.currentBalance;

    updatecards();
    resetFields();
    updateSummary();

});

// withdraw
const btnWithdraw = document.getElementById("btnWithdraw");
btnWithdraw.addEventListener("click", () => {
    const selectedAccount = new accountFunc.account(divAccountName.textContent, divAccountBalance.textContent);
    const amount = document.getElementById("amount").value;
    selectedAccount.withdraw(amount);
    //update div
    messageDetails.textContent = "Money has been withdrawed.";
    divAccountBalance.textContent = selectedAccount.currentBalance;
    //update array
    arrayAccounts.selectAccount(divAccountName.textContent).currentBalance = selectedAccount.currentBalance;

    updatecards();
    resetFields();
    updateSummary();
});




// --------Community and City---------

// load from database
let cities = new Community();
let k = 1;

window.addEventListener("DOMContentLoaded", async ()=>{
    let data = await fetchFunc.postData('http://localhost:5000/all');
    console.log(data);
    if (data.length > 0){
        data.forEach(value =>{
            let loadedCity = new City(value.city.name, value.city.latitude, value.city.longitude, value.city.population, value.city.key);
            cities.addCity(loadedCity);
        });
        console.log(cities.arrayCity);
        k = data[data.length - 1].key + 1;
    };
    
    
    updateCityList();
    updateCitySummary();

})
// add a city
btnAddCity.addEventListener('click', async () => {
    const newName = document.getElementById("newCityName").value;
    const newLatitude = document.getElementById("newLatitude").value;
    const newLongitude = document.getElementById("newLongitude").value;
    const newPopulation = parseInt(document.getElementById("newPopulation").value);
    let newCity = new City(newName, newLatitude, newLongitude, newPopulation, k);
    cities.addCity(newCity);
    console.log(cities.arrayCity);
    
    let data = await fetchFunc.postData('http://localhost:5000/add', {key: k, city: cities.arrayCity[cities.arrayCity.length - 1]});
    k ++;
    console.log(data.status);
    updateCityList();
    resetCityInput();
    updateCitySummary();
});

divCities.addEventListener("click", async (e) => {
    if (e.target.textContent == "Show") {
        let selectedCity = cities.selectCity(e.target.parentElement.children[0].textContent)
        showDetails(selectedCity);

        resetCityInput();

    } else if (e.target.textContent == "Delete") {
        let selectedCity = cities.selectCity(e.target.parentElement.children[0].textContent)
        let data = await fetchFunc.postData('http://localhost:5000/delete', {key:selectedCity.key});
        cities.deleteCity(e.target.parentElement.children[0].textContent);
 
        console.log(cities.arrayCity);
        
        updateCityList();
        resetCityInput();
        updateCitySummary();
    }
});

btnMoveIn.addEventListener("click", async () => {
    let selectedCity = cities.selectCity(spanName.textContent);
    selectedCity.movedIn(document.getElementById("inputMove").value);
    let data = await fetchFunc.postData('http://localhost:5000/update', {key:selectedCity.key, city: selectedCity});

    showDetails(selectedCity);

    resetCityInput();
    updateCitySummary();
});

btnMoveOut.addEventListener("click", async () => {
    let selectedCity = cities.selectCity(spanName.textContent);    
    selectedCity.movedOut(document.getElementById("inputMove").value);
    let data = await fetchFunc.postData('http://localhost:5000/update', {key:selectedCity.key, city: selectedCity});    

    showDetails(selectedCity);

    resetCityInput();
    updateCitySummary();
});

// Functions
function updateCityList() {
    divCities.textContent = "";
    cities.arrayCity.forEach(city => {
        divCities.appendChild(cities.createCityCard(city.name))
    });
}

function resetCityInput() {
    newCityName.value = "";
    newLatitude.value = "";
    newLongitude.value = "";
    newPopulation.value = "";
    inputMove.value = "";
}

function showDetails(city) {
    spanName.textContent = city.name;
    spanLatitude.textContent = city.latitude;
    spanLongitude.textContent = city.longitude;
    spanPopulation.textContent = city.population;
    spanSize.textContent = city.howBig();
}

function updateCitySummary(){
    if(cities.arrayCity.length == 0){
        spanNorthern.textContent = "";
        spanSouthern.textContent = "";
        spanTotalPopulation.textContent = "";
    }else{
        spanNorthern.textContent = cities.getMostNorthern();
        spanSouthern.textContent = cities.getMostSouthern();
        spanTotalPopulation.textContent = cities.getPopulation();
    }
}

