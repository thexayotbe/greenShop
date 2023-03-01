import React from "react";
import { Wrapper } from "./style";
const Button = ({ widthBtn, children, heightBtn, margin, onClickFunc }) => {
  return (
    <Wrapper
      onClick={onClickFunc}
      margin={margin}
      widthBtn={widthBtn}
      heightBtn={heightBtn}>
      {children}
    </Wrapper>
  );
};

export default Button;
