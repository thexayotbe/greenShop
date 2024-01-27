import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  margin: 12px auto;
  .pagination {
    background-color: red;
  }
  @media (max-width: 767px) {
    height: 350px;
  }
`;
Wrapper.TextSide = styled.div`
  flex: 1;
  padding: 68px 40px;
  @media (max-width: 1024px) and (min-width: 767px) {
    font-size: 25px;
    line-height: 30px;
  }
  @media (max-width: 767px) {
    padding: 16px;
  }
`;
Wrapper.ImgSide = styled.div`
  flex: 1;
`;
Wrapper.Img = styled.img`
  @media (max-width: 1024px) and (min-width: 767px) {
    width: 100%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;
Wrapper.Title = styled.h3`
  font-style: normal;
  font-weight: 900;
  font-size: 70px;
  line-height: 70px;
  margin: 7px 0;
  text-transform: uppercase;
  color: #3d3d3d;
  @media (max-width: 1024px) and (min-width: 767px) {
    font-size: 25px;
    line-height: 30px;
  }
  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 20px;
  }
`;
Wrapper.Span = styled.span`
  color: #46a358;
`;
Wrapper.Description = styled.div`
  font-style: normal;
  font-weight: ${({ isTop }) => (isTop ? "500" : "400")};
  font-size: 14px;
  line-height: 24px;
  color: ${({ isTop }) => (isTop ? "#3D3D3D" : "#727272")};
  margin-bottom: ${({ isTop }) => (isTop ? "" : "44px")};
  @media (max-width: 1024px) and (min-width: 767px) {
    font-size: 12px;
    line-height: 20px;
  }
  @media (max-width: 767px) {
    font-size: 9px;
    line-height: 15px;
    margin-bottom: 15px;
  }
`;

export { Wrapper };
