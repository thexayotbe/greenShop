import React from "react";
import { Wrapper } from "./style";
import Button from "../../Generic/Button";
import { ArrowRightOutlined } from "@ant-design/icons";
const SuggestCard = ({ img, title }) => {
  return (
    <Wrapper>
      <Wrapper.Img src={img} alt={""} />
      <Wrapper.TextSide>
        <Wrapper.Title>{title}</Wrapper.Title>
        <Wrapper.Description>
          We are an online plant shop offering a wide range of cheap and trendy
          plants
        </Wrapper.Description>
        <Button widthBtn={"140px"} heightBtn={"40px"} margin={"36px 0 0 0 "}>
          Find More <ArrowRightOutlined />
        </Button>
      </Wrapper.TextSide>
    </Wrapper>
  );
};

export default SuggestCard;
