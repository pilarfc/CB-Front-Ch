import React, { Component } from 'react';

export default class ElementosCancion extends React.Component {

  render() {
    return(
      <li>
        <p>{this.props.trackName}</p>
      </li>
    )
  }
}
