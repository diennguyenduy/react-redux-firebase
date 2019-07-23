import React, { Component } from 'react';
import ToDoList from './components /ToDoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <ToDoList />
      </div>
    );
  }
}

export default App;
