import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent.js';
import EvenComponent from './components/EvenComponent.js';
import OddComponent from './components/OddComponent.js';

class App extends Component {
  constructor() {
    super();
    this.counter = 21;
    this.state = {
      myState: "TBD"
    };
  }

  onPushMe = () => {
    console.log("you pushed me");
    this.counter++;
    console.log(this.counter);
    this.setState({
      myState: "now:" + this.counter
    });
  }

  show = () => {
    if (this.counter % 2 === 0) {
      return <EvenComponent />
    } else {
      return <OddComponent />
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>I am in control of this application and my name is Zack {this.counter} {this.state.myState}</h1>
          <button onClick={this.onPushMe}>Push Me</button>
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
          <MyComponent whatToSay={this.onPushMe} />
          {this.show()}
      
        </header>
      </div>
    );
  }

}

export default App;
