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
  padding: 25px;
`;

const FooterWrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height || `100%`};
`;

const TextBox = styled.div`
  width: 100%;
  height: 5px;
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
        <FooterWrapper>
          <FooterWrapper>
            <TextBox>
              <Text>여고 회사 (대표: 김경민,방효진,정예림)</Text>
            </TextBox>

            <TextBox>
              <Text>충청남도 공주시 금학동</Text>
            </TextBox>
          </FooterWrapper>
        </FooterWrapper>
      </FooterAreaContent>
    </FooterArea>
  );
};

export default Footer;
