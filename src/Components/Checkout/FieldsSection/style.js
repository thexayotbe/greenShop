import { Input, Radio } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 750px;
`;
Wrapper.Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.Form = styled.form`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  column-gap: 22px;
  row-gap: 30px;
  margin-top: 20px;
`;
Wrapper.FormItem = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
Wrapper.Label = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  color: #3d3d3d;
  display: flex;
  align-items: center;
  gap: 5px;
  height: 25px;
`;
Wrapper.Required = styled.span`
  color: #f03800;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
`;
Wrapper.Input = styled(Input)`
  border: 1px solid #eaeaea;
  border-radius: 3px;
  width: 350px;
  height: 40px;
  :hover {
    border: 1px solid #46a358;
  }
`;
Wrapper.AnotherShip = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  .ant-checkbox .ant-checkbox-input {
    border: 1px solid #46a358;
    background-color: red;
  }
`;
Wrapper.RadioSection = styled.div``;
Wrapper.RadioTitle = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.OrderNoteTitle = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  color: #3d3d3d;
  margin-top: 54px;
`;
Wrapper.OrderNote = styled.textarea`
  width: 350px;
  height: 152px;
  border: 1px solid #eaeaea;
  border-radius: 3px;
  margin-top: 10px;
`;

export { Wrapper };
