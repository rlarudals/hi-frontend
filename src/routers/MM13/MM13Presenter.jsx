import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import schoolsportsclub from "../../img/schoolsportsclub.png";
import schoolsportscluba from "../../img/schoolsportscluba.png";

const MM13Wrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
`;

const TitleWrapper = styled.div`
  width: ${(props) => props.width || `20%`};
  height: ${(props) => props.height || `100%`};

  padding: 0px 0px 30px 0px;

  margin: 20px 0 0 50px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  border-bottom: 7px #83adbd solid;
`;

const Title = styled.span`
  font-size: 25px;
  color: #ffffff;

  margin-left: 15px;
  margin-top: 10px;

  display: flex;
  flex-direction: row;
  text-shadow: 2px 8px 4px #60a3bc, 0px 3px 10px #0a3d62;
`;

const ImgBox = styled.img`
  width: 620px;
  height: 350px;

  margin: 40px 0 40px 60px;

  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
    transition: 0.6s;
  }
`;

const MM13Presenter = () => {
  return (
    <MM13Wrapper>
      <TitleWrapper>
        <Fade>
          <Title>⚽️ 학교스포츠클럽이란?</Title>
        </Fade>
      </TitleWrapper>

      <ImgBox src={schoolsportsclub} />
      <ImgBox src={schoolsportscluba} />
    </MM13Wrapper>
  );
};

export default MM13Presenter;
