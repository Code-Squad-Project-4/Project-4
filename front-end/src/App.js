import React, { Component } from 'react';
import './App.css';
import { Register } from './components/Register';

// Class component
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Register/>
      </div>
    );
  }
}


