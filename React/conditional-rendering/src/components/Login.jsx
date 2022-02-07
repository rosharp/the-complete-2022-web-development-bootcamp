import React from "react";
import Input from "./Input";
import Button from "./Button";

function Login() {
  return (
    <div>
      <h1>Hello</h1>
      <form className="input">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button />
      </form>
    </div>
  );
}

export default Login;
