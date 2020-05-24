export class City {
    constructor(name, latitude, longitude, population, key){
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
        this.key = key;
    }

    show(){
       return `${this.name}, ${this.latitude}, ${this.longitude}, ${this.population}`;
    }

    movedIn(num){
        this.population += parseInt(num);
    }

    movedOut(num){
        this.population -= num;
    }

    howBig(){
        if (this.population > 100000){
            return 'City'
        }else
        if (this.population <= 100000 && this.population >= 20000){
            return 'Large town'
        }else
        if (this.population < 20000 && this.population >= 1000){
            return 'Town'
        }else
        if (this.population < 1000 && this.population > 100){
            return 'Village'
        }else
        if (this.population <= 100 && this.population >= 1){
            return 'Hamlet'
        }
    }
}

export class Community {
    constructor(){
        this.arrayCity = [];
    }

    addCity(city){
        this.arrayCity.push(city);
    }

    whichSphere(city){
        if (city.latitude >= 0){
            return 'Northern Hemisphere'
        }else{
            return 'Southern Hemisphere'
        }
    }

    getMostNorthern(){
        let mostNorthern = this.arrayCity[0];
        this.arrayCity.forEach(city =>{
            if (city.latitude > mostNorthern.latitude){
                mostNorthern = city;
            }
        });
        return mostNorthern.name 
    }

    getMostSouthern(){
        let mostSouthern = this.arrayCity[0];
        this.arrayCity.forEach(city =>{
            if (city.latitude < mostSouthern.latitude){
                mostSouthern = city;
            }
        });
        return mostSouthern.name 
    }

    getPopulation(){
        let total = 0;
        this.arrayCity.forEach(city =>{
            total += city.population
        });
        return total;
    }

    deleteCity(name){
        const index = this.arrayCity.findIndex(city => city.name == name);
        this.arrayCity.splice(index, 1);
    }

    selectCity(name){
        const index = this.arrayCity.findIndex(city => city.name == name);
        return this.arrayCity[index];
    }

    createCityCard(name){
        const cityCard = document.createElement("div");

        const cityName = document.createElement("div");
        cityName.appendChild(document.createTextNode(name));

        const btnShow = document.createElement("button");
        btnShow.appendChild(document.createTextNode("Show"));

        const btnDelete = document.createElement("button");
        btnDelete.appendChild(document.createTextNode("Delete"));

        cityCard.appendChild(cityName);
        cityCard.appendChild(btnShow);
        cityCard.appendChild(btnDelete);

        return cityCard;
    }
}