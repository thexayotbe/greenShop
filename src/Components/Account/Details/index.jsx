import React, { useRef, useState } from "react";
import { Wrapper } from "./style";
import Button from "../../Generic/Button";
import foto from "../../../assets/icons/photo.svg";

const Details = () => {
  const [preview, setPreview] = useState(null);
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreview(reader.result);
      };
    }
  };

  const handleLabelClick = () => {
    inputRef.current.click();
  };
  return (
    <Wrapper>
      <Wrapper.Title>Personal Information</Wrapper.Title>
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
        <Wrapper.Item>
          <Wrapper.Label>
            Username
            <Wrapper.Require>*</Wrapper.Require>
          </Wrapper.Label>
          <Wrapper.Input />
        </Wrapper.Item>
        <Wrapper.Item>
          <Wrapper.Label>
            Photo
            <Wrapper.Require>*</Wrapper.Require>
          </Wrapper.Label>
          <Wrapper.FotoWr>
            <Wrapper.Foto
              width={50}
              height={50}
              src={preview ? preview : foto}
            />
            <Wrapper.FotoInput
              type="file"
              accept="image/*"
              onChange={handleInputChange}
              ref={inputRef}
            />

            <Wrapper.LabelImg onClick={handleLabelClick} preview={preview}>
              {preview ? "Change" : "Select"}
            </Wrapper.LabelImg>

            <Wrapper.BtnRemove onClick={() => setPreview(null)}>
              Remove
            </Wrapper.BtnRemove>
          </Wrapper.FotoWr>
        </Wrapper.Item>
      </Wrapper.Form>
      <Wrapper.Title>Password change</Wrapper.Title>
      <Wrapper.Form column>
        <Wrapper.Item>
          <Wrapper.Label>Current password</Wrapper.Label>
          <Wrapper.Password />
        </Wrapper.Item>
        <Wrapper.Item>
          <Wrapper.Label>New password</Wrapper.Label>
          <Wrapper.Password />
        </Wrapper.Item>
        <Wrapper.Item>
          <Wrapper.Label>Confirm new password</Wrapper.Label>
          <Wrapper.Password />
        </Wrapper.Item>
      </Wrapper.Form>
      <Button widthBtn={"131px"} heightBtn={"40px"}>
        Save Change
      </Button>
    </Wrapper>
  );
};

export default Details;
