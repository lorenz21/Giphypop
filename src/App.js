import React, { Component } from 'react';
import './App.css';
import GifGrid from './components/GifGrid';
require('dotenv').config()

class App extends Component {
  render() {
    return (
      <div className="App">
        <GifGrid  />
      </div>
    );
  }
}

export default App;
