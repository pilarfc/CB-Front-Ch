import React, { Component } from 'react';



export default class AlbumIndividual extends Component {
    render(){
        return(
        <div>
            <img className="img-responsive" src={this.props.img} alt="album"/>
        </div>   
        )
    }
}