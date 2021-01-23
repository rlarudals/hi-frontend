import React from "react";
import styled from "styled-components";
import logoimg from "../../img/healthinfofontlogo.png";
import { Wrapper } from "../../components/commonComponent";

const FooterWrapper = styled.div`
  height: 160px;
  margin-top: 40px;

  background-color: ${(props) => props.theme.greyColor};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

const FooterTxt = styled.p`
  font-size: 15px;
  color: #ececec;
  margin: 10px 0px 10px 100px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Wrapper height={`100%`} width={`200px`}>
        <LogoBox>
          <img src={logoimg} width="200px" height="40px" />
        </LogoBox>
      </Wrapper>
      <Wrapper height={`100%`} width={`1000px`} al={`center`} ju={`center`}>
        <FooterTxt>(주) 4leaf / 충남 공주시 우금티로 530</FooterTxt>
        <FooterTxt>
          사업자 등록번호 : 14523-94-03562 / 통신판매업신고번호 : 제
          2020-54-1002호 / 직업정보제공사업 신고번호 : H7305724692620
        </FooterTxt>
        <FooterTxt>
          대표이사 : 김경민, 방효진, 정예림 / 개인정보관리책임자 : 김경민,
          방효진, 정예림
        </FooterTxt>
        <FooterTxt>© 2021 health</FooterTxt>
      </Wrapper>
    </FooterWrapper>
  );
};

export default Footer;
