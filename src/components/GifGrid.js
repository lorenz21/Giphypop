import React, { Component } from 'react';
import GifCard from './GifCard';
import axios from 'axios';

class GifGrid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gifResults: [],
            searchTerm: '',
        };
        this.gifSearch= this.gifSearch.bind(this);
        
    }


    gifSearch(e) {
        this.setState({
            searchTerm: e.target.value
        });

        axios
        .get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${e.target.value}&limit=15`)
        .then(res => { 
            if(res.status === 200){
                this.setState({
                    gifResults: res.data.data
                })
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
      return (
        <div className="container">
            <div className="search-input">
                <input type="text" onChange={this.gifSearch}></input>
            </div>
            <div className="gif-grid">
                {this.state.gifResults ?
                this.state.gifResults.map( gif =>
                    <GifCard 
                        image={gif.images.fixed_width_small.url}
                        title={gif.title}
                        rating={gif.rating}
                        username={gif.username}
                        url={gif.url}
                    />
                )
                :
                ''
                }
            </div>
        </div>
      );
    }
}
  
export default GifGrid;