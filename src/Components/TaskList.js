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
      console.log("mounted", this.state.tasks)
    });
  }

  render(){
    return(
      <section className="task-box">
        <h1 className="task-header"> Current Tasks </h1>
        <section className = 'taskList'>

        {this.state.tasks.map( (task, index) => {
          return <div key={task.key}>
          <li>
            <input type="checkbox" checked={task.status.complete} />
            <span>{task.name} </span>
          </li>
          </div>
      })
    }


      </section>
    </section>
    )
  }

}

export default TaskList;
