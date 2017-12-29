import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from 'TodoApp.jsx';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
