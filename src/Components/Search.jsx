import React, { Component } from 'react';
import '../CSS/Search.css';


export default class Search extends Component {
    render() {
        return (
            
            
            
    <header>
        <div className="col-sm-4 col-lg-4 col-xl-4">
            <input type="text" className="form-control input-search" placeholder="Search"/>
        </div>
        <div>
            <button type="submit" className="btn btn-default">LOG IN</button>
        </div>
    </header>
        
        )
    }
}