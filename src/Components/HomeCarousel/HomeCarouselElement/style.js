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
`;
Wrapper.TextSide = styled.div`
  flex: 1;
  padding: 68px 40px;
`;
Wrapper.ImgSide = styled.div`
  flex: 1;
`;
Wrapper.Img = styled.img``;
Wrapper.Title = styled.h3`
  font-style: normal;
  font-weight: 900;
  font-size: 70px;
  line-height: 70px;
  margin: 7px 0;
  text-transform: uppercase;

  color: #3d3d3d;
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
`;

export { Wrapper };
