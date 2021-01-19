import React from "react";
import styled from "styled-components";
import logoimg from "../../img/healthinfofontlogo.png";

const FooterArea = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.subThemeColor};
  color: ${(props) => props.theme.blackColor};
`;

const FooterAreaContent = styled.div`
  background-color: ${(props) => props.theme.greyColor};
  color: ${(props) => props.theme.blackColor};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

const FooterWrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height || `100%`};
`;

const LogoBox = styled.div`
  width: 200px;
  height: 200px;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-around;

  margin-top: 40px;
`;

const FooterBox = styled.div`
  width: 500px;
  height: 230px;

  display: flex;
  flex-direction: row;

  margin-top: 40px;
`;

const TextBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  transition: 0.6s;

  &:hover {
    font-weight: 700;
  }
`;

const Text = styled.div`
  font-size: 14px;

  margin-bottom: 20px;

  cursor: pointer;
`;

const Footer = () => {
  return (
    <FooterArea>
      <FooterAreaContent>
        <FooterWrapper width={`300px`} height={`300px`}>
          <LogoBox>
            <img src={logoimg} width="190px" height="40px" />
          </LogoBox>
        </FooterWrapper>

        <FooterBox>
          <TextBox width={`300px`} height={`400px`}>
            <Text>(주)단순한주식회사</Text>
            <Text>사업자 등록번호 : 14523-94-03562</Text>
            <Text>통신판매업신고번호 : 제 2020-54-1002</Text>
            <Text>법인명 : (주)health</Text>
          </TextBox>
          <TextBox>
            <Text>대표이사 : 김경민,방효진,정예림</Text>
            <Text>개인정보관리책임자 : 김경민,방효진,정예림</Text>
            <Text>주소 : 충남 공주시 우금티로 530</Text>
            <Text>© 2021 health</Text>
          </TextBox>
        </FooterBox>
      </FooterAreaContent>
    </FooterArea>
  );
};

export default Footer;
