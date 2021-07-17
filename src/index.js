// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// This is for 'live reloading' 
if (module.hot) {
  module.hot.accept();
}

// Create a React component

const App = function() {
  return <div>Hi there!</div>;
};

// Take the React component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
