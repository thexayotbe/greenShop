import { Checkbox } from "antd";
import React from "react";
import { Wrapper } from "./style";

const FieldsSection = () => {
  return (
    <Wrapper>
      <Wrapper.Title>Billing Address</Wrapper.Title>
      <Wrapper.Form>
        <Wrapper.FormItem>
          <Wrapper.Label>
            First Name <Wrapper.Required>*</Wrapper.Required>
          </Wrapper.Label>
          <Wrapper.Input />
        </Wrapper.FormItem>
        <Wrapper.FormItem>
          <Wrapper.Label>
            Last Name <Wrapper.Required>*</Wrapper.Required>
          </Wrapper.Label>
          <Wrapper.Input />
        </Wrapper.FormItem>
        <Wrapper.FormItem>
          <Wrapper.Label>
            Country / Region <Wrapper.Required>*</Wrapper.Required>
          </Wrapper.Label>
          <Wrapper.Input />
        </Wrapper.FormItem>
        <Wrapper.FormItem>
          <Wrapper.Label>
            Town / City <Wrapper.Required>*</Wrapper.Required>
          </Wrapper.Label>
          <Wrapper.Input />
        </Wrapper.FormItem>
        <Wrapper.FormItem>
          <Wrapper.Label>
            Street Address<Wrapper.Required>*</Wrapper.Required>
          </Wrapper.Label>
          <Wrapper.Input placeholder={"House number and street name"} />
        </Wrapper.FormItem>
        <Wrapper.FormItem>
          <Wrapper.Label>
            <Wrapper.Required> </Wrapper.Required>
          </Wrapper.Label>
          <Wrapper.Input
            placeholder={"Appartment, suite, unit, etc. (optional)"}
          />
        </Wrapper.FormItem>
        <Wrapper.FormItem>
          <Wrapper.Label>
            State <Wrapper.Required>*</Wrapper.Required>
          </Wrapper.Label>
          <Wrapper.Input />
        </Wrapper.FormItem>
        <Wrapper.FormItem>
          <Wrapper.Label>
            Zip <Wrapper.Required>*</Wrapper.Required>
          </Wrapper.Label>
          <Wrapper.Input />
        </Wrapper.FormItem>
        <Wrapper.FormItem>
          <Wrapper.Label>
            Email Address <Wrapper.Required>*</Wrapper.Required>
          </Wrapper.Label>
          <Wrapper.Input />
        </Wrapper.FormItem>
        <Wrapper.FormItem>
          <Wrapper.Label>
            Phone Number <Wrapper.Required>*</Wrapper.Required>
          </Wrapper.Label>
          <Wrapper.Input />
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
