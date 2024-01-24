import { Slider } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 46px;
  gap: 50px;
  .selected {
    color: #46a358;
    font-weight: bold;
  }
  .activeFamily {
    background-color: #46a358;
    padding-left: 20px;
    color: #fff;
    border-radius: 0 15px 15px 0;
  }
  .ant-select {
    border: none;
  }
  .ant-select-selection-item {
    border: none;
  }
`;
Wrapper.FilterSide = styled.div`
  width: 310px;
  height: 830px;
  background-color: #fbfbfb;
  padding: 14px 24px 0 18px;
  @media (max-width: 968px) {
    display: ${({ responsible }) => (responsible ? "block" : "none")};
    height: auto;
    width: auto;
  }
`;
Wrapper.FilterGroup = styled.div`
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  @media (max-width: 968px) {
    display: ${({ noRes }) => (noRes ? "none" : "flex")};
    width: 100%;
  }
`;
Wrapper.FilterTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #3d3d3d;
  padding-bottom: 10px;
  margin-left: -12px;
`;
Wrapper.FilterName = styled.div`
  padding-right: 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  color: #3d3d3d;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 5px;
  :hover {
    background-color: #46a358;
    padding-left: 20px;
    color: #fff;
    border-radius: 0 15px 15px 0;
  }
`;
Wrapper.Price = styled.h3`
  padding-right: 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  color: #3d3d3d;
  cursor: pointer;
  margin-top: 5px;
`;
Wrapper.TypeName = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 40px;
  border-bottom: ${({ isHeadSide }) =>
    isHeadSide ? "3px solid #46a358" : "3px solid transparent"};
  color: #3d3d3d;
  cursor: pointer;
  transition: all 0.3s;
`;
Wrapper.Slider = styled(Slider)`
  margin: 29px 0 21px 0;
  width: 200px;

  .ant-slider-track {
    border: 4px solid #46a358;
  }
  @media (max-width: 968px) {
    width: 100%;
  }
`;
Wrapper.NameAmount = styled.span``;
Wrapper.ProductsSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
`;
Wrapper.SaleBannerImg = styled.img`
  margin-left: -45px;
  margin-top: -35px;
  @media (max-width: 968px) {
    display: none;
  }
`;
Wrapper.ProductsSort = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
Wrapper.SortTypes = styled.span`
  display: flex;
  gap: 37px;
`;
Wrapper.SortDefaultType = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;
Wrapper.Icon = styled.img`
  display: none;
  cursor: pointer;
  @media (max-width: 968px) {
    display: block;
  }
`;
Wrapper.Label = styled.span``;
export { Wrapper };
