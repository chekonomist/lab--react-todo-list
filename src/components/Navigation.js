import React, { Component } from 'react';
import Tasks from './Tasks.js'

class Navigation extends Component {
  constructor(){
    super();
    this.state = {
      title: []
    }
    this._handleClick = this._handleClick.bind(this);
    this._renderToDos = this._renderToDos.bind(this);
  }

  _handleClick(clickEvent){
    var newToDo = this.refs.newTag.value
    var toDosArray = [...this.state.title]
    toDosArray.push({title : newToDo})
    this.setState({
      title : toDosArray
    })
  }

  _renderToDos(){
    var arrayToMap = this.state.title.map( (toDo,i)=>{
      return(
        <Tasks description={toDo.title} key={i}/>
        )
      })
      return arrayToMap
    }

  render(){
    return(
      <div>
        <header className="App-header">
          <p className="App-title">Todo List</p><p className="app-subtitle">Normal mode</p>
        </header>
        <input
        type="text"
        ref= "newTag"
        name='title'
        placeholder='ToDo description'
        //it has the default value I set above
        /*value={this.state.responsible}*/
        />
        <button onClick={ () =>{this._handleClick() } }>+</button>
        <hr/>
        {this._renderToDos()}
      </div>
    )
  }
}

export default Navigation
