import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 94px;
  display: flex;
  width: 100%;
  @media (max-width: 968px) and (min-width: 768px) {
    gap: 20px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export { Wrapper };
