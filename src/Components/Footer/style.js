import { Button, Input } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 115px;
`;
Wrapper.FooterAbout = styled.div`
  display: flex;
  background-color: #fbfbfb;
  padding-top: 31px;
`;
Wrapper.Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #727272;
`;
Wrapper.JoinNews = styled.div`
  width: 420px;
`;
Wrapper.InputContainer = styled.div``;
Wrapper.Input = styled(Input)`
  margin: 18px 0;
  width: 304px;
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06);
  border-radius: 6px 0px 0px 6px; ;
`;
Wrapper.Button = styled.button`
  width: 85px;
  height: 40px;
  background: #46a358;
  border-radius: 0px 6px 6px 0px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #ffffff;
  border: 1px solid #46a358;
  transition: 0.4s;
  :hover {
    color: #46a358;
    border: 1 px solid #46a358;
    background-color: #ffffff;
  }
`;
Wrapper.FooterContact = styled.div`
  width: 100%;
  height: 88px;
  background-color: #46a3581a;
  display: flex;
  align-items: center;
  padding-left: 23px;
  column-gap: 60px;
  margin-top: 32px;
`;
Wrapper.ContactItem = styled.div`
  display: flex;
  width: 206px;
  gap: 12px;
`;
Wrapper.ContactImg = styled.img``;
Wrapper.ContactText = styled.h3`
  width: 176px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #3d3d3d;
`;
Wrapper.Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 236px;
  background-color: #fbfbfb;
  padding-right: 130px;
  padding-left: 23px;
`;
Wrapper.FooterItem = styled.div`
  width: 200px;
`;
Wrapper.FooterTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #3d3d3d;
  margin-top: 32px;
  margin-bottom: ${({ mb }) => mb};
`;
Wrapper.Ul = styled.ul`
  list-style: none;
  margin-top: 10px;
`;
Wrapper.Li = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  color: #3d3d3d;
`;
Wrapper.Icons = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
`;
Wrapper.IconImg = styled.img`
  width: 30px;
  height: 30px;
  padding: 5px;
  border: 1px solid rgba(70, 163, 88, 0.2);
  border-radius: 4px;
`;
Wrapper.Rights = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-top: 1px solid rgba(70, 163, 88, 0.2);
`;
Wrapper.RightsText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  color: #3d3d3d;
`;
export { Wrapper };
