// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// This is for 'live reloading' 
if (module.hot) {
  module.hot.accept();
}


// Create a React component

const App = function() {

  const buttonText = { text: 'Click me' };

  return <div>
    <label className="label" for="name">Enter name:</label>
    <input id="name" type="text" />
    <button style={{ backgroundColor:'blue', color:'white' }}>
      {buttonText.text}  
    </button>
  </div>
};

// Take the React component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
