import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor () {
    super()
    this.state = {
        inputValue: '',
    }
  }

  handleChange(value) {
    this.setState({inputValue: value})
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)}></input>
        <h1>{this.state.inputValue}</h1>
      </div>
    );
  }
}

export default App;
