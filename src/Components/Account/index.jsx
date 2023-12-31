import React from "react";
import { Wrapper } from "./style";
import profile from "../../assets/icons/profile.svg";
import bag from "../../assets/icons/Bag.svg";
import location from "../../assets/icons/Location-pr.svg";
import heart from "../../assets/icons/heart.svg";
import logout from "../../assets/icons/Logout.svg";
import Details from "./Details";
import Location from "./Location";
import Wishlist from "./Wishlist";
import Products from "./Products";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sections = [<Details />, <Products />, <Location />, <Wishlist />];
  const [activeSection, setActivePage] = useState(0);
  const logOutHandler = () => {
    dispatch(logOut());
    navigate("/");
  };
  return (
    <Wrapper>
      <Wrapper.Menu>
        <Wrapper.Title>My Account</Wrapper.Title>
        <Wrapper.MenuItems>
          <Wrapper.MenuItem
            className={activeSection === 0 && "activeSection"}
            onClick={() => setActivePage(0)}>
            <Wrapper.ItemIcon src={profile} />
            <Wrapper.ItemText>Account Details </Wrapper.ItemText>
          </Wrapper.MenuItem>
          <Wrapper.MenuItem
            className={activeSection === 1 && "activeSection"}
            onClick={() => setActivePage(1)}>
            <Wrapper.ItemIcon src={bag} />
            <Wrapper.ItemText>My products</Wrapper.ItemText>
          </Wrapper.MenuItem>
          <Wrapper.MenuItem
            className={activeSection === 2 && "activeSection"}
            onClick={() => setActivePage(2)}>
            <Wrapper.ItemIcon src={location} />
            <Wrapper.ItemText>Address</Wrapper.ItemText>
          </Wrapper.MenuItem>
          <Wrapper.MenuItem
            className={activeSection === 3 && "activeSection"}
            onClick={() => setActivePage(3)}>
            <Wrapper.ItemIcon src={heart} />
            <Wrapper.ItemText>Wishlist</Wrapper.ItemText>
          </Wrapper.MenuItem>
        </Wrapper.MenuItems>
        <Wrapper.LogOutBtn onClick={logOutHandler}>
          <Wrapper.ItemIcon src={logout} />
          Logout
        </Wrapper.LogOutBtn>
      </Wrapper.Menu>
      <Wrapper.Sections>
        {sections.map(
          (value, index) =>
            index === activeSection && <div key={index}>{value}</div>
        )}
      </Wrapper.Sections>
    </Wrapper>
  );
};

export default Account;
