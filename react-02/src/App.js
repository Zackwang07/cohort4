import React from 'react';
import SuperMarioSVG from './components/superMario';
import NarutoSVG from './components/naruto';
import IronManSVG from './components/ironMan';
import DarthVaderSVG from './components/darthVader';
import Starter from './components/starter';
import Game from './components/ticTacToe';
import Account from './components/account';
import './App.css';
import CityAndCommunity from './components/cityandcommunity';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "home",
    }
  }

  chooseApp=(e)=>{
    let chosenApp = e.target.id;
    
    this.setState({
      display: chosenApp
    })
    
  }
  showApp = () => {
    
    if (this.state.display === "iconSuperMario"){
      return <Starter/>
    }
    if (this.state.display === "iconNaruto"){
      return <Game/>
    }
    if (this.state.display === "iconIronMan"){
      return <Account/>
    }
    if (this.state.display === "icondarthVader"){
      return <CityAndCommunity/>
    }
  }


  render() {
    return (
      <div className="App" >
        <div className="iconBox" onClick={this.chooseApp}>
          <SuperMarioSVG id="iconSuperMario" className="icons" />
          <NarutoSVG id="iconNaruto" className="icons" />
          <IronManSVG id="iconIronMan" className="icons" />
          <DarthVaderSVG id="icondarthVader" className="icons" />
        </div>


        <header className="App-header">
          {this.showApp()}
        </header>
      </div>
    );
  }

}

export default App;
