import styled from "styled-components";

const Wrapper = styled.div`
  width: 586px;
  height: 250px;
  display: flex;
  align-items: center;
  @media (max-width: 1024px) and (min-width: 768px) {
    width: 100%;
  }
  @media (max-width: 767px) {
    width: 100%;
    justify-content: space-around;
    padding: 0 20px;
  }
`;
Wrapper.Img = styled.img`
  @media (max-width: 1024px) and (min-width: 768px) {
    width: 50%;
  }
  @media (max-width: 767px) {
    width: 40%;
  }
`;
Wrapper.TextSide = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
Wrapper.Title = styled.h3`
  width: 160px;
  font-weight: bolder;
  font-size: 18px;
  line-height: 24px;
  text-align: right;
  text-transform: uppercase;
  color: #3d3d3d;
  @media (max-width: 1024px) and (min-width: 768px) {
    width: auto;
  }
  @media (max-width: 767px) {
    font-size: 15px;
  }
`;
Wrapper.Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  color: #727272;
  margin-top: 18px;
  @media (max-width: 1024px) and (min-width: 768px) {
  }
  @media (max-width: 767px) {
    width: 80%;
    margin-bottom: 20px;
  }
`;
export { Wrapper };
