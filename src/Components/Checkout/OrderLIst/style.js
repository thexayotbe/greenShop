import { Checkbox } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 405px;
`;
Wrapper.Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 16px;
  color: #3d3d3d;
  width: 100%;
  text-align: left;
`;
Wrapper.Head = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 11px;
  border-bottom: 1px solid rgba(70, 163, 88, 0.5);
`;
Wrapper.HeadItem = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.Coupon = styled.h3`
  display: flex;
  justify-content: end;
  gap: 10px;
  margin: ${({ green }) => !green && "17px 0"};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: ${({ green }) => (green ? "#46A358" : "#3d3d3d")};
`;
Wrapper.TotalSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: flex-end;
  float: right;
`;
Wrapper.TotalItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px 0;
  width: 100%;
  border-top: ${({ top }) => top && "2px solid #46A35880"};
  margin-bottom: ${({ top }) => top && "40px"};
`;
Wrapper.PriceText = styled.h3`
  font-style: normal;
  font-weight: ${({ bold }) => (bold ? "bolder" : "400")};
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.Shipping = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #46a358;
  float: right;
  margin-bottom: 17px;
`;

Wrapper.PaymentType = styled.div``;
Wrapper.CheckBox = styled(Checkbox)``;
export { Wrapper };
