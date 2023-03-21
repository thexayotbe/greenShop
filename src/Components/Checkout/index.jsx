import React from "react";
import { LocationName } from "../Generic/styles";
import FieldsSection from "./FieldsSection";
import OrderList from "./OrderLIst";
import { Wrapper } from "./style";

const Checkout = () => {
  return (
    <Wrapper>
      <LocationName>
        <LocationName.Home>Home</LocationName.Home> / Shop / Checkout
      </LocationName>
      <Wrapper.Sections>
        <FieldsSection />
        <OrderList />
      </Wrapper.Sections>
    </Wrapper>
  );
};

export default Checkout;
