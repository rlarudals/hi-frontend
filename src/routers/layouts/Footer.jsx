import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.theme.mainThemeColor};
  color: ${(props) => props.theme.whiteColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  margin-top: 25px;
`;

const Footer = () => {
  return <FooterWrapper></FooterWrapper>;
};

export default Footer;
