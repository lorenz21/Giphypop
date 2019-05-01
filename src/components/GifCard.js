import React, { Component } from 'react';

class GifCard extends Component {
    render() {
      return (
        <div className="card">
            <h1>Title: {this.props.title}</h1>
            <h2>Rating: {this.props.rating}</h2>
            <h3>Username: {this.props.username}</h3>
            <p>URL: <a href={this.props.url}>{this.props.url}</a></p>
        </div>
      );
    }
}
  
export default GifCard;