import React from "react";
import { Wrapper } from "./style";

const Card = ({ order, productCount }) => {
  return (
    <Wrapper>
      <Wrapper.Img src={order.img} />
      <Wrapper.Info>
        <Wrapper.Title>{order.name}</Wrapper.Title>
        <Wrapper.ID>
          SKU :<Wrapper.Span> {order.id}</Wrapper.Span>
        </Wrapper.ID>
      </Wrapper.Info>
      <Wrapper.Count>(x {productCount})</Wrapper.Count>
      <Wrapper.Total>${order.price * productCount}.00</Wrapper.Total>
    </Wrapper>
  );
};

export default Card;
