import React from "react";
import { Wrapper } from "./style";
import { ArrowRightOutlined } from "@ant-design/icons";
const BlogCard = ({ img, day, minute, text, title }) => {
  return (
    <Wrapper>
      <Wrapper.Img src={img} alt={""} />
      <Wrapper.Text>
        <Wrapper.Info>
          September {day} | Read {minute} minutes
        </Wrapper.Info>
        <Wrapper.Title>{title}</Wrapper.Title>
        <Wrapper.Description>{text}</Wrapper.Description>
        <Wrapper.Button>
          Read more <ArrowRightOutlined style={{ fontSize: "12px" }} />{" "}
        </Wrapper.Button>
      </Wrapper.Text>
    </Wrapper>
  );
};

export default BlogCard;
