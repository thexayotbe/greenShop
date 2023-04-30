import { Input } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  .ant-input-affix-wrapper:hover {
    border: 1px solid #46a358;
  }
`;
Wrapper.Title = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.Input = styled(Input)`
  width: 300px;
  height: 40px;
  border: 1px solid ${({ error }) => (error ? "red" : "#eaeaea")};
  border-radius: 5px;
  background-color: #fff;
  :hover {
    border: 1px solid #46a358;
  }
`;
Wrapper.InputPassword = styled(Input.Password)`
  width: 300px;
  height: 40px;
  border: 1px solid ${({ error }) => (error ? "red" : "#eaeaea")};
  border-radius: 5px;
  background-color: #fff;
  :hover {
    border: 1px solid #46a358;
  }
`;
Wrapper.Forgot = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #46a358;
  text-align: right;
`;
Wrapper.Button = styled.button`
  width: 300px;
  height: 45px;
  background: #46a358;
  border-radius: 5px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  border: none;
  margin-top: 30px;
  transition: ease-in-out 0.4s;
  :hover {
    border: 1px solid #46a358;
    background-color: #fff;
    color: #46a358;
  }
`;
export { Wrapper };
