import styled from "styled-components";

const Wrapper = styled.div`
  width: 268px;
  height: 167px;
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`;
Wrapper.Img = styled.img``;
Wrapper.Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 9px;
  gap: 4px;
`;
Wrapper.Info = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #46a358;
`;
Wrapper.Title = styled.h3`
  width: 202px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #3d3d3d;
`;
Wrapper.Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #727272;
`;
Wrapper.Button = styled.button`
  margin-top: 9px;
  border: none;
  background-color: transparent;
  text-align: left;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #3d3d3d;
  transition: ease-in 0.5s;
  :hover {
    color: #46a358;
  }
`;
export { Wrapper };
