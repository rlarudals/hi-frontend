import React from "react";
import styled from "styled-components";
import logoimg from "../../img/healthinfofontlogo.png";
import { Wrapper } from "../../components/commonComponent";

const FooterWrapper = styled.div`
  height: 150px;

  background-color: ${(props) => props.theme.greyColor};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LogoBox = styled.div`
  width: 170px;
  height: 100px;

  display: flex;
  flex-direction: row;

  align-items: center;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.div`
  width: 300px;
  height: 160px;
`;

const FooterTxt = styled.p`
  font-size: 15px;
  color: #ececec;
  margin: 0 0 5px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Wrapper height={`100%`} width={`200px`}>
        <LogoBox>
          <img src={logoimg} width="200px" height="40px" />
        </LogoBox>
      </Wrapper>
      <Wrapper height={`100%`} width={`800px`} al={`flex-start`} ju={`center`}>
        <FooterTxt>Lorem ipsum dolor sit amet consectetur,</FooterTxt>
        <FooterTxt>
          adipisicing elit. Deleniti magnam eligendi saepe illo, id commodi
          earum impedit ipsa!
        </FooterTxt>
        <FooterTxt>
          Illum eaque consequuntur vero deserunt voluptates eveniet.
        </FooterTxt>
      </Wrapper>
    </FooterWrapper>
  );
};

export default Footer;
