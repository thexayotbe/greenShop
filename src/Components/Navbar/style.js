import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 80px;

  .icon {
    font-size: 25px;
    display: none;
    @media (max-width: 767px) {
      display: block;
      cursor: pointer;
    }
  }
  .ant-badge .ant-badge-count {
    background: #46a358;
  }
  @media (max-width: 1024px) and (min-width: 768px) {
    width: 100%;
  }
`;

Wrapper.Navbar = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid rgba(70, 163, 88, 0.5);
  @media (max-width: 767px) {
    width: 90%;
    margin: 0 auto;
  }
`;
Wrapper.Logo = styled.img`
  @media (max-width: 767px) {
    width: 150px;
  }
`;
Wrapper.Links = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
  list-style: none;
  height: 100%;
  .active {
    color: #3d3d3d;
    font-weight: 900;
    border-bottom: 3px solid #46a358;
    @media (max-width: 767px) {
      border-left: 3px solid #46a358;
      border-bottom: none;
      padding-left: 5px;
    }
  }
  @media (max-width: 1024px) and (min-width: 768px) {
    gap: 20px;
  }
  @media (max-width: 767px) {
    display: ${({ mobile }) => (mobile ? "flex" : "none")};
    flex-direction: column;
    gap: 10px;
    align-items: start;
  }
`;

Wrapper.Link = styled.li`
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #3d3d3d;
  height: 100%;
  display: flex;
  align-items: center;
  :hover {
    color: #46a358;
  }
  @media (max-width: 1024px) and (min-width: 768px) {
    font-size: 14px;
  }
`;
Wrapper.Btns = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 767px) {
    width: 150px;
  }
`;
Wrapper.Icon = styled.img`
  cursor: pointer;
`;
Wrapper.LoginBtn = styled.button`
  width: 100px;
  height: 35px;
  background: #46a358;
  border-radius: 6px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 767px) {
    display: ${({ mobile }) => (mobile ? "flex" : "none")};
    width: 50%;
    margin: 10px auto;
    gap: 5px;
  }
`;
Wrapper.ProfileBtn = styled.button`
  width: 34px;
  height: 34px;
  background: #46a358;
  border-radius: 50%;
  border: none;
  color: #fff;
  cursor: pointer;
`;
export { Wrapper };
