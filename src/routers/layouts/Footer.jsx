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

  background-color: ${(props) => props.theme.subThemeColor};

  margin-left: 90px;
  margin-top: 50px;
`;

const FooterBox = styled.div`
  width: 700px;
  height: 100px;
  background-color: ${(props) => props.theme.mainThemeColor};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Footer = () => {
  return (
    <FooterArea>
      <FooterAreaContent>
        <FooterWrapper width={`300px`} height={`300px`}>
          <LogoBox />
          <FooterBox />
        </FooterWrapper>
      </FooterAreaContent>
    </FooterArea>
  );
};

export default Footer;
