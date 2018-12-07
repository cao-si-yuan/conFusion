import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {

  render() {
    return (
      <div className="App">
         <Main />
      </div>
    );
  }
}

export default App;
