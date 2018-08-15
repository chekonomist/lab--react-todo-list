import React, { Component } from 'react';


class Tasks extends Component {

  render(){
    var toDoContent = this.props.description
    console.log(toDoContent);
    return (
      <div className='to-do-box'>
        <input className="task-box" type="checkbox"/>
        <p className="task-box">{toDoContent}</p>
        <a className="task-box task-dlt-btn" href="#" >x</a>
      </div>
    );
  }
}

export default Tasks
