import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigationbar from './components/Navigationbar'
import AddCourse from './components/AddCourse'
class App extends Component {
  render(){
  return (
    <div className="App">
     <h1>SLIIT APP</h1>
     <Navigationbar></Navigationbar>
     <AddCourse></AddCourse>
    </div>
  );
  }
}

export default App;
