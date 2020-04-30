import React from 'react';
import logo from './logo.svg';
import SuperMarioSVG from './components/superMario';
import NarutoSVG from './components/naruto';
import IronManSVG from './components/ironMan';
import DarthVaderSVG from './components/darthVader';
import './App.css';

class App extends React.Component {


  render() {
    return (
      <div className="App" >
        <div className="iconBox" >
          <SuperMarioSVG id="iconSuperMario" className="icons"/>
          <NarutoSVG id="iconNaruto" className="icons"/>
          <IronManSVG id="iconIronMan" className="icons"/>
          <DarthVaderSVG id="icondarthVader" className="icons" />
        </div>


        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

}

export default App;
