import React, { Component } from 'react';

export default class SongElements extends React.Component {

  render() {
    return(
    <div>
        <hr/>
      <div id="cards-songs">
        <p><b>Track Name:</b> {this.props.trackName}</p>
        <p><b>Collection Name:</b> {this.props.collectionName}</p>
        <p><b>Track Id:</b> {this.props.trackId}</p>
      </div>
    </div>
    )
  }
}
