import { Checkbox } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Wrapper } from "./style";
import { setAddress } from "../../../redux/orderDataSlice";

const FieldsSection = () => {
  const dispatch = useDispatch();
  const getAddress = (e) =>
    dispatch(setAddress({ type: e.target.name, value: e.target.value }));

  return (
    <Wrapper>
      <Wrapper.Title>Billing Address</Wrapper.Title>
      <Wrapper.Form>
        <Wrapper.FormItem>
          <Wrapper.Label>
            First Name <Wrapper.Required>*</Wrapper.Required>
          </Wrapper.Label>
          <Wrapper.Input name="firstName" onChange={getAddress} />
        </Wrapper.FormItem>
        <Wrapper.FormItem>
          <Wrapper.Label>
            Last Name <Wrapper.Required>*</Wrapper.Required>
          </Wrapper.Label>
          <Wrapper.Input name="lastName" onChange={getAddress} />
        </Wrapper.FormItem>
        <Wrapper.FormItem>
          <Wrapper.Label>
            Country / Region <Wrapper.Required>*</Wrapper.Required>
          </Wrapper.Label>
          <Wrapper.Input name="region" onChange={getAddress} />
        </Wrapper.FormItem>
        <Wrapper.FormItem>
          <Wrapper.Label>
            Town / City <Wrapper.Required>*</Wrapper.Required>
          </Wrapper.Label>
          <Wrapper.Input name="town" onChange={getAddress} />
        </Wrapper.FormItem>
        <Wrapper.FormItem>
          <Wrapper.Label>
            Street Address<Wrapper.Required>*</Wrapper.Required>
          </Wrapper.Label>
          <Wrapper.Input
            placeholder={"House number and street name"}
            name="house"
            onChange={getAddress}
          />
        </Wrapper.FormItem>
        <Wrapper.FormItem>
          <Wrapper.Label>
            <Wrapper.Required> </Wrapper.Required>
          </Wrapper.Label>
          <Wrapper.Input
            name="appartment"
            onChange={getAddress}
            placeholder={"Appartment, suite, unit, etc. (optional)"}
          />
        </Wrapper.FormItem>
        <Wrapper.FormItem>
          <Wrapper.Label>
            State <Wrapper.Required>*</Wrapper.Required>
          </Wrapper.Label>
          <Wrapper.Input name="state" onChange={getAddress} />
        </Wrapper.FormItem>
        <Wrapper.FormItem>
          <Wrapper.Label>
            Zip <Wrapper.Required>*</Wrapper.Required>
          </Wrapper.Label>
          <Wrapper.Input name="zip" onChange={getAddress} />
        </Wrapper.FormItem>
        <Wrapper.FormItem>
          <Wrapper.Label>
            Email Address <Wrapper.Required>*</Wrapper.Required>
          </Wrapper.Label>
          <Wrapper.Input name="email" onChange={getAddress} />
        </Wrapper.FormItem>
        <Wrapper.FormItem>
          <Wrapper.Label>
            Phone Number <Wrapper.Required>*</Wrapper.Required>
          </Wrapper.Label>
          <Wrapper.Input name="phoneNumber" onChange={getAddress} />
        </Wrapper.FormItem>
      </Wrapper.Form>
      <Wrapper.AnotherShip>
        <Wrapper.RadioSection>
          <Checkbox>
            <Wrapper.RadioTitle>
              Ship to a different address?
            </Wrapper.RadioTitle>
          </Checkbox>
        </Wrapper.RadioSection>
        <Wrapper.OrderNoteTitle>Order notes (optional)</Wrapper.OrderNoteTitle>
        <Wrapper.OrderNote></Wrapper.OrderNote>
      </Wrapper.AnotherShip>
    </Wrapper>
  );
};

export default FieldsSection;
