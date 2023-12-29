import React from "react";
import { Wrapper } from "../Details/style";
import Button from "../../Generic/Button";
import { Checkbox } from "antd";

const Location = () => {
  return (
    <Wrapper>
      <Wrapper.Title>Billing Address</Wrapper.Title>
      <Wrapper.InfoText>
        The following addresses will be used on the checkout page by default.
      </Wrapper.InfoText>
      <Wrapper.Form>
        <Wrapper.Item>
          <Wrapper.Label>
            First Name
            <Wrapper.Require>*</Wrapper.Require>
          </Wrapper.Label>
          <Wrapper.Input />
        </Wrapper.Item>
        <Wrapper.Item>
          <Wrapper.Label>
            Last Name
            <Wrapper.Require>*</Wrapper.Require>
          </Wrapper.Label>
          <Wrapper.Input />
        </Wrapper.Item>
        <Wrapper.Item>
          <Wrapper.Label>
            Country / Region
            <Wrapper.Require>*</Wrapper.Require>
          </Wrapper.Label>
          <Wrapper.Input />
        </Wrapper.Item>
        <Wrapper.Item>
          <Wrapper.Label>
            Town / City
            <Wrapper.Require>*</Wrapper.Require>
          </Wrapper.Label>
          <Wrapper.Input />
        </Wrapper.Item>
        <Wrapper.Item>
          <Wrapper.Label>
            Street Address
            <Wrapper.Require>*</Wrapper.Require>
          </Wrapper.Label>
          <Wrapper.Input placeholder="House number and street name" />
        </Wrapper.Item>
        <Wrapper.Item>
          <Wrapper.Label>
            {" "}
            <Wrapper.Require></Wrapper.Require>
          </Wrapper.Label>
          <Wrapper.Input placeholder="Appartment, suite, unit, etc. (optional)" />
        </Wrapper.Item>
        <Wrapper.Item>
          <Wrapper.Label>
            State
            <Wrapper.Require>*</Wrapper.Require>
          </Wrapper.Label>
          <Wrapper.Input />
        </Wrapper.Item>
        <Wrapper.Item>
          <Wrapper.Label>
            Zip
            <Wrapper.Require>*</Wrapper.Require>
          </Wrapper.Label>
          <Wrapper.Input />
        </Wrapper.Item>
        <Wrapper.Item>
          <Wrapper.Label>
            Email address
            <Wrapper.Require>*</Wrapper.Require>
          </Wrapper.Label>
          <Wrapper.Input />
        </Wrapper.Item>
        <Wrapper.Item>
          <Wrapper.Label>
            Phone Number
            <Wrapper.Require>*</Wrapper.Require>
          </Wrapper.Label>
          <Wrapper.SelectWr>
            <Wrapper.Select
              defaultValue={"+998"}
              options={[
                { label: "+998", value: "+998" },
                { label: "+1", value: "+1" },
                { label: "+7", value: "+7" },
                { label: "+44", value: "+44" },
                { label: "+996", value: "+996" },
                { label: "+38", value: "+38" },
                { label: "+22", value: "+22" },
              ]}
              s
            />
            <Wrapper.Input />
          </Wrapper.SelectWr>
        </Wrapper.Item>
      </Wrapper.Form>
      <Button widthBtn={"131px"} heightBtn={"40px"}>
        Save Change
      </Button>
    </Wrapper>
  );
};

export default Location;
