import React from "react";
import Input from "./Input";
import { LoginButton } from "./Button";

function Login() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <LoginButton />
    </form>
  );
}

export default Login;
