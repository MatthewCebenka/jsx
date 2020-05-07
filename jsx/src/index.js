// Matthew Cebenka SECTION THREE
// Import the React and ReacatDOM libraries
import React from "react";
import ReactDOM from "react-dom";

const getButtonText = () => {
  return "Click on me!";
};

// Noramlly any component with any content like this one would not be in the index.js file. I would at minimum be in the app.js file component.
// Create a React Component
const App = () => {
  const buttonText = { text: "click me" };
  const labelText = "Enter Name:";
  const style = {
    backgroundColor: "blue",
    color: "white",
  };
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={style}>{buttonText.text}</button>
    </div>
  );
};

// Take the reacct component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
