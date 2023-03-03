import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 127px;
  display: flex;
  flex-direction: column;
`;
Wrapper.Title = styled.div`
  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 16px;
  color: #46a358;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(70, 163, 88, 0.5);
`;
Wrapper.Slider = styled.div`
  margin-top: 44px;
  .swiper-pagination-bullet {
    background-color: #fff;
    border: 2px solid #46a358;
    width: 12px;
    height: 12px;
    &-active {
      background-color: #46a358;
    }
  }
`;
export { Wrapper };
