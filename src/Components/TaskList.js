import React, {Component} from 'react';
import OldTask from "./OldTask.js";


class TaskList extends Component {

  constructor(props){
  super(props);

  this.state = {

    newTaskDescription: "",
    newTaskPriority: ""
  };


  }


  handleChange(e){
    this.setState({newTaskDescription: e.target.value})
  }

  handleChangePriority(e){
    this.setState({newTaskPriority: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.taskRef.push({
      name: this.state.newTaskDescription,
      priority: this.state.newTaskPriority,
      status: "Active",
      timecreated: new Date(),
    });
  }

  render(){
    return(
      <section className="task-box">
        <h1 className="task-header"> Current Tasks </h1>
        <section className = 'taskList'>

        {this.props.tasks.map( (task, index) => {
          var d = new Date();
          d.setDate(d.getDate() - 7)
          if (d <= task.timecreated && task.status === "Active"){

            return <div key={task.key}>
              <li>
                <input type="checkbox" checked={task.status.complete} />
                <span>{task.name} </span>
              </li>
            </div>


      }
    })
  }


      </section>

      <form onSubmit={ (e) => this.handleSubmit(e)}>
        <input type="text" value={this.state.newTaskDescription} onChange={ (e) => this.handleChange(e)} />
        <select id="priority" value={this.state.newTaskPriority} onChange={ (e) => this.handleChangePriority(e)}>
          <option value="1"> Low </option>
          <option value="2"> Medium </option>
          <option value="3"> High </option>
        </select>
        <input type="submit"/>
      </form>
    </section>
    )
  }

}

export default TaskList;
