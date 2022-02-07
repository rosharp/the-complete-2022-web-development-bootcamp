import React from "react";
import Login from "./Login";

const currentTime = new Date().getHours();

console.log(currentTime);

var isLoggedIn = false;

function App() {
  return (
    <div className="container">
      {currentTime > 12 && <p>Why still working?</p>}
      {isLoggedIn ? <h1>Hello</h1> : <Login />}{" "}
    </div>
  );
}

export default App;
