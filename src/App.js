import React, { Component } from 'react';
import './App.css';
import GifGrid from './components/GifGrid';
require('dotenv').config()

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to GiphyPop</h1>
        <p>A place to search for as many gifs as you so desire.</p>
        <GifGrid  />
      </div>
    );
  }
}

export default App;
