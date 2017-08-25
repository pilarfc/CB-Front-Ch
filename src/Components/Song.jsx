import React, { Component } from 'react';
import SongElements from '../Components/SongElements.jsx';



export default class Song extends Component {
    render() {
        const songsCards = this.props.songslist.map(function(result) {
            return <SongElements trackName={result.trackName} collectionName={result.collectionName} trackId={result.trackId}/>
        })
        
    return (
       <div>
           {songsCards}
       </div>
    
    )
        
        
    }
}

