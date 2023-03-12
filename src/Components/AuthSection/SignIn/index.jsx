import React, { useState } from "react";
import { Wrapper } from "../Login/style";
import { addUser } from "../../../redux/userSlice";
import { useDispatch } from "react-redux";
import { notification } from "antd";
const SignIn = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const getUserDate = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const getConfirmPasswword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const openNotifications = (type) => {
    notification[type]({
      message: `${type === "success" ? "Success" : "Error"}`,
      description: `${
        type === "success"
          ? "You Signed in successfullys"
          : "Please cheack all inputs and passwords"
      }`,
    });
  };
  const addUserHandler = () => {
    let dataStatus = Object.values(userData).every((value) => value);
    if (userData.password === confirmPassword && dataStatus)
      dispatch(addUser(userData));
    else console.log("Error");
  };

  return (
    <Wrapper>
      <Wrapper.Title>Enter your email and password to register.</Wrapper.Title>
      <Wrapper.Input
        placeholder={"First Name"}
        name={"firstName"}
        onChange={getUserDate}
        value={userData.firstName}
      />
      <Wrapper.Input
        placeholder={"Last Name"}
        name={"lastName"}
        onChange={getUserDate}
        value={userData.lastName}
      />
      <Wrapper.Input
        placeholder={"Username"}
        name={"userName"}
        onChange={getUserDate}
        value={userData.userName}
      />
      <Wrapper.Input
        placeholder={"Enter your email address"}
        name={"email"}
        onChange={getUserDate}
        value={userData.email}
      />
      <Wrapper.InputPassword
        placeholder={"Password"}
        name={"password"}
        onChange={getUserDate}
        value={userData.password}
      />
      <Wrapper.InputPassword
        placeholder={"Confirm Password"}
        name={"confirmPassword"}
        value={confirmPassword}
        onChange={getConfirmPasswword}
      />
      <Wrapper.Button onClick={addUserHandler}>Register</Wrapper.Button>
    </Wrapper>
  );
};

export default SignIn;
