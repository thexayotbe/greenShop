import styled from "styled-components";

const Wrapper = styled.div`
  width: 586px;
  height: 250px;
  display: flex;
  align-items: center;
`;
Wrapper.Img = styled.img``;
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
`;
Wrapper.Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  color: #727272;
  margin-top: 18px;
`;
export { Wrapper };
