import styled from "styled-components";

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
const LocationName = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
  display: flex;
  margin: 36px 0;
`;
LocationName.Home = styled.div`
  font-weight: bold;
`;

export { Container, LocationName };
