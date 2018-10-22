import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor () {
    super()

    this.state= {
      array: ['spaghetti','ice cream','sushi','bologna','cheese']
    }
  }
  render() {
    let displayArray = this.state.array.map((e,i) => <h2 key={i}>{e}</h2>);
    return (
      <div className="App">
        {displayArray}
      </div>
    );
  }
}

export default App;
