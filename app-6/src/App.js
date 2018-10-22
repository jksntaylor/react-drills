import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component {

  constructor() {
    super()
    this.state = {
      tasks: [],
      userInput: '',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(value) {
    this.setState({userInput: value})
  }

  handleClick () {
    this.setState({
      tasks: [...this.state.tasks, this.state.userInput],
      userInput: '',
    })
  }

  render() {
    let list = this.state.tasks.map((e, i) => <Todo key={i} task={e}/>)
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)}></input>
        <button onClick={this.handleClick}>Add</button>
        {list}
      </div>
    );
  }
}

export default App;
