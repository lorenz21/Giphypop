import React, { Component } from 'react';
import GifCard from './GifCard';

class GifGrid extends Component {
    render() {
      return (
        <div className="gif-grid">
            <GifCard 
                title='Hams'
                rating='G'
                username='Tom'
                url='https:google.com'
            />
            <GifCard />
            <GifCard />
            <GifCard />
        </div>
      );
    }
}
  
export default GifGrid;