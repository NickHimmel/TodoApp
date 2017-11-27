import React from 'react';

const Todo = (props) => {
  var {completed, text} = props;

  return (
    <div>
      <input type="checkbox" checked={completed}/>
      {text}
    </div>
  )
};

export default Todo;
