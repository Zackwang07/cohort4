import React from 'react';
import './cityandcommunity.css';



class CityAndCommunity extends React.Component {
    render() {
        return (
            <div>
                <h1>City and Community</h1>
                <div className='box'>
                    <div className="List">
                        <p>City List</p>
                        <div id="divCities"></div>
                        <div id='citySummary'>
                            <div>Most Northern City:   <span id='spanNorthern'></span></div>
                            <div>Most Southern City:  <span id='spanSouthern'></span></div>
                            <div>Total Population:   <span id='spanTotalPopulation'></span></div>
                        </div>
                    </div>

                    <div className="create">
                        <input id="newCityName" type="text" placeholder="Enter Name" /><br/>
                        <input id="newLatitude" type="text" placeholder="Enter Latitude" /><br/>
                        <input id="newLongitude" type="text" placeholder="Enter Longitude" /><br/>
                        <input id="newPopulation" type="text" placeholder="Enter Population" /><br/>
                        <button id='btnAddCity'>Add a City</button>
                    </div>

                    <div className="details">
                        <div id="divShow">
                            <div>Name:   <span id='spanName'></span></div>
                            <div>Latitude:  <span id='spanLatitude'></span></div>
                            <div>Longitude:   <span id='spanLongitude'></span></div>
                            <div>Population:   <span id='spanPopulation'></span></div>
                            <div>Size:   <span id='spanSize'></span></div>
                        </div>
                        <input id="inputMove" type="text" placeholder="Enter a Number" /><br />
                        <button id="btnMoveIn">Move in</button>
                        <button id="btnMoveOut">Move Out</button>
                        
                    </div>
                </div>
            </div>
        )
    }
}



export default CityAndCommunity;