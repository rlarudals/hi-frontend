import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logoimg from "../../img/healthinfofontlogo.png";

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
  height: 70px;
  color: black;
  text-align: center;
`;

const Header = ({ history }) => {
  const moveLinkHandler = (link) => {
    history.push(link);
  };

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
          <NavLink
            to="/schoolh"
            style={{
              display: "table-cell",
              verticalAlign: "middle",
              height: "70px",
              color: "black",
              textAlign: "center",
              // borderRight: "2px solid #999",
            }}
          >
            학교 보건
          </NavLink>
          <NavLink
            to="/lovelife"
            style={{
              display: "table-cell",
              verticalAlign: "middle",
              height: "70px",
              color: "black",
              textAlign: "center",
              // borderRight: "2px solid #999",
            }}
          >
            생명 존중
          </NavLink>
          <NavLink
            to="/medicine"
            style={{
              display: "table-cell",
              verticalAlign: "middle",
              height: "70px",
              color: "black",
              textAlign: "center",
              // borderRight: "2px solid #999",
            }}
          >
            의약품
          </NavLink>
          <NavLink
            to="/pe"
            style={{
              display: "table-cell",
              verticalAlign: "middle",
              height: "70px",
              color: "black",
              textAlign: "center",
              // borderRight: "2px solid #999",
            }}
          >
            체육
          </NavLink>
          <NavLink
            to="/eatinglife"
            style={{
              display: "table-cell",
              verticalAlign: "middle",
              height: "70px",
              color: "black",
              textAlign: "center",
            }}
          >
            식생활
          </NavLink>
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
