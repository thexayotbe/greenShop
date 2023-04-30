import { Checkbox } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 405px;
  .activeType {
    border: 1px solid #46a358;
  }
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
  margin: 17px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #3d3d3d;
`;
Wrapper.CouponSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #46a358;
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

Wrapper.PaymentType = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 11px;
  margin: 15px 0;
  gap: 10px;
  width: 321px;
  height: 45px;
  border: 1px solid #eaeaea;
  border-radius: 3px;
`;
Wrapper.CheckBox = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid #46a358;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.5px;
`;
Wrapper.CheckBoxInner = styled.div`
  width: 10px;
  height: 10px;
  background: #46a358;
  border-radius: 50%;
`;
Wrapper.Img = styled.img``;
export { Wrapper };
