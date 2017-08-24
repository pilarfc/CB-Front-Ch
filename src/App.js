import React, { Component } from 'react';
import logo from './logo.svg';
import MainContainer from './Containers/MainContainer.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
          <MainContainer/>
      </div>
    );
  }
}

export default App;
