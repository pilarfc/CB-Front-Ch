import React, { Component } from 'react';
import '../CSS/ContainerPlaylist.css';
import AlbumIndividual from '../Components/AlbumIndividual.jsx';
import Song from '../Components/Song.jsx';
import disco1 from "../img/disco1.jpg";
import disco2 from "../img/disco2.jpg";
import disco3 from "../img/disco3.jpg";
import disco4 from "../img/disco4.jpg";
import disco5 from "../img/disco5.jpg";
import disco6 from "../img/disco6.jpg";
import disco7 from "../img/disco7.jpg";
import disco8 from "../img/disco8.jpg";


const albumIzq = [
    {
        albumUrl: disco1
    }, 
    {
        albumUrl: disco2
    }, 
    {
        albumUrl: disco3
    }, 
    {
        albumUrl: disco4
    }
] 

const albumDer = [
    {
        albumUrl: disco5
    }, 
    {
        albumUrl: disco6
    }, 
    {
        albumUrl: disco7
    }, 
    {
        albumUrl: disco8
    }
] 


export default class ContainerPlaylist extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            songs: []
        }
        
    }
    
    componentWillMount() {
      fetch('https://itunes.apple.com/search?term=taylor+swift&limit=200')
      .then((response ) => { 
        return response.json() 
     })
     .then((individualSong) => { 
       this.setState({
           songs:individualSong.results
       })
       console.log(this.state.songs)
     });
    }
    
    
    render() {
        return (
            
        <div className="row">
          <div className="col-sm-3 col-lg-3 col-xl-3"></div>
           <div className="col-sm-8 col-lg-8 col-xl-8">
               <div className="row">
                   <div className="col-sm-7 col-lg-7 col-xl-7 scroll">
                        <Song songslist={this.state.songs}/>
                   </div>
                   <div id="other-charts" className="col-sm-5 col-lg-5 col-xl-5">
                       <h3 className="text-center">Other Charts</h3>
                       <div className="row">
                           <div className="col-sm-6 col-lg-6 col-xl-6 text-center">
                                {albumIzq.map((img, i) =>{
                            return <AlbumIndividual key={i} img={img.albumUrl} />
                            })}
                           </div>
                           <div className="col-sm-6 col-lg-6 col-xl-6 text-center">
                                {albumDer.map((img, i) =>{
                            return <AlbumIndividual key={i} img={img.albumUrl} />
                            })}
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </div>
        
        )
    }
}