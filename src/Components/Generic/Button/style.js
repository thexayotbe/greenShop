import styled from "styled-components";

const Wrapper = styled.button`
  width: ${({ widthBtn }) => (widthBtn ? widthBtn : "140px")};
  height: ${({ heightBtn }) => (heightBtn ? heightBtn : "35px")};
  margin: ${({ margin }) => margin};
  height: 40px;
  background: #46a358;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  border: none;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    color: #46a358;
    background-color: #ffffff;
    border: 1px solid #46a358;
  }
  @media (max-width: 1024px) and (min-width: 767px) {
    width: ${({ widthBtn }) => (widthBtn ? "120px" : "140px")};
    height: ${({ heightBtn }) => (heightBtn ? "30px" : "35px")};
    margin: ${({ margin }) => margin};
  }
  @media (max-width: 767px) {
    width: ${({ widthBtn }) => (widthBtn ? "100px" : "140px")};
    height: ${({ heightBtn }) => (heightBtn ? "25px" : "35px")};
    margin: 0 0;
    font-size: 9px;
  }
`;
export { Wrapper };
