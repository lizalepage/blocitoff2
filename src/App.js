import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import * as firebase from 'firebase';
import TaskList from './Components/TaskList.js';
import OldTask from './Components/OldTask.js';

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


  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to Liza Task List </h1>
          <nav>
             <Link to='/'>Current List</Link>
             <Link to='/oldtasks'>Old Tasks</Link>
           </nav>
        </header>
        <main>
          <Route path="/oldtasks" component={OldTask} />
        </main>

        <TaskList firebase={firebase} />
      </div>
    );
  }
}

export default App;
