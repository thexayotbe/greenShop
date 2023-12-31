import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 800px;
  display: flex;
  margin-top: 60px;
  gap: 30px;

  .activeSection {
    color: #46a358;
    border-left: 5px solid #46a358;
  }
`;
Wrapper.Menu = styled.div`
  width: 310px;
  height: 320px;
  display: flex;
  flex-direction: column;
`;
Wrapper.MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 35px;
  border-bottom: 1px solid #46a358;
`;
Wrapper.MenuItem = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  padding-left: 22px;
  gap: 15px;
  color: #727272;
  cursor: pointer;
  border-left: 5px solid transparent;
  transition: ease-out 0.2s;
  :hover {
    color: #46a358;
    border-left: 5px solid #46a358;
  }
`;
Wrapper.ItemIcon = styled.img``;
Wrapper.ItemText = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 45px;
`;
Wrapper.LogOutBtn = styled.button`
  cursor: pointer;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: transparent;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  color: #727272;
  gap: 10px;
  padding-left: 22px;
`;
Wrapper.Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #3d3d3d;
  margin-bottom: 15px;
`;
Wrapper.Sections = styled.div``;

export { Wrapper };
