import React from "react";
import { Wrapper } from "./style";
import circle from "../../../assets/icons/circle.svg";
const FooterCard = ({ img, title }) => {
  return (
    <Wrapper>
      <Wrapper.ImgSection>
        <Wrapper.Img src={img} />
        <Wrapper.Shape src={circle} />
      </Wrapper.ImgSection>
      <Wrapper.Title>{title}</Wrapper.Title>
      <Wrapper.Description>
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </Wrapper.Description>
    </Wrapper>
  );
};

export default FooterCard;
