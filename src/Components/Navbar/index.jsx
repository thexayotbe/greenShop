import React, { useState } from "react";
import { Wrapper } from "./style";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/icons/logoFull.svg";
import shop from "../../assets/icons/shop.svg";
import login from "../../assets/icons/login.svg";
import search from "../../assets/icons/search.svg";
import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "../Generic/styles";
import Footer from "../Footer";
import { Badge, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { switchAuthModalVisibility } from "../../redux/modalSlice";
import { UserOutlined } from "@ant-design/icons";
import Links from "./Links";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [menuToggle, setMenuToggle] = useState(false);
  const { isAuthed } = useSelector((state) => state.userData);
  const { orderData } = useSelector((state) => state.orderData);
  return (
    <Container>
      <Wrapper>
        <Wrapper.Navbar>
          <Wrapper.Logo src={logo} onClick={() => navigate("/")} />
          <Links />
          <Wrapper.Btns>
            <Wrapper.Icon src={search} />
            <Badge count={orderData.length}>
              <Wrapper.Icon src={shop} onClick={() => navigate("/shop-card")} />
            </Badge>
            {isAuthed ? (
              <Wrapper.ProfileBtn onClick={() => navigate("/account")}>
                <UserOutlined />
              </Wrapper.ProfileBtn>
            ) : (
              <Wrapper.LoginBtn
                onClick={() => dispatch(switchAuthModalVisibility())}>
                <Wrapper.Icon src={login} /> Login
              </Wrapper.LoginBtn>
            )}
            <AiOutlineMenu
              className="icon"
              onClick={() => setMenuToggle(true)}
            />
            <Modal
              open={menuToggle}
              width={900}
              footer={false}
              title="Site Menu"
              onCancel={() => setMenuToggle(false)}>
              <Links mobile={true} />
              <Wrapper.LoginBtn
                mobile={true}
                onClick={() => dispatch(switchAuthModalVisibility())}>
                <Wrapper.Icon src={login} /> Login
              </Wrapper.LoginBtn>
            </Modal>
          </Wrapper.Btns>
        </Wrapper.Navbar>
        <Outlet />
        {/* <Footer /> */}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
