import React, { Component } from 'react';
import TodoItem from './TodoItems';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        return (
          <TodoItem key={todo.title} todo={todo} />
        );
      });
    }
    return(
      <div className="Todos">
        <h2>Todo list</h2>
        {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array
}

export default Todos;
