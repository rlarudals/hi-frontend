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

const RowWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
  margin: 0px 30px 50px 30px;
  padding: ${(props) => props.padding || ``};

  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.ju || `center`};
`;

const SpanWrapper = styled.div`
  width: ${(props) => props.width || `90%`};
  height: ${(props) => props.height || `100%`};
  margin: 20px 30px 40px 40px;
  padding: ${(props) => props.padding || ``};

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: 7px #83adbd solid;
  padding: 0px 0px 30px 0px;
`;

const ImgWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
  margin: 20px 0px 50px 30px;
  padding: ${(props) => props.padding || ``};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
  margin: 20px 0px 20px 20px;
  padding: ${(props) => props.padding || ``};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SpanTextMain = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 8px 4px #60a3bc, 0px 3px 10px #0a3d62;
  margin: 0px 0px 0px 10px;
`;

const MecText = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin: 0px 0px 0px 30px;
`;

const SpanText = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #808080;
`;

const ImageBox = styled.img`
  width: 550px;
  height: 450px;
  border-radius: 10px;
  margin: 0px 0px 0px 40px;
`;

const MM09Presenter = () => {
  return (
    <MainWrapper>
      <SpanWrapper>
        <Fade>
          <MecText>💊</MecText>
          <SpanTextMain> 의약품이란 무엇인가요?</SpanTextMain>
        </Fade>
      </SpanWrapper>
      <RowWrapper>
        <ImgWrapper>
          <Fade left>
            <ImageBox
              src={`https://www.econovill.com/news/photo/201705/314822_154655_4957.png`}
            />
          </Fade>
        </ImgWrapper>

        <TextWrapper>
          <Fade right>
            <TextWrapper>
              <SpanText>의약품이란,</SpanText>
            </TextWrapper>
            <TextWrapper>
              <SpanText>
                질병의 진단과 치료, 경감, 예방을 목적으로 사용되거나
              </SpanText>
            </TextWrapper>
            <TextWrapper>
              <SpanText>
                인체의 구조와 기능에 약리적인 영향을 주는 물질을 말합니다.
              </SpanText>
            </TextWrapper>
            <TextWrapper>
              <SpanText>
                의약품은 올바르게 사용한다면 최상의 효과를 누릴 수 있지만,
              </SpanText>
            </TextWrapper>
            <TextWrapper>
              <SpanText>잘못 사용한다면 독이 될 수도 있으므로,</SpanText>
            </TextWrapper>
            <TextWrapper>
              <SpanText>
                환자 개개인의 질환에 맞게 정해진 용량·용법으로
              </SpanText>
            </TextWrapper>
            <TextWrapper>
              <SpanText>
                필요한 기간만큼 올바르게 사용하는 것이 중요합니다.
              </SpanText>
            </TextWrapper>
          </Fade>
        </TextWrapper>
      </RowWrapper>
    </MainWrapper>
  );
};

export default MM09Presenter;
