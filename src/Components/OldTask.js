import React, {Component} from 'react';

class OldTask extends Component {

  constructor(props){
  super(props);

}
  render(){
    return(

      <section className="task-box">
        <h1 className="task-header"> Old Tasks </h1>
          <section className = 'oldList'>
              {this.props.tasks.map( (task, index) => {
                var d = new Date();
                d.setDate(d.getDate() + 7)
                  if (d <= task.timecreated || task.status !== "Active"){

                    return <div key={task.key}>
                      <li>
                        <input type="checkbox" checked={task.status === 'Completed'} onChange={(e) => this.props.toggleComplete(index)  } />
                        <span>{task.name} </span>
                      </li>
                    </div>
                  }
                })
            }
          </section>
      </section>


    )}
}
export default OldTask;
