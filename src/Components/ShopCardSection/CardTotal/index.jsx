import React, { useState } from "react";
import { Wrapper } from "./style";

const CardTotal = ({ total }) => {
  const totalAmount = total?.reduce((a, b) => a + b);
  const [coupon, setCoupon] = useState(0);
  const [shipping, setShipping] = useState(16);
  return (
    <Wrapper>
      <Wrapper.Title>Cart Totals</Wrapper.Title>
      <Wrapper.Name>Coupon Apply</Wrapper.Name>
      <Wrapper.InputSection>
        <Wrapper.Input placeholder={"Enter coupon code here..."} />
        <Wrapper.InputBtn>Apply</Wrapper.InputBtn>
      </Wrapper.InputSection>
      <Wrapper.PriceSection>
        <Wrapper.Name>Subtotal</Wrapper.Name>
        <Wrapper.Price>${totalAmount}.00</Wrapper.Price>
      </Wrapper.PriceSection>
      <Wrapper.PriceSection>
        <Wrapper.Name>Coupon Discount</Wrapper.Name>
        <Wrapper.Price discount>(-) 00.00</Wrapper.Price>
      </Wrapper.PriceSection>
      <Wrapper.PriceSection>
        <Wrapper.Name>Shiping</Wrapper.Name>
        <Wrapper.Price>${shipping}.00</Wrapper.Price>
      </Wrapper.PriceSection>
      <Wrapper.ShippingLink>View shipping charge</Wrapper.ShippingLink>
      <Wrapper.PriceSection>
        <Wrapper.Name total>Total</Wrapper.Name>
        <Wrapper.Price total>
          ${totalAmount + shipping + coupon}.00
        </Wrapper.Price>
      </Wrapper.PriceSection>
      <Wrapper.Button>Proceed To Checkout</Wrapper.Button>
      <Wrapper.ContinueText>Continue Shopping</Wrapper.ContinueText>
    </Wrapper>
  );
};

export default CardTotal;
