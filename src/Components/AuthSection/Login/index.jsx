import React from "react";
import { Wrapper } from "./style";
const LogIn = () => {
  return (
    <Wrapper>
      <Wrapper.Title>Enter your username and password to login.</Wrapper.Title>
      <Wrapper.Input placeholder={"Email"} />
      <Wrapper.InputPassword placeholder={"Password"} />
      <Wrapper.Forgot>Forgot Password?</Wrapper.Forgot>
      <Wrapper.Button>Login</Wrapper.Button>
    </Wrapper>
  );
};

export default LogIn;
