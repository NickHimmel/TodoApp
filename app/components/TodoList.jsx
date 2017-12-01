import React from 'react';
import Todo from 'Todo.jsx';

const TodoList = (props) => {
  let {todos} = props;
  let renderTodos = () => {
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
