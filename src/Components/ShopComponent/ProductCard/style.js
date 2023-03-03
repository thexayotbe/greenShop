import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 590px;
  gap: 53px;
  .activeSize {
    color: #46a358;
    border: 2px solid #46a358;
  }
`;
Wrapper.ImgSection = styled.div`
  display: flex;
  gap: 20px;
  .active {
    border: 1px solid #46a358;
  }
`;
Wrapper.Views = styled.div`
  width: 110px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
Wrapper.ViewImg = styled.img`
  width: 100px;
  height: 100px;
  transition: ease-in-out 0.3s;
  background-color: #fbfbfb;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;
Wrapper.ProductImgSection = styled.div`
  width: 444px;
  height: 444px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fbfbfb;
`;
Wrapper.ProductImg = styled.img`
  width: 404px;
  height: 404px;
`;
Wrapper.InfoSection = styled.div`
  width: 50%;
`;
Wrapper.Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.Info = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #46a35880;
  margin-top: 10px;
`;
Wrapper.Price = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 16px;
  color: #46a358;
`;
Wrapper.Rate = styled.div`
  display: flex;
  gap: 12px;
`;
Wrapper.Stars = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
Wrapper.Star = styled.img``;
Wrapper.ReviewCount = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.Order = styled.div`
  padding-top: 15px;
`;
Wrapper.ShortDecs = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #727272;
  margin-top: 10px;
  width: 553px;
  margin-bottom: 24px;
`;
Wrapper.SizeSection = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 17px;
`;
Wrapper.Size = styled.div`
  width: 28px;
  height: 28px;
  left: 747px;
  top: 397px;
  border: 1px solid #727272;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #727272;
  cursor: pointer;
`;

Wrapper.Buttons = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 26px;
`;
Wrapper.CountSection = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;
  margin-right: 26px;
`;
Wrapper.Count = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #3d3d3d;
  width: 15px;
`;
Wrapper.CountChangeBtn = styled.button`
  width: 33px;
  height: 38px;
  border: none;
  background: linear-gradient(180deg, #46a358 0%, rgba(70, 163, 88, 0.8) 100%);
  border-radius: 31px;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 16px;
  color: #ffffff;
`;
Wrapper.ActionButton = styled.button`
  cursor: pointer;
  width: 130px;
  height: 40px;
  background: ${({ cardBtn }) => (cardBtn ? "transparent" : "#46a358")};
  border-radius: 6px;
  border: ${({ cardBtn }) => (cardBtn ? " 1px solid #46a358" : "none")};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  color: ${({ cardBtn }) => (cardBtn ? "#46a358" : "#fff")};
  margin-right: 10px;
  transition: ease-in 0.4s;
  :hover {
    color: ${({ cardBtn }) => (!cardBtn ? "#46a358" : "#fff")};
    border: ${({ cardBtn }) => (!cardBtn ? " 1px solid #46a358" : "none")};
    background: ${({ cardBtn }) => (!cardBtn ? "transparent" : "#46a358")};
  }
`;
Wrapper.Like = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border: 1px solid #46a358;
  border-radius: 6px;
  background-color: transparent;
  font-size: 25px;
  color: #46a358;
  display: flex;
  align-items: center;
  justify-content: center;
`;
Wrapper.ExtraInfo = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  gap: 5px;
  margin-bottom: 10px;
`;
Wrapper.ExtraInfoTitle = styled.h3`
  color: #a5a5a5;
  font-weight: 300;
  font-size: 15px;
`;
Wrapper.ExtraInfoText = styled.p`
  color: #727272;
`;

export { Wrapper };
