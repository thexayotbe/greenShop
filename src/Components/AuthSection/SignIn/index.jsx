import React, { useState } from "react";
import { Wrapper } from "../Login/style";
import { addUser } from "../../../redux/userSlice";
import { useDispatch } from "react-redux";
import { notification } from "antd";
import { switchAuthModalVisibility } from "../../../redux/modalSlice";
import { LoadingOutlined } from "@ant-design/icons";

const SignIn = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState();
  const getUserDate = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setIsError(false);
  };
  const getConfirmPasswword = (e) => {
    setConfirmPassword(e.target.value);
    setIsError(false);
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
    setLoading(true);
    let dataStatus = Object.values(userData).every((value) => value);
    if (userData.password === confirmPassword && dataStatus) {
      setTimeout(() => {
        dispatch(addUser(userData));
        openNotifications("success");
        dispatch(switchAuthModalVisibility());
        setLoading(false);
      }, 3000);
    } else {
      setLoading(false);
      setIsError(true);
      openNotifications("error");
    }
  };

  return (
    <Wrapper>
      <Wrapper.Title>Enter your email and password to register.</Wrapper.Title>
      <Wrapper.Input
        placeholder={"First Name"}
        name={"firstName"}
        onChange={getUserDate}
        value={userData.firstName}
        isError={isError}
      />
      <Wrapper.Input
        placeholder={"Last Name"}
        name={"lastName"}
        onChange={getUserDate}
        value={userData.lastName}
        isError={isError}
      />
      <Wrapper.Input
        placeholder={"Username"}
        name={"userName"}
        onChange={getUserDate}
        value={userData.userName}
        isError={isError}
      />

      <Wrapper.Input
        placeholder={"Enter your email address"}
        name={"email"}
        onChange={getUserDate}
        value={userData.email}
        isError={isError}
      />
      <Wrapper.InputPassword
        placeholder={"Password"}
        name={"password"}
        onChange={getUserDate}
        value={userData.password}
        isError={isError}
      />
      <Wrapper.InputPassword
        placeholder={"Confirm Password"}
        name={"confirmPassword"}
        value={confirmPassword}
        onChange={getConfirmPasswword}
        isError={isError}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === 13) && addUserHandler()
        }
      />
      <Wrapper.Button onClick={addUserHandler}>
        {loading ? <LoadingOutlined /> : "Register"}
      </Wrapper.Button>
    </Wrapper>
  );
};

export default SignIn;
