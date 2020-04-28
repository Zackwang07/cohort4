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
      <div className="App">
        
        <img src={superMario} className="App-logo" alt="logo" />
        <img src={naruto} className="App-logo" alt="logo" />
        <img src={ironMan} className="App-logo" alt="logo" />
        <img src={darthVader} className="App-logo" alt="logo" />

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
