import styled from "styled-components";

const Wrapper = styled.div`
  width: 257px;
  border-right: 2px solid rgba(70, 163, 88, 0.1);
  padding: 0 35px 0 0;
  margin-right: 25px;

  @media (max-width: 1024px) and (min-width: 768px) {
    width: 200px;
    border-right: ${({ nobr }) =>
      nobr ? "none" : "2px solid rgba(70, 163, 88, 0.1)"};
  }
  @media (max-width: 767px) {
    width: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
  }
`;
Wrapper.ImgSection = styled.div`
  position: relative;
  margin-bottom: 20px;
`;
Wrapper.Img = styled.img`
  position: absolute;
  left: 20px;
  top: 0;
`;
Wrapper.Shape = styled.img``;
Wrapper.Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #727272;
  margin-top: 9px;
  @media (max-width: 767px) {
    width: 60%;
    text-align: center;
  }
`;

export { Wrapper };
