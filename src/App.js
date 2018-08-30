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
  constructor(props){
  super(props);

    this.state = {
      tasks: []
    }

    this.taskRef = firebase.database().ref('task');

  }

  componentDidMount(){
    this.taskRef.on('child_added', snapshot => {
      const task = snapshot.val();
      task.key = snapshot.key
      this.setState({tasks: this.state.tasks.concat(task)})
      console.log("mounted", this.state.tasks)
    });
  }

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
          <Route path="/oldtasks" render={(props) => <OldTask {...props} tasks={this.state.tasks} /> } />
          <Route exact path="/" render={(props) => <TaskList {...props} tasks= {this.state.tasks} taskRef={this.taskRef}/> } />
        </main>


      </div>
    );
  }
}

export default App;
