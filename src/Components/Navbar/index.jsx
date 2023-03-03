import React from "react";
import { Wrapper } from "./style";
import logo from "../../assets/icons/logoFull.svg";
import shop from "../../assets/icons/shop.svg";
import login from "../../assets/icons/login.svg";
import search from "../../assets/icons/search.svg";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Container } from "../Generic/styles";
import Footer from "../Footer";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Container>
      <Wrapper>
        <Wrapper.Navbar>
          <Wrapper.Logo src={logo} onClick={() => navigate("/")} />
          <Wrapper.Links>
            <Wrapper.Link
              className={location.pathname === "/" ? "active" : ""}
              onClick={() => navigate("/")}>
              Home
            </Wrapper.Link>
            <Wrapper.Link
              className={location.pathname.includes("shop") ? "active" : ""}
              onClick={() => navigate("/shop")}>
              Shop
            </Wrapper.Link>
            <Wrapper.Link
              className={
                location.pathname.includes("plant-care") ? "active" : ""
              }
              onClick={() => navigate("/plant-care")}>
              Plant Care
            </Wrapper.Link>
            <Wrapper.Link
              className={location.pathname.includes("blog") ? "active" : ""}
              onClick={() => navigate("/blog")}>
              Blogs
            </Wrapper.Link>
          </Wrapper.Links>
          <Wrapper.Btns>
            <Wrapper.Icon src={search} />
            <Wrapper.Icon src={shop} />
            <Wrapper.LoginBtn>
              <Wrapper.Icon src={login} /> Login
            </Wrapper.LoginBtn>
          </Wrapper.Btns>
        </Wrapper.Navbar>
        <Outlet />
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Navbar;
