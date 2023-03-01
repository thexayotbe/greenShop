import React from "react";
import Button from "../../Generic/Button";
import { Container } from "../../Generic/styles";
import { Wrapper } from "./style";
import mainImg1 from "../../../assets/images/mainImg.png";
const HomeCarouselElement = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper.TextSide>
          <Wrapper.Description isTop>Welcome to GreenShop</Wrapper.Description>
          <Wrapper.Title>
            Let’s Make a Better
            <Wrapper.Span> Planet</Wrapper.Span>
          </Wrapper.Title>
          <Wrapper.Description>
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </Wrapper.Description>
          <Button widthBtn={"140px"} heightBtn={"40px"}>
            Shop Now
          </Button>
        </Wrapper.TextSide>
        <Wrapper.ImgSide>
          <Wrapper.Img src={mainImg1} />
        </Wrapper.ImgSide>
      </Wrapper>
    </Container>
  );
};

export default HomeCarouselElement;
