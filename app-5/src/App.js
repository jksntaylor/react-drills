import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image image='https://images.unsplash.com/photo-1540152939014-291e50952cb2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0bfaeca00f2aa1531e06665d01e64a3b&auto=format&fit=crop&w=500&q=60'/>
      </div>
    );
  }
}

export default App;
