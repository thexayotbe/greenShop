import React from "react";
import { Wrapper } from "../style";
import { useLocation, useNavigate } from "react-router-dom";

const Links = ({ mobile }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Wrapper.Links mobile={mobile}>
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
        className={location.pathname.includes("plant-care") ? "active" : ""}
        onClick={() => navigate("/plant-care")}>
        Plant Care
      </Wrapper.Link>
      <Wrapper.Link
        className={location.pathname.includes("blog") ? "active" : ""}
        onClick={() => navigate("/blog")}>
        Blogs
      </Wrapper.Link>
    </Wrapper.Links>
  );
};

export default Links;
