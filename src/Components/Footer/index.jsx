import React from "react";
import FooterCard from "./FooterCard";
import { Wrapper } from "./style";
import footer1 from "../../assets/icons/footer1.svg";
import footer2 from "../../assets/icons/footer2.svg";
import footer3 from "../../assets/icons/footer3.svg";
import logo from "../../assets/icons/logoFull.svg";
import location from "../../assets/icons/location.svg";
import message from "../../assets/icons/message.svg";
import phone from "../../assets/icons/phone.svg";
import Facebook from "../../assets/icons/Facebook.svg";
import Instagram from "../../assets/icons/Instagram.svg";
import Twitter from "../../assets/icons/Twitter.svg";
import Linkedin from "../../assets/icons/Linkedin.svg";
import Union from "../../assets/icons/Union.svg";
import cards from "../../assets/icons/cards.png";
const Footer = () => {
  return (
    <Wrapper>
      <Wrapper.FooterAbout>
        <FooterCard img={footer1} title={"Garden Care"} />
        <FooterCard img={footer2} title={"Plant Renovation"} />
        <FooterCard img={footer3} title={"Watering Graden"} />
        <Wrapper.JoinNews>
          <Wrapper.Title>Would you like to join newsletters?</Wrapper.Title>
          <Wrapper.InputContainer>
            <Wrapper.Input placeholder={"enter your email address..."} />
            <Wrapper.Button>Join</Wrapper.Button>
          </Wrapper.InputContainer>
          <Wrapper.Description>
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!{" "}
          </Wrapper.Description>
        </Wrapper.JoinNews>
      </Wrapper.FooterAbout>
      <Wrapper.FooterContact>
        <Wrapper.ContactItem>
          <Wrapper.ContactImg src={logo} />
        </Wrapper.ContactItem>
        <Wrapper.ContactItem>
          <Wrapper.ContactImg src={location} />
          <Wrapper.ContactText>
            70 West Buckingham Ave. Farmingdale, NY 11735
          </Wrapper.ContactText>
        </Wrapper.ContactItem>
        <Wrapper.ContactItem>
          <Wrapper.ContactImg src={message} />
          <Wrapper.ContactText>contact@greenshop.com</Wrapper.ContactText>
        </Wrapper.ContactItem>
        <Wrapper.ContactItem>
          <Wrapper.ContactImg src={phone} />
          <Wrapper.ContactText>+88 01911 717 490</Wrapper.ContactText>
        </Wrapper.ContactItem>
      </Wrapper.FooterContact>
      <Wrapper.Footer>
        <Wrapper.FooterItem>
          <Wrapper.FooterTitle>My Account</Wrapper.FooterTitle>
          <Wrapper.Ul>
            <Wrapper.Li>My Account</Wrapper.Li>
            <Wrapper.Li>Our stores</Wrapper.Li>
            <Wrapper.Li>Contact us</Wrapper.Li>
            <Wrapper.Li>Career</Wrapper.Li>
            <Wrapper.Li>Specials</Wrapper.Li>
          </Wrapper.Ul>
        </Wrapper.FooterItem>
        <Wrapper.FooterItem>
          <Wrapper.FooterTitle>Help & Guide</Wrapper.FooterTitle>
          <Wrapper.Ul>
            <Wrapper.Li>Help Center</Wrapper.Li>
            <Wrapper.Li>How to Buy </Wrapper.Li>
            <Wrapper.Li>Shipping & Delivery </Wrapper.Li>
            <Wrapper.Li>Product Policy</Wrapper.Li>
            <Wrapper.Li>How to Return </Wrapper.Li>
          </Wrapper.Ul>
        </Wrapper.FooterItem>
        <Wrapper.FooterItem>
          <Wrapper.FooterTitle>Categories</Wrapper.FooterTitle>
          <Wrapper.Ul>
            <Wrapper.Li>House Plants</Wrapper.Li>
            <Wrapper.Li>Potter Plants</Wrapper.Li>
            <Wrapper.Li>Seeds</Wrapper.Li>
            <Wrapper.Li>Small Plants</Wrapper.Li>
            <Wrapper.Li>Accesories</Wrapper.Li>
          </Wrapper.Ul>
        </Wrapper.FooterItem>
        <Wrapper.FooterItem>
          <Wrapper.FooterTitle>Social Media</Wrapper.FooterTitle>
          <Wrapper.Icons>
            <Wrapper.IconImg src={Facebook} alt={""} />
            <Wrapper.IconImg src={Instagram} alt={""} />
            <Wrapper.IconImg src={Twitter} alt={""} />
            <Wrapper.IconImg src={Linkedin} alt={""} />
            <Wrapper.IconImg src={Union} alt={""} />
          </Wrapper.Icons>
          <Wrapper.FooterTitle mb={"13px"}>We accept</Wrapper.FooterTitle>
          <Wrapper.ContactImg src={cards} alt={""} />{" "}
        </Wrapper.FooterItem>
      </Wrapper.Footer>
      <Wrapper.Rights>
        <Wrapper.RightsText>
          © {new Date().getFullYear()} GreenShop. All Rights Reserved.
        </Wrapper.RightsText>
      </Wrapper.Rights>
    </Wrapper>
  );
};

export default Footer;
