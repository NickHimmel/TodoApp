import React from 'react';
import Todo from 'Todo.jsx';

const TodoList = (props) => {
  let {todos} = props;
  let renderTodos = () => {
    if (todos.length === 0) {
      return (
        <p className="container__message">Nothing to Do</p>
      );
    }
    return todos.map((todo) => {
      return (
        <Todo key={todo.id} {...todo} onToggle={props.onToggle}/>
      );
    });
  }

  return (
    <div>
      {renderTodos()}
    </div>
  )
};

export default TodoList;
