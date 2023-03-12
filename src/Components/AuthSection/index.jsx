import React, { useState } from "react";
import LogIn from "./Login";
import SignIn from "./SignIn";
import { Wrapper } from "./style";
import google from "../../assets/icons/google.svg";
import facebook from "../../assets/icons/facebook-color.svg";
import close from "../../assets/icons/close.svg";
import { useDispatch, useSelector } from "react-redux";
import { switchAuthModalVisibility } from "../../redux/modalSlice";
const AuthSection = () => {
  const dispatch = useDispatch();
  const [activeSection, setActiveSection] = useState("login");
  const { authModalVisibility } = useSelector((state) => state.modal);
  return (
    <Wrapper>
      <Wrapper.Modal open={authModalVisibility}>
        <Wrapper.Close
          onClick={() => dispatch(switchAuthModalVisibility())}
          alt=""
          src={close}
        />
        <Wrapper.Title>
          <Wrapper.SectionName
            onClick={() => setActiveSection("login")}
            className={`${activeSection === "login" && "activeSection"}`}>
            Login
          </Wrapper.SectionName>
          |
          <Wrapper.SectionName
            onClick={() => setActiveSection("register")}
            className={`${activeSection === "register" && "activeSection"}`}>
            Register
          </Wrapper.SectionName>
        </Wrapper.Title>
        {activeSection === "login" ? <LogIn /> : <SignIn />}
        <Wrapper.Divider>
          <Wrapper.Line></Wrapper.Line>
          Or {activeSection} with
          <Wrapper.Line></Wrapper.Line>
        </Wrapper.Divider>

        <Wrapper.SocialAuth>
          <Wrapper.SocialIcon alt="" src={google} />
          Continue with google
        </Wrapper.SocialAuth>
        <Wrapper.SocialAuth>
          <Wrapper.SocialIcon alt="" src={facebook} />
          Continue with facebook
        </Wrapper.SocialAuth>
      </Wrapper.Modal>
    </Wrapper>
  );
};

export default AuthSection;
