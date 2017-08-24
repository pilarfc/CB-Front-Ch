import React, { Component } from 'react';
import Search from '../Components/Search.jsx';
import Navbar from '../Components/Navbar.jsx';
import ContainerPlaylist from '../Containers/ContainerPlaylist.jsx';

export default class MainContainer extends Component {
    render() {
        return (
            
       <div>
            <div className="row">
               <Search/>
               <Navbar/> 
            </div>
            <ContainerPlaylist/>
       </div>
        
        )
    }
}
