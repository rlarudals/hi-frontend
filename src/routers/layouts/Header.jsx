import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import logoimg from "../../img/healthinfofontlogo.png";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  //background-color: ${(props) => props.theme.mainThemeColor};
  color: ${(props) => props.theme.whiteColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  margin-bottom: 40px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const InnerWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ActionSpan = styled.span`
  padding: 5px;
  margin: 5px;
  color: ${(props) => props.theme.whiteColor};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: ${(props) => props.theme.pointColor};
  }
`;

const ActionButton = styled.button`
  padding: 7px;
  margin: 8px;
  color: #30336b;
  background: none;
  background-color: #fff;
  border: none;
  border-radius: ${(props) => props.theme.radius};
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: #fff;
    background-color: #30336b;
  }
`;

const DisplayTable = styled.div`
  display: table;
  position: relative;
  width: 100%;
  height: 70px;
  table-layout: fixed;
`;

const DisplayTableCell = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  color: blue;
`;

const Header = ({ history }) => {
  const moveLinkHandler = (link) => {
    history.push(link);
  };

  const MenuButton = styled.button`
    color: black;
    border: none;
    background: none;
    font-weight: 600;

    &:hover {
      color: #bbbbbb;
      cursor: pointer;
      font-weight: 600;
    }
  `;

  return (
    <HeaderWrapper>
      <InnerWrapper width={`170px`}>
        <ActionSpan onClick={() => moveLinkHandler("/")}>
          <NavLink to="/">
            <img src={logoimg} width="170px" height="30px" />
          </NavLink>
        </ActionSpan>
      </InnerWrapper>

      <InnerWrapper width={`900px`}>
        <DisplayTable>
          <DisplayTableCell>
            <Menu menuButton={<MenuButton>학교보건</MenuButton>}>
              <MenuItem>
                <Link to="/schoolhone" style={{ color: "black" }}>
                  신체건강
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/schoolhtwo" style={{ color: "black" }}>
                  정신건강
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/schoolhthr" style={{ color: "black" }}>
                  사고예방과 응급처치
                </Link>
              </MenuItem>
            </Menu>
          </DisplayTableCell>
          <DisplayTableCell>
            <Menu menuButton={<MenuButton>생명</MenuButton>}>
              <MenuItem>
                <Link to="/lovelifeone" style={{ color: "black" }}>
                  자살예방
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/lovelifetwo" style={{ color: "black" }}>
                  생명공학자료실
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/lovelifethr" style={{ color: "black" }}>
                  생명존중
                </Link>
              </MenuItem>
            </Menu>
          </DisplayTableCell>

          <DisplayTableCell>
            <Menu menuButton={<MenuButton>의약품</MenuButton>}>
              <MenuItem>
                <Link to="/medicineone" style={{ color: "black" }}>
                  의약품이란?
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/medicinetwo" style={{ color: "black" }}>
                  약물이상반응
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/medicinethr" style={{ color: "black" }}>
                  의약품 안전정보
                </Link>
              </MenuItem>
            </Menu>
          </DisplayTableCell>

          <DisplayTableCell>
            <Menu menuButton={<MenuButton>체육</MenuButton>}>
              <MenuItem>
                <Link to="/peone" style={{ color: "black" }}>
                  건강체력증진
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/petwo" style={{ color: "black" }}>
                  학교스포츠클럽
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/pethr" style={{ color: "black" }}>
                  학교체육시설
                </Link>
              </MenuItem>
            </Menu>
          </DisplayTableCell>

          <DisplayTableCell>
            <Menu menuButton={<MenuButton>식생활</MenuButton>}>
              <MenuItem>
                <Link to="/eatinglifeone" style={{ color: "black" }}>
                  건강한 밥상 홍보
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/eatinglifetwo" style={{ color: "black" }}>
                  권장 칼로리
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/eatinglifethr" style={{ color: "black" }}>
                  식생활 정보 사이트
                </Link>
              </MenuItem>
            </Menu>
          </DisplayTableCell>
        </DisplayTable>
      </InnerWrapper>
      <InnerWrapper width={`200px`}>
        <ActionButton onClick={() => moveLinkHandler("/signIn")}>
          SING IN
        </ActionButton>
        <ActionButton onClick={() => moveLinkHandler("/signUp")}>
          SING UP
        </ActionButton>
      </InnerWrapper>
    </HeaderWrapper>
  );
};

export default Header;
