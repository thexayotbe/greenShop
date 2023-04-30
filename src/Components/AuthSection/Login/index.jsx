import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { checkUser } from "../../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { switchAuthModalVisibility } from "../../../redux/modalSlice";
import { notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const LogIn = () => {
  const dispatch = useDispatch();
  const { isAuthed } = useSelector((state) => state.userData);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });
  const getUserData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setIsError(false);
  };
  const openNotifications = (type) => {
    notification[type]({
      message: `${type === "success" ? "Success" : "Error"}`,
      description: `${
        type === "success"
          ? "You Logged in successfullys"
          : "Username or password incorrect"
      }`,
    });
  };

  const checkHandler = () => {
    setLoading(true);
    if (userData.userName && userData.password) {
      const localStorageUsers =
        JSON.parse(localStorage.getItem("userData")) || [];
      const foundData = localStorageUsers.find(
        (value) =>
          value.email === userData.userName &&
          value.password === userData.password
      );
      setTimeout(() => {
        if (foundData) {
          dispatch(checkUser({ data: foundData }));
          dispatch(switchAuthModalVisibility());
          openNotifications("success");
        } else {
          openNotifications("error");
          setIsError(true);
        }
        setLoading(false);
      }, 3000);
    } else {
      setIsError(true);
      openNotifications("error");
      setLoading(false);
    }
  };
  return (
    <Wrapper>
      <Wrapper.Title>Enter your username and password to login.</Wrapper.Title>
      <Wrapper.Input
        placeholder={"Email or username"}
        name={"userName"}
        autoComplete={"username"}
        onChange={getUserData}
        error={isError ? "true" : undefined}
      />
      <Wrapper.InputPassword
        placeholder={"Password"}
        autoComplete="current-password"
        name={"password"}
        onChange={getUserData}
        error={isError ? "true" : undefined}
        onKeyDown={(e) => (e.key === "Enter" || e.key === 13) && checkHandler()}
      />
      <Wrapper.Forgot>Forgot Password?</Wrapper.Forgot>
      <Wrapper.Button onClick={checkHandler}>
        {loading ? <LoadingOutlined /> : "Login"}
      </Wrapper.Button>
    </Wrapper>
  );
};

export default LogIn;
