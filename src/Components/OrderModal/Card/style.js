import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
`;
Wrapper.Img = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 10px;
`;
Wrapper.Info = styled.div`
  width: 265px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;
Wrapper.Title = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.ID = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #a5a5a5;
`;
Wrapper.Span = styled.span`
  color: #727272;
`;
Wrapper.Count = styled.h3`
  width: 94px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: left;
  color: #727272;
`;
Wrapper.Total = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  text-align: right;
  color: #46a358;
`;

export { Wrapper };
