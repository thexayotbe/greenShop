import { Image, Input, Select } from "antd";
import styled from "styled-components";
import foto from "../../../assets/icons/photo.svg";
const Wrapper = styled.div`
  .ant-input-affix-wrapper:hover {
    border: 1px solid #46a358;
  }
  .ant-input:hover {
    border-color: #46a358;
    border-inline-end-width: 1px;
  }
  .ant-input:focus {
    border-color: #46a358;
    border-inline-end-width: 1px;
    box-shadow: none;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: none;
  }
`;
Wrapper.Title = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.InfoText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  color: #727272;
  margin: 10px 0;
`;

Wrapper.Form = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  width: 900px;
  gap: 28px;
`;
Wrapper.Item = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 417px;
`;
Wrapper.Label = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  color: #3d3d3d;
  height: 15px;
`;
Wrapper.Require = styled.span`
  font-size: 22px;
  color: #f03800;
`;
Wrapper.Input = styled(Input)`
  width: 100%;
  height: 40px;
  border: 1px solid #eaeaea;
  border-radius: 3px;
`;
Wrapper.Password = styled(Input.Password)`
  width: 417px;
  height: 40px;
  border: 1px solid #eaeaea;
  border-radius: 3px;
`;
Wrapper.SelectWr = styled.div`
  display: flex;
  align-items: center;
`;
Wrapper.Select = styled(Select)`
  width: 78px;
  height: 40px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  border: 1px solid #eaeaea;
`;
Wrapper.FotoWr = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;
`;
Wrapper.FotoInput = styled.input`
  display: none;
`;
Wrapper.Foto = styled(Image)`
  width: 50px;
  height: 50px;
  /* border-radius: 50%; */
  cursor: pointer;
`;
Wrapper.LabelImg = styled.label`
  display: block;
  width: 90px;
  height: 40px;
  border-radius: 3px;
  background-color: #46a358;
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  border: 1px solid transparent;
  transition: ease-in-out 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    border: 1px solid #46a358;
    background-color: #fff;
    color: #46a358;
  }
`;
Wrapper.BtnRemove = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 3px;
  background-color: transparent;
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #3d3d3d;
  border: 1px solid transparent;
  transition: ease-in-out 0.3s;
  :hover {
    border: 1px solid #46a358;
  }
`;
export { Wrapper };
