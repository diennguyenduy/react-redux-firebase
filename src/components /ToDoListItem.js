import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeToDo } from '../actions';
import './ToDoListItem.css';

class ToDoListItem extends Component {
  handleCompleteClick = (completeToDoId) => {
    const { completeToDo } = this.props;
    completeToDo(completeToDoId);
  };

  render() {
    const { todoId, todo } = this.props;
    return (
      <div key='toDoName' className='col s10 offset-s1 to-do-list-item teal'>
        <h4>
          {todo.title}{' '}
          <span onClick={() => this.handleCompleteClick(todoId)} className='complete-todo-item'>
            <i className='material-icons'>Done</i>
          </span>
        </h4>
      </div>
    );
  }
}

export default connect(
  null,
  { completeToDo }
)(ToDoListItem);
