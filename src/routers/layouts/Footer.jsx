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

  display: flex;
  flex-direction: row;

  margin-left: 240px;
  margin-top: 45px;
`;

const FooterBox = styled.div`
  width: 400px;
  height: 220px;

  background-color: ${(props) => props.theme.mainThemeColor};

  display: flex;
  flex-direction: row;

  margin-left: 200px;
  margin-top: 45px;
`;

const TextBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  transition: 0.5s;

  padding: 10px;

  &:hover {
    font-weight: 700;
  }
`;

const Text = styled.div`
  font-size: 13px;

  margin-bottom: 13px;

  cursor: pointer;
`;

const Footer = () => {
  return (
    <FooterArea>
      <FooterAreaContent>
        <FooterWrapper width={`300px`} height={`300px`}>
          <LogoBox>LOGO</LogoBox>
        </FooterWrapper>
        <FooterWrapper>
          <FooterBox>
            <TextBox width={`100%`}>
              <Text>(주)단순한주식회사</Text>
              <Text>사업자 등록번호 : 128-394-29342</Text>
              <Text>통신판매업신고번호 : 제 2020-충남공주-1002</Text>
              <Text>법인명 : (주)health</Text>
              <Text>대표이사 : 김경민,방효진,정예림</Text>
              <Text>개인정보관리책임자 : 김경민,방효진,정예림</Text>
              <Text>주소 : 충남 공주시 우금티로 531</Text>
              <Text>© 2021 health</Text>
            </TextBox>
          </FooterBox>
        </FooterWrapper>
      </FooterAreaContent>
    </FooterArea>
  );
};

export default Footer;
