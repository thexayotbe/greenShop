import { Button, Input } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 115px;
`;
Wrapper.FooterAbout = styled.div`
  display: flex;
  background-color: #fbfbfb;
  padding-top: 31px;
  @media (max-width: 1024px) and (min-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 30px;
  }
  @media (max-width: 767px) {
    flex-wrap: wrap;
    row-gap: 30px;
  }
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
  @media (max-width: 1024px) and (min-width: 768px) {
    width: 100%;
  }
  @media (max-width: 767px) {
    width: 90%;
    margin: 0 auto;
  }
`;
Wrapper.InputContainer = styled.div`
  @media (max-width: 767px) {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
`;
Wrapper.Input = styled(Input)`
  margin: 18px 0;
  width: 304px;
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06);
  border-radius: 6px 0px 0px 6px;
  @media (max-width: 1024px) and (min-width: 768px) {
    width: 80%;
  }
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
  @media (max-width: 1024px) and (min-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 20px;
    height: 100px;
    padding: 10px 0;
  }
  @media (max-width: 767px) {
    flex-wrap: wrap;
    height: auto;
    justify-content: center;
    gap: 30px;
    padding: 15px 0;
  }
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
  @media (max-width: 1024px) and (min-width: 768px) {
    flex-wrap: wrap;
    height: auto;
  }
  @media (max-width: 767px) {
    flex-wrap: wrap;
    height: auto;
    padding-right: 0px;
    padding-left: 0px;
  }
`;
Wrapper.FooterItem = styled.div`
  width: 200px;
  @media (max-width: 767px) {
    width: 100%;
    text-align: center;
  }
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
  @media (max-width: 767px) {
    justify-content: center;
  }
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
