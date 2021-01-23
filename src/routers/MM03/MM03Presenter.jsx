import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import accidentprevention from "../../img/accidentprevention.png";
import accidentpreventiona from "../../img/accidentpreventiona.png";
import accidentpreventionb from "../../img/accidentpreventionb.png";

const Wrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
`;

const TitleWrapper = styled.div`
  width: ${(props) => props.width || `20%`};
  height: ${(props) => props.height || `100%`};

  margin: 20px 0 0 50px;
  padding: 0px 0px 30px 0px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  border-bottom: 7px #83adbd solid;
`;

const Title = styled.span`
  font-size: 25px;
  color: #ffffff;
  margin-left: 15px;

  display: flex;
  flex-direction: row;
  text-shadow: 2px 8px 4px #60a3bc, 0px 3px 10px #0a3d62;
`;

const ImgBox = styled.img`
  width: 400px;
  height: 550px;

  margin: 40px 0 40px 60px;

  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
    transition: 0.6s;
  }
`;

const MM03Presenter = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Fade>
          <Title>학생 사고예방과 응급처치</Title>
        </Fade>
      </TitleWrapper>
      <ImgBox src={accidentprevention} />
      <ImgBox src={accidentpreventiona} />
      <ImgBox src={accidentpreventionb} />
    </Wrapper>
  );
};

export default MM03Presenter;
