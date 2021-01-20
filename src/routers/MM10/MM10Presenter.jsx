import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import MM10img from "../../img/MM10img.png";
import MM10img2 from "../../img/MM10img2.png";

const MainWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};

  padding: ${(props) => props.padding || ``};

  display: flex;
  flex-direction: column;

  justify-content: flex-start;
`;

const ColWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
  margin: 0px 0px 50px 80px;
  padding: ${(props) => props.padding || ``};

  display: flex;
  flex-direction: row;
`;

const SpanWrapper = styled.div`
  width: ${(props) => props.width || `48%`};
  height: ${(props) => props.height || `100%`};
  margin: 20px 40px 40px 40px;
  padding: 0px 0px 30px 0px;

  display: flex;
  flex-direction: row;

  border-bottom: 7px #83adbd solid;
`;

const EmjText = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin: 0px 0px 0px 30px;
`;

const SpanTextMain = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 8px 4px #60a3bc, 0px 3px 10px #0a3d62;
  margin: 0px 0px 0px 10px;
`;

const MM10Presenter = () => {
  return (
    <MainWrapper>
      <SpanWrapper>
        <Fade>
          <EmjText>💉</EmjText>
          <SpanTextMain>약물이상반응이란 무엇인가요?</SpanTextMain>
        </Fade>
      </SpanWrapper>
      <ColWrapper>
        <Fade left>
          <img src={MM10img} width="1250px" height="220px" />
        </Fade>
      </ColWrapper>
      <ColWrapper>
        <Fade right>
          <img src={MM10img2} width="1100px" height="200px" />
        </Fade>
      </ColWrapper>
    </MainWrapper>
  );
};

export default MM10Presenter;
