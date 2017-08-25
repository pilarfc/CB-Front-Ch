import React, { Component } from 'react';
import ElementosCancion from '../Components/ElementosCancion.jsx';


export default class Song extends Component {
    render() {
        const pinchesCanciones = this.props.songslist.map(function(result) {
            return <ElementosCancion nombe={result.trackId} trackName={result.trackName}/>
        })
        
    return (
       <ul>
           {pinchesCanciones}
       </ul>
    
    )
        
        
    }
}

