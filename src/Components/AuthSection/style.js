import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(183, 183, 183, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
`;
Wrapper.Modal = styled.div`
  width: 500px;
  min-height: 556px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 10px solid #46a358;
  position: relative;
`;
Wrapper.Close = styled.img`
  position: absolute;
  right: 13px;
  top: 13px;
  cursor: pointer;
`;
Wrapper.Title = styled.div`
  display: flex;
  height: 130px;
  align-items: center;
  justify-content: center;
  gap: 15px;
  .activeSection {
    color: #46a358;
  }
`;
Wrapper.SectionName = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 16px;
  color: #3d3d3d;
  cursor: pointer;
`;
Wrapper.Divider = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #3d3d3d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 36px 0 27px 0;
`;
Wrapper.Line = styled.div`
  width: 90px;
  height: 1px;
  background-color: #eaeaea;
`;
Wrapper.SocialAuth = styled.div`
  width: 300px;
  height: 40px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: #727272;
  gap: 10px;
  margin-bottom: 15px;
`;
Wrapper.SocialIcon = styled.img``;
export { Wrapper };
