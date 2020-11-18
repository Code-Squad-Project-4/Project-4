import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <NavBar />

    </Router>
  );
};

export default App;