// Import the React and ReacatDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React Component
const App = () => {
    return (
        <div>Hi there!</div>
    )
}

// Take the reacct component and show it on the screen

ReactDOM.render(<App />, document.querySelector('#root'))