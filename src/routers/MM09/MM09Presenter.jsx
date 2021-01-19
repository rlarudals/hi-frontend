import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const MainWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
  margin: ${(props) => props.margin || ``};
  padding: ${(props) => props.padding || ``};

  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.ju || `center`};
`;

const SpanWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
  margin: 50px 50px 100px 50px;
  padding: ${(props) => props.padding || ``};

  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px #badc58 solid;
`;

const ImgWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
  margin: 50px 50px 100px 50px;
  padding: ${(props) => props.padding || ``};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
  margin: 50px 50px 100px 50px;
  padding: ${(props) => props.padding || ``};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SpanTextMain = styled.span`
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 8px 6px #badc58, 0px -3px 20px #6ab04c;
  margin-bottom: 20px;
`;

const SpanText = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 8px 6px #badc58, 0px -3px 20px #6ab04c;
`;

const ImageBox = styled.img`
  width: 500px;
  height: 400px;
  border-radius: 10px;
`;

const MM09Presenter = () => {
  return (
    <MainWrapper>
      <SpanWrapper>
        <Fade>
          <SpanTextMain>💊 의약품이란 무엇인가요?</SpanTextMain>
        </Fade>
      </SpanWrapper>

      <ImgWrapper>
        <Fade>
          <ImageBox
            src={`https://www.econovill.com/news/photo/201705/314822_154655_4957.png`}
          />
        </Fade>
      </ImgWrapper>

      <TextWrapper>
        <Fade>
          <SpanText>의약품이란,</SpanText>
          <SpanText>
            질병의 진단과 치료, 경감, 예방을 목적으로 사용되거나 인체의 구조와
            기능에 약리적인 영향을 주는 물질을 말합니다.
          </SpanText>
          <SpanText>
            의약품은 올바르게 사용한다면 최상의 효과를 누릴 수 있지만, 잘못
            사용한다면 독이 될 수도 있으므로,
          </SpanText>
          <SpanText>
            환자 개개인의 질환에 맞게 정해진 용량·용법으로 필요한 기간만큼
            올바르게 사용하는 것이 중요합니다.
          </SpanText>
        </Fade>
      </TextWrapper>
    </MainWrapper>
  );
};

export default MM09Presenter;
