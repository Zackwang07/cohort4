import React from 'react';
import './cityandcommunity.css';
import { City, Community } from './business/city.js';
import fetchFunc from './business/fetch.js';

class CreateCity extends React.Component {
    render() {

        return (
            <div className="create">
                <input id="newCityName" type="text" placeholder="Enter Name" onChange={this.props.onChange} /><br />
                <input id="newLatitude" type="text" placeholder="Enter Latitude" onChange={this.props.onChange} /><br />
                <input id="newLongitude" type="text" placeholder="Enter Longitude" onChange={this.props.onChange} /><br />
                <input id="newPopulation" type="text" placeholder="Enter Population" onChange={this.props.onChange} /><br />
                <button id='btnAddCity' onClick={this.props.onClick}>Add a City</button>
            </div>
        )
    }
}

class CityList extends React.Component {
    render() {

        const list = this.props.cities.arrayCity.map((city) => {
            return (
                <li key={city.key}>
                    <p>{city.name}</p>
                    <button id="btnSelect" onClick={this.props.onSelect}>Select</button>
                    <button id="btnDelete" onClick={this.props.onDelete}>Delete</button>
                </li>
            )
        });

        let mostN = this.props.cities.getMostNorthern();
        let mostS = this.props.cities.getMostSouthern();
        let totalP = this.props.cities.getPopulation();

        return (
            <div className="List">
                <p>City List</p>
                <div id="divCities">
                    <ul>{list}</ul>
                </div>
                <div id='citySummary'>
                    <div>Most Northern City:   <span>{mostN && mostN.name}</span></div>
                    <div>Most Southern City:  <span>{mostS && mostS.name}</span></div>
                    <div>Total Population:   <span>{totalP && totalP}</span></div>
                </div>
            </div>
        )
    }
}

class CityDetails extends React.Component {
    render() {

        return (
            <div className="details">
                <div id="divShow">
                    <div>Name:   <span id='spanName'>{this.props.current && this.props.current.name}</span></div>
                    <div>Latitude:  <span id='spanLatitude'>{this.props.current && this.props.current.latitude}</span></div>
                    <div>Longitude:   <span id='spanLongitude'>{this.props.current && this.props.current.longitude}</span></div>
                    <div>Population:   <span id='spanPopulation'>{this.props.current && this.props.current.population}</span></div>
                    <div>Size:   <span id='spanSize'>{this.props.current && this.props.current.howBig()}</span></div>
                </div>
                <input id="inputMove" onChange={this.props.onChange} type="text" placeholder="Enter a Number" /><br />
                <button id="btnMoveIn" onClick={this.props.onMoveIn}>Move in</button>
                <button id="btnMoveOut" onClick={this.props.onMoveOut}>Move Out</button>
            </div>
        )
    }
}

class CityAndCommunity extends React.Component {
    constructor() {
        super();
        this.state = {
            newCityName: null,
            newLatitude: null,
            newLongitude: null,
            newPopulation: null,
            cities: new Community(),
            current: null,
            inputMove: null
        }
    }

    componentDidMount = async () => {
        let tempCommunity = this.state.cities;
        let data = await fetchFunc.postData('http://localhost:5000/all');
        console.log(data);
        if (data.length > 0) {
            data.forEach(value => {
                let loadedCity = new City(value.city.name, value.city.latitude, value.city.longitude, value.city.population, value.city.key);
                tempCommunity.addCity(loadedCity);
            });
            this.setState({
                cities: tempCommunity
            })
        }
    }

    handleChange = (e) => {
        let name = e.target.id;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    addCity = async (e) => {
        let k = 1;
        let tempCommunity = this.state.cities;

        if (tempCommunity.arrayCity.length > 0) {
            k = tempCommunity.arrayCity[tempCommunity.arrayCity.length - 1].key + 1
        }

        let newCity = new City(this.state.newCityName, this.state.newLatitude, this.state.newLongitude, this.state.newPopulation, k);
        let data = await fetchFunc.postData('http://localhost:5000/add', { key: k, city: newCity });
        console.log(data.status);

        tempCommunity.addCity(newCity);
        k++;
        this.setState({
            cities: tempCommunity
        })
        console.log(this.state.cities);
    }

    selectCity = (e) => {
        this.setState({
            current: this.state.cities.selectCity(e.target.parentElement.children[0].textContent)
        })
    }

    deleteCity = async (e) => {
        let selectedCity = this.state.cities.selectCity(e.target.parentElement.children[0].textContent)
        let data = await fetchFunc.postData('http://localhost:5000/delete', { key: selectedCity.key })
        let tempCommunity = this.state.cities;
        tempCommunity.deleteCity(selectedCity.name)
        this.setState({
            cities: tempCommunity
        });
        console.log(data.status);
        console.log(this.state.cities);
    }

    onMoveIn = async () => {
        let selectedCity = this.state.current
        selectedCity.movedIn(this.state.inputMove)
        this.setState({
            current: selectedCity
        })
        let data = await fetchFunc.postData('http://localhost:5000/update', { key: this.state.current.key, city: this.state.current });
        console.log(data.status);
    }

    onMoveOut = async () => {
        let selectedCity = this.state.current
        selectedCity.movedOut(this.state.inputMove)
        this.setState({
            current: selectedCity
        })
        let data = await fetchFunc.postData('http://localhost:5000/update', { key: this.state.current.key, city: this.state.current });
        console.log(data.status);
    }

    render() {
        return (
            <div>
                <h1>City and Community</h1>
                <div className='box' >
                    <CityList cities={this.state.cities} onSelect={this.selectCity} onDelete={this.deleteCity} />
                    <CreateCity onChange={this.handleChange} onClick={this.addCity} />
                    <CityDetails current={this.state.current} onMoveIn={this.onMoveIn} onMoveOut={this.onMoveOut} onChange={this.handleChange} />
                </div>
            </div>
        )
    }
}



export default CityAndCommunity;