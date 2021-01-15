import React from "react";
import styled from "styled-components";

const FooterArea = styled.footer`
  width: 100%;
  height: 500px;
  background-color: ${(props) => props.theme.subThemeColor};
  color: ${(props) => props.theme.blackColor};
`;

const FooterAreaContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.mainThemeColor};
  color: ${(props) => props.theme.blackColor};
  border-top: ${(props) => props.theme.border};

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
  height: 100px;

  align-items: center;
  justify-content: flex-start;
  transition: 0.5s;

  &:hover {
    font-weight: 700;
  }
`;

const Text = styled.div`
  margin-left: 15px;
`;

const Footer = () => {
  return (
    <FooterArea>
      <FooterAreaContent>
        <FooterWrapper width={`450px`}>
          <FooterWrapper width={`100%`} height={`200px`}>
            logo
          </FooterWrapper>
          <FooterWrapper>
            <TextBox>
              <Text width={`100%`}>
                여고 회사 (대표: 김경민,방효진,정예림) / 충청남도 공주시 금학동
              </Text>
            </TextBox>
          </FooterWrapper>
        </FooterWrapper>
      </FooterAreaContent>
    </FooterArea>
  );
};

export default Footer;
