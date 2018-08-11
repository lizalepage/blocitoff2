import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import TaskList from './Components/TaskList.js';

var config = {
    apiKey: "AIzaSyCNjFq0XoicCtaxBJZjYlNuKF_L3BArUzo",
    authDomain: "blocitoff-aa7a5.firebaseapp.com",
    databaseURL: "https://blocitoff-aa7a5.firebaseio.com",
    projectId: "blocitoff-aa7a5",
    storageBucket: "blocitoff-aa7a5.appspot.com",
    messagingSenderId: "340890476257"
  };
  firebase.initializeApp(config);

class App extends Component {
  constructor(props){
    super(props);


  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Liza Task List </h1>
        </header>
        <TaskList firebase={firebase} />
      </div>
    );
  }
}

export default App;
