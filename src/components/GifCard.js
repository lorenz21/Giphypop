import React, { Component } from 'react';

class GifCard extends Component {
    render() {
      return (
        <div className="card">
            <a href={this.props.url}><img src={this.props.image} alt=""></img></a>
            <h1>Title: {this.props.title}</h1>
            <h2>Rating: {this.props.rating}</h2>
            <h3>Username: {this.props.username}</h3>
        </div>
      );
    }
}
  
export default GifCard;