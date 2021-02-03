import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import React from 'react';
import HomeComponent from './components/HomeComponent';
import RandomComponent from './components/RandomComponent';
import ColorsComponent from "./components/ColorsComponent";
function App() {
  return (
    <div className="App">

 <Router>
            <HomeComponent path="/home"/>
            <RandomComponent path="/:random"/>
            <ColorsComponent path="/:random/:color1/:color2"/>
        </Router>
    </div>
  );
}

export default App;
