import React, { Component } from 'react';
import '../CSS/Navbar.css';



export default class Navbar extends Component {
    render(){
        return(
        <div className="text-center main-nav">
          <p>CHART</p>
          <h3>Taylor Swift Songs and Videos</h3>
          <p>A list of Taylor Swift songs in iTunes.</p>
        </div>
        )
    }
}