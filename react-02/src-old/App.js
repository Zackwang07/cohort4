import React from 'react';
import logo from './logo.svg';
import superMario from './super-mario.svg';
import naruto from './naruto.svg';
import ironMan from './iron-man.svg';
import darthVader from './darth-vader.svg';
import './App.css';

class App extends React.Component {


  render() {
    return (
      <div className="App" >
        <div className="iconBox" >
          <img src={superMario} id="iconSuperMario" alt="icon" className="icons"/>
          <img src={naruto} id="iconNaruto" alt="icon" className="icons"/>
          <img src={ironMan} id="iconIronMan" alt="icon" className="icons"/>
          <img src={darthVader} id="icondarthVader" alt="icon" className="icons"/>
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
