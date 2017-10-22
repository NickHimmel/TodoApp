import React from 'react';

const Todo = (props) => {
  var {id, text} = props;

  return (
    <div>
      {id}. {text}
    </div>
  )
};

export default Todo;
