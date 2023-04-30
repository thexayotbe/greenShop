import styled from "styled-components";

const Wrapper = styled.div`
  width: 530px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
Wrapper.Header = styled.div`
  width: 100%;
  height: 156px;
  background: rgba(70, 163, 88, 0.06);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

Wrapper.HeaderIcon = styled.img``;
Wrapper.HeaderText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #727272;
`;
Wrapper.InfoSection = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  border-top: 2px solid rgba(70, 163, 88, 0.2);
  border-bottom: 2px solid rgba(70, 163, 88, 0.2);
`;
Wrapper.Info = styled.div`
  padding: 0 20px;
  border-left: ${({ noBorder }) =>
    !noBorder && "1px solid rgba(70, 163, 88, 0.2)"};
`;
Wrapper.InfoTitle = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #727272;
  margin-bottom: 3px;
`;
Wrapper.InfoText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 16px;
  color: #727272;
`;
Wrapper.Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-bottom: 11px;
  border-bottom: 1px solid rgba(70, 163, 88, 0.5);
`;
Wrapper.HeadItem = styled.div`
  margin-right: ${({ first }) => first && "200px"};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.Products = styled.div`
  padding: 14px;
`;
Wrapper.PriceSection = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-around;
  border-bottom: 1px solid rgba(70, 163, 88, 0.5);
`;
Wrapper.PriceItems = styled.div`
  width: 330px;
  display: flex;
  justify-content: space-between;
`;
Wrapper.TextInfo = styled.p`
  width: 483px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #727272;
  margin: 18px auto;
`;
Wrapper.Price = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  text-align: right;
  color: ${({ black }) => (black ? black : "#46a358")};
`;
export { Wrapper };
