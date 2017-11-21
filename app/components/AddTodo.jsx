import React from 'react';

const AddTodo = (props) => {
  return (
    <div>
      <form>
        <input type="text" placeholder="What do you need to do?"/>
        <input type="submit" value="Add Todo"/>
      </form>
    </div>
  )
};

export default AddTodo;
