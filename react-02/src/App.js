import React from 'react';
import LogoSVG from './components/reactLogo';
import TicTacToeSVG from './components/ticTacToeSVG';
import AccountSVG from './components/accountSVG';
import CitySVG from './components/citySVG';
import ListSVG from './components/listSVG';
import QueueStackSVG from './components/queueStackSVG';
import Starter from './components/starter';
import Game from './components/ticTacToe';
import Account from './components/account';
import './App.css';
import CityAndCommunity from './components/cityandcommunity';
import LinkedListComp from './components/LinkedListComp';
import QueueStackComp from './components/QueueStackComp';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "home",
    }
  }

  chooseApp = (e) => {
    let chosenApp = e.target.id;

    this.setState({
      display: chosenApp
    })

  }
  showApp = () => {

    if (this.state.display === "iconReactLogo") {
      return <Starter />
    }
    if (this.state.display === "iconTicTacToe") {
      return <Game />
    }
    if (this.state.display === "iconAccount") {
      return <Account />
    }
    if (this.state.display === "iconCity") {
      return <CityAndCommunity />
    }
    if (this.state.display === "iconList") {
      return <LinkedListComp />
    }
    if (this.state.display === "iconQueueStack") {
      return <QueueStackComp />
    }
  }


  render() {
    return (
      <div className="App" >
        <div className="iconBox" onClick={this.chooseApp}>
          <LogoSVG id="iconReactLogo" className="icons" />
          <TicTacToeSVG id="iconTicTacToe" className="icons" />
          <AccountSVG id="iconAccount" className="icons" />
          <CitySVG id="iconCity" className="icons" />
          <ListSVG id="iconList" className="icons" />
          <QueueStackSVG id="iconQueueStack" className="icons" />
        </div>


        <header className="App-header">
          {this.showApp()}
        </header>
      </div>
    );
  }

}

export default App;
