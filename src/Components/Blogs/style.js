import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 138px;
  height: 480px;
`;
Wrapper.Text = styled.div``;
Wrapper.Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 16px;
  text-align: center;
  color: #3d3d3d;
`;
Wrapper.Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #727272;
  margin-top: 18px;
`;
Wrapper.Blogs = styled.div`
  display: flex;
  margin-bottom: 35px;
  gap: 40px;
`;
export { Wrapper };
