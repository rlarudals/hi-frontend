import React from "react";
import styled from "styled-components";

const FooterArea = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.subThemeColor};
  color: ${(props) => props.theme.blackColor};
`;

const FooterAreaContent = styled.div`
  width: 100%;
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

  display: block;

  transition: 0.5s;

  &:hover {
    font-weight: 700;
  }
`;

const Text = styled.div`
  margin-left: 15px;
  font-size: 17px;
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
              <Text>(주)단순한주식회사(대표: 김경민,방효진,정예림)</Text>

              <Text>사업자 등록 번호:123-45-67890</Text>

              <Text>통신판매업신고번호 : 제 2020-충남공주-100</Text>
            </TextBox>
          </FooterWrapper>
        </FooterWrapper>
      </FooterAreaContent>
    </FooterArea>
  );
};

export default Footer;
