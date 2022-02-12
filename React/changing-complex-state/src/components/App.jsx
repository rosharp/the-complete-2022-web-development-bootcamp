import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  const handleClick = () => {
    console.log("Clicked");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
  };

  const handleChange = (event) => {
    let { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  };

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={fullName.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={fullName.lName}
          name="lName"
          placeholder="Last Name"
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
