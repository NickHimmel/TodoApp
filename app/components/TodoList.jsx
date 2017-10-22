import React from 'react';
import Todo from 'Todo.jsx';

const TodoList = (props) => {
  var {todos} = props;
  var renderTodos = () => {
    return todos.map((todo) => {
      return (
        <Todo key={todo.id} {...todo}/>
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
