import {City, Community} from './city.js';

test ('test show', ()=>{
    const city1 = new City('Calgary', 51.049999, -114.066666, 1500000);
    
    expect(city1.show()).toBe('Calgary, 51.049999, -114.066666, 1500000');
});

test ('movedIn', ()=>{
    const city1 = new City('Calgary', 51.049999, -114.066666, 0);
    city1.movedIn(5000);
    expect(city1.population).toBe(5000);
    city1.movedIn(10000);
    expect(city1.population).toBe(15000);
})

test ('movedOut', ()=>{
    const city1 = new City('Calgary', 51.049999, -114.066666, 10000);
    city1.movedOut(5000);
    expect(city1.population).toBe(5000);
    city1.movedOut(5000);
    expect(city1.population).toBe(0);

})

test ('how big', ()=>{
    const city1 = new City('Calgary', 51.049999, -114.066666, 10);
    expect(city1.howBig()).toBe('Hamlet');
    city1.movedIn(500);
    expect(city1.howBig()).toBe('Village');
    city1.movedIn(5000);
    expect(city1.howBig()).toBe('Town');
    city1.movedIn(50000);
    expect(city1.howBig()).toBe('Large town');
    city1.movedIn(50000);
    expect(city1.howBig()).toBe('City');
})

test ('test community',()=>{
    const city1 = new City('Calgary', 51.049999, -114.066666, 10);
    const city2 = new City('Sydney', -33.868820, 151.209290, 10);
    const city3 = new City('City3', 33.868820, 151.209290, 10);
    const city4 = new City('City4', -66.868820, 151.209290, 10);
    const newCommunity = new Community;
    newCommunity.addCity(city1);
    newCommunity.addCity(city2);
    newCommunity.addCity(city3);
    newCommunity.addCity(city4);
    
    expect(newCommunity.arrayCity.length).toBe(4);
    expect(newCommunity.whichSphere(city1)).toBe('Northern Hemisphere');
    expect(newCommunity.whichSphere(city2)).toBe('Southern Hemisphere');
    expect(newCommunity.getMostNorthern().name).toBe('Calgary');
    expect(newCommunity.getMostSouthern().name).toBe('City4');
    expect(newCommunity.getPopulation()).toBe(40);

    newCommunity.deleteCity('City3');
    expect(newCommunity.arrayCity.length).toBe(3);
    
    expect(newCommunity.selectCity("Calgary").latitude).toBe(51.049999)

    let card = newCommunity.createCityCard('Calgary');
    expect(card.children.length).toBe(3)
})



test('object reference.', () => {
    let myCity = new City('Sydney',-33.87,151,100)

    let myFav = myCity;
    expect(myCity.population).toBe(100);
    expect(myFav.population).toBe(100);

    myFav.movedIn(100);
    expect(myCity.population).toBe(200);
    expect(myFav.population).toBe(200);
})