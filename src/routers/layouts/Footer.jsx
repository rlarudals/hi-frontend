import React from "react";
import styled from "styled-components";

const FooterArea = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.subThemeColor};
  color: ${(props) => props.theme.blackColor};
`;

const FooterAreaContent = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.greyColor};
  color: ${(props) => props.theme.blackColor};

  display: flex;
  flex-direction: row;
  padding: 25px;
`;

const FooterWrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height || `100%`};
`;

const LogoBox = styled.div`
  width: 200px;
  height: 200px;

  color: ${(props) => props.theme.blackColor};
  background-color: ${(props) => props.theme.subThemeColor};

  margin-left: 60px;
  margin-top: 40px;
`;

const Footer = () => {
  return (
    <FooterArea>
      <FooterAreaContent>
        <FooterWrapper width={`300px`} height={`300px`}>
          <LogoBox></LogoBox>
        </FooterWrapper>
      </FooterAreaContent>
    </FooterArea>
  );
};

export default Footer;
