import React from "react";
import { RegisterForm, LoginForm } from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <RegisterForm /> : <LoginForm />}
    </div>
  );
}

export default App;
