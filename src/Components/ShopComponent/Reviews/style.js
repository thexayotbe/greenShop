import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
Wrapper.Sections = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 18px;

  .active {
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 16px;
    color: #46a358;
  }
`;
Wrapper.SectionName = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 16px;
  color: #3d3d3d;
  padding-bottom: 12px;
  cursor: pointer;
`;
Wrapper.Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #3d3d3d;
  margin-top: 18px;
  margin-bottom: 10px;
`;
Wrapper.Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #727272;
  width: 1199px;
  margin-top: ${({ spaceTop }) => spaceTop && "20px"};
`;
export { Wrapper };
