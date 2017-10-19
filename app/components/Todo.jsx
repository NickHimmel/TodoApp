import React from 'react';

const Todo = (props) => {
  var {text} = props;

  return (
    <div>
      {text}
    </div>
  )
};

export default Todo;
