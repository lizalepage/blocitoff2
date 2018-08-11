import React, {Component} from 'react';


class TaskList extends Component {

  constructor(props){
  super(props);

  this.state = {
    tasks: [],
  };


  this.taskRef = this.props.firebase.database().ref('task');
  }

  componentDidMount(){
    this.taskRef.on('child_added', snapshot => {
      const task = snapshot.val();
      task.key = snapshot.key
      this.setState({tasks: this.state.tasks.concat(task)})
    });
  }

  render(){
    return(
      <section className="task-box">
        <h1 className="task-header"> To Dos </h1>
        <section className = 'taskList'>

        {this.state.tasks.map( (task, index) => {
          return <div key={task.key}> {task.name} </div>

      })
    }


      </section>
    </section>
    )
  }

}

export default TaskList;
