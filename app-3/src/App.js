import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      array: ['Jackson','Chris','Nate','Ellie','Sunny','Erik','Adam','Abby'],
      userInput: ''
    }
  }

  handleChange(value) {
    this.setState({userInput: value})
  }

  render() {
    let arrayDisplay = this.state.array.filter((e, i) => e.includes(this.state.userInput)).map((e,i) => <h2 key={i}>{e}</h2>)
  
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)}></input>
        {arrayDisplay}
      </div>
    );
  }
}

export default App;
