import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  /*const handleSubmit = (event) => {
    console.log(event.state.value);
  };*/

  const handleClick = (event) => {
    setHeadingText(name);
    event.preventDefault();
  };

  return (
    <div className="container">
      <form onSubmit={handleClick}>
        <h1>Hello {headingText}</h1>
        <input
          onChange={handleChange}
          type="text"
          value={name}
          placeholder="What's your name?"
        />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
