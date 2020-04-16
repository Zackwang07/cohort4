import {city, community} from './city.js';

test ('test show', ()=>{
    const city1 = new city('Calgary', 51.049999, -114.066666, 1500000);
    
    expect(city1.show()).toBe('Calgary, 51.049999, -114.066666, 1500000');
});

test ('movedIn', ()=>{
    const city1 = new city('Calgary', 51.049999, -114.066666, 0);
    city1.movedIn(5000);
    expect(city1.population).toBe(5000);
    city1.movedIn(10000);
    expect(city1.population).toBe(15000);
})

test ('movedOut', ()=>{
    const city1 = new city('Calgary', 51.049999, -114.066666, 10000);
    city1.movedOut(5000);
    expect(city1.population).toBe(5000);
    city1.movedOut(5000);
    expect(city1.population).toBe(0);

})

test ('how big', ()=>{
    const city1 = new city('Calgary', 51.049999, -114.066666, 10);
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
    const city1 = new city('Calgary', 51.049999, -114.066666, 10);
    const city2 = new city('Sydney', -33.868820, 151.209290, 10);
    const city3 = new city('City3', 33.868820, 151.209290, 10);
    const city4 = new city('City4', -66.868820, 151.209290, 10);
    const newCommunity = new community;
    newCommunity.addCity(city1);
    newCommunity.addCity(city2);
    newCommunity.addCity(city3);
    newCommunity.addCity(city4);
    
    expect(newCommunity.arrayCity.length).toBe(4);
    expect(newCommunity.whichSphere(city1)).toBe('Northern Hemisphere');
    expect(newCommunity.whichSphere(city2)).toBe('Southern Hemisphere');
    expect(newCommunity.getMostNorthern()).toBe('Calgary');
    expect(newCommunity.getMostSouthern()).toBe('City4');
    expect(newCommunity.getPopulation()).toBe(40);

    newCommunity.deleteCity('City3');
    expect(newCommunity.arrayCity.length).toBe(3);
    
    expect(newCommunity.selectCity("Calgary").latitude).toBe(51.049999)
})