import React from "react";
import styled from "styled-components";

const FooterArea = styled.footer`
  width: 100%;
  height: 500px;
  background-color: ${(props) => props.theme.subThemeColor};
  color: ${(props) => props.theme.blackColor};
`;

const FooterAreaTop = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.mainThemeColor};
  color: ${(props) => props.theme.blackColor};
`;

const FooterAreaContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.subThemeColor};
  color: ${(props) => props.theme.blackColor};
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

const FooterWrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height || `100%`};
`;

const TextBox = styled.div`
  width: 100%;
  height: 5px;
  margin: 10px;
  padding: 20px;

  align-items: center;
  justify-content: flex-start;
  transition: 0.4s;

  &:hover {
    font-weight: 700;
  }
`;

const Text = styled.div``;

const Footer = () => {
  return (
    <FooterArea>
      <FooterAreaTop>이용약관</FooterAreaTop>
      <FooterAreaContent>
        <FooterWrapper width={`450px`}>
          <FooterWrapper width={`100%`} height={`50%`}>
            <TextBox>
              <Text>공주 회사</Text>
            </TextBox>
          </FooterWrapper>
        </FooterWrapper>
      </FooterAreaContent>
    </FooterArea>
  );
};

export default Footer;
