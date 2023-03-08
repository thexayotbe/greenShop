import styled from "styled-components";

const Wrapper = styled.div`
  width: 328px;
`;
Wrapper.Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #3d3d3d;
  padding-bottom: 11px;
  border-bottom: 1px solid #46a35880;
`;
Wrapper.InputSection = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 30px;
`;
Wrapper.Input = styled.input`
  height: 40px;
  width: 230px;
  border: 1px solid #46a358;
  border-radius: 5px 0 0 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  color: #a5a5a5;
  padding-left: 9px;
`;
Wrapper.InputBtn = styled.button`
  width: 102px;
  height: 40px;
  background: #46a358;
  border-radius: 0px 3px 3px 0px;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 16px;
  color: #ffffff;
  cursor: pointer;
`;
Wrapper.PriceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
Wrapper.Name = styled.h3`
  font-style: normal;
  /* identical to box height, or 133% */
  font-weight: ${({ total }) => (total ? "bolder" : "400")};
  font-size: 14px;
  line-height: 16px;
  margin: 14px 0;
  color: #3d3d3d;
`;
Wrapper.Price = styled.h3`
  font-style: normal;
  font-weight: ${({ discount }) => (discount ? "400" : "bolder")};
  font-size: 18px;
  line-height: 16px;
  text-align: right;
  color: ${({ total }) => (total ? "#46A358" : "#3d3d3d")};
`;
Wrapper.Button = styled.button`
  width: 332px;
  height: 40px;
  background: #46a358;
  border-radius: 3px;
  margin-top: 30px;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 16px;
  color: #ffffff;
`;
Wrapper.ContinueText = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #46a358;
  text-align: center;
  margin-top: 11px;
`;
Wrapper.ShippingLink = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  color: #46a358;
  margin-bottom: 26px;
`;
export { Wrapper };
