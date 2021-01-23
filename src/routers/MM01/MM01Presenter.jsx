import React from "react";
import styled from "styled-components";
import ph from "../../img/physicalhealth.png";
import Fade from "react-reveal/Fade";

const MM01Area = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
  margin: ${(props) => props.margin || ``};
  padding: ${(props) => props.padding || ``};

  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.ju || `center`};
`;

const TitleBox = styled.div`
  width: ${(props) => props.width || `47%`};
  height: ${(props) => props.height || `100%`};
  margin: 40px 30px 40px 40px;
  padding: 0px 0px 23px 0px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: 7px #83adbd solid;
`;

const Title = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 8px 4px #60a3bc, 0px 3px 10px #0a3d62;
  margin: 0px 0px 0px 10px;
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

const TextWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
  margin: 7px 0px 20px 20px;
  padding: ${(props) => props.padding || ``};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SpanText = styled.span`
  font-size: 19px;
  font-weight: bold;
  color: #808080;
`;

const EmjText = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin: 0px 0px 0px 30px;
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

const ImageBox = styled.img`
  width: 600px;
  height: 300px;
  border-radius: 10px;
  margin: 50px 0px 0px 20px;
`;

const MM01Presenter = () => {
  return (
    <MM01Area>
      <TitleBox>
        <Fade>
          <EmjText>🏃🏻‍♂️</EmjText>
          <Title>학생들의 신체건강을 위한 사소한 습관</Title>
        </Fade>
      </TitleBox>
      <RowWrapper>
        <TextWrapper>
          <Fade right>
            <TextWrapper>
              <SpanText>
                1. 아침 일찍 기상하여 걷거나 자전거를 타고 등 하교하기.
              </SpanText>
            </TextWrapper>
            <TextWrapper>
              <SpanText>
                2. 수업 후 쉬는 시간이나 휴식시간에 스트레칭하기.
              </SpanText>
            </TextWrapper>
            <TextWrapper>
              <SpanText>3. 점심시간에 활동적인 놀이 참여하기.</SpanText>
            </TextWrapper>
            <TextWrapper>
              <SpanText>4. 방과 후 스포츠 클럽 참여하기.</SpanText>
            </TextWrapper>
            <TextWrapper>
              <SpanText>
                5. 텔레비전 시청 또는 컴퓨터 이용 시 스트레칭을 하기.
              </SpanText>
            </TextWrapper>
            <TextWrapper>
              <SpanText>
                6. 주말에 가족과 운동이나 야외 활동을 하며 여가시간 보내기.
              </SpanText>
            </TextWrapper>
            <TextWrapper>
              <SpanText>
                7. 심부름, 청소, 세차 등 가정에서의 생활 활동에 자주 참여하기.
              </SpanText>
            </TextWrapper>
            <TextWrapper>
              <SpanText>
                8. 친구들과 만나는 장소를 실내보단 야외로 정하여 가능한 몸을
                많이 움직이도록 노력하기.
              </SpanText>
            </TextWrapper>
            <TextWrapper>
              <SpanText>
                9. 운동이나 스포츠종목 중 하나를 나만의 취미로 만들기.
              </SpanText>
            </TextWrapper>
            <TextWrapper>
              <SpanText>
                10. 신체활동 참여 계획을 세우고 일별, 주별 또는 월별로 계획에
                대해 평가해보기.
              </SpanText>
            </TextWrapper>
          </Fade>
        </TextWrapper>
        <ImgWrapper>
          <Fade left>
            <ImageBox src={ph} />
          </Fade>
        </ImgWrapper>
      </RowWrapper>
    </MM01Area>
  );
};

export default MM01Presenter;
