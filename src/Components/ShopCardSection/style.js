import styled from "styled-components";

const Wrapper = styled.div``;
Wrapper.OrderSection = styled.div`
  width: 100%;
  display: flex;
  gap: 80px;
`;
Wrapper.Products = styled.div`
  width: 782px;
`;
Wrapper.CardTotals = styled.div`
  width: 328px;
`;
Wrapper.TextSide = styled.div``;
Wrapper.CardEmpty = styled.div`
  font-size: 20px;
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: #46a358;
  .icon {
    font-size: 40px;
  }
`;

export { Wrapper };
