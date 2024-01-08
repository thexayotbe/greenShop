import styled from "styled-components";

const Wrapper = styled.div``;
Wrapper.ContainerProduct = styled.div`
  height: 1200px;
  @media (max-width: 968px) and (min-width: 768px) {
    height: auto;
  }
  @media (max-width: 767px) {
    font-size: 15px;
    height: 1850px;
  }
`;
Wrapper.Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 32px;
  gap: 20px;
  max-height: 1200px;
  height: auto;
`;
Wrapper.Pagination = styled.div`
  float: right;
  margin-top: 90px;
  margin-right: 30px;
  @media (max-width: 968px) and (min-width: 768px) {
    floar: center;
  }
  @media (max-width: 767px) {
    float: none;
    display: flex;
    justify-content: center;
  }
  .ant-pagination-next,
  .ant-pagination-prev {
    border: 1px solid #e5e5e5;
  }
  .ant-pagination-item {
    border: 1px solid #e5e5e5;
    border-radius: 4px;
  }
  .ant-pagination-item a {
    color: #3d3d3d;
  }

  .ant-pagination-item-active {
    background: #46a358;
    border-radius: 4px;
    color: #fff;
    :hover {
      border: none !important;
    }
  }
  .ant-pagination-item-active a {
    color: #fff;
    :hover {
      color: #fff;
    }
  }
`;

export { Wrapper };
