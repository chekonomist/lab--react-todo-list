import React, { Component } from 'react';
import './App.css';

//Command to import the data from another component
import { todos } from './todos.js'

//This is the component that I used to build the top navigation
import Navigation from './components/Navigation.js'

//Here's the component which will create all the t ToDos
import Tasks from './components/Tasks.js'

class App extends Component {
  //Invoke the constructor to manipulate the state.
  //Each new ToDo will be created and stored in the state
  constructor(){
    super();
    this.state = {
      todos
    }
  }

  render() {

    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
