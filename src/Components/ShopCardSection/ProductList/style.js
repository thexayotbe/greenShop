import styled from "styled-components";

const Wrapper = styled.div``;
Wrapper.Table = styled.table`
  width: 100%;
  margin-top: 51px;
`;
Wrapper.Thead = styled.thead`
  height: 40px;
`;
Wrapper.Tbody = styled.tbody`
  border: 10px solid #46a358;
`;
Wrapper.Tr = styled.tr`
  background-color: #fbfbfb;
`;
Wrapper.Th = styled.th`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
  text-align: left;
  margin-top: 100px;
`;
Wrapper.Td = styled.td`
  height: 80px;
  padding: 5px 0;
  min-width: 15px;
  width: ${({ isTitle }) => (!isTitle ? "auto" : "350px")};
`;
Wrapper.InfoSection = styled.div`
  display: flex;
  gap: 5px;
`;
Wrapper.Img = styled.img`
  width: 70px;
  height: 70px;
`;
Wrapper.NameSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;
Wrapper.Name = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.ID = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #727272;
`;
Wrapper.Span = styled.span`
  color: #727272;
`;
Wrapper.Price = styled.h3`
  text-align: center;
  font-style: normal;
  font-weight: ${({ isTotal }) => (isTotal ? "bolder" : "500")};
  font-size: 16px;
  line-height: 16px;
  color: ${({ isTotal }) => (isTotal ? "#46A358" : "#727272")};
  width: ${({ isTotal }) => isTotal && "60px"};
  padding-right: ${({ isTotal }) => (!isTotal ? "50px" : "10px")};
`;
Wrapper.ProductAmountSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-right: 40px;
`;
Wrapper.Count = styled.h3`
  width: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 10px;
  color: #3d3d3d;
  text-align: center;
`;
Wrapper.Button = styled.button`
  width: 21.71px;
  height: 25px;
  left: 637px;
  top: 241px;
  background: linear-gradient(180deg, #46a358 0%, rgba(70, 163, 88, 0.8) 100%);
  border-radius: 31px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 16px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;
Wrapper.Icon = styled.img``;
export { Wrapper };
