import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 405px;
  height: 70px;
  align-items: center;
  /* gap: 22px; */
  justify-content: space-between;
`;
Wrapper.Img = styled.img`
  width: 70px;
  height: 70px;
`;
Wrapper.Text = styled.div`
  display: flex;
  flex-direction: column;
`;
Wrapper.ProductName = styled.h3`
  width: 170px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.ID = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #a5a5a5;
  margin-top: 6px;
`;
Wrapper.Span = styled.span`
  color: #727272;
`;
Wrapper.Amount = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #727272;
`;
Wrapper.Price = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  text-align: right;
  color: #46a358;
`;
export { Wrapper };
