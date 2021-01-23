import React from "react";
import styled from "styled-components";
import mentalhealth from "../../img/mentalhealth.png";
import mentalhealtha from "../../img/mentalhealtha.png";
import mentalhealthb from "../../img/mentalhealthb.png";
import mentalhealthc from "../../img/mentalhealthc.png";
import Fade from "react-reveal/Fade";

const MM02Area = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.div`
  width: ${(props) => props.width || `45.7%`};
  height: ${(props) => props.height || `100%`};
  margin: 40px 30px 40px 40px;
  padding: 0px 0px 30px 0px;

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

const InnerWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap; // width가 꽉 차면 자동으로 내려주는 애
`;

const DetailWrapper = styled.div`
  width: 250px;
  height: 170px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin-top: 60px;
  margin-left: 80px;
  margin-bottom: 70px;
`;

const DetailTitle = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin-bottom: 50px;
  margin-top: 15px;
`;

const ImageBox = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 10px;

  transition: 0.5s;

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
    opacity: 0.8;
  }
`;

const EmjText = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin: 0px 0px 0px 30px;
`;

const MM02Presenter = () => {
  return (
    <MM02Area>
      <TitleBox>
        <Fade>
          <EmjText>🖥</EmjText>
          <Title>학생들의 정신건강을 위한 영상</Title>
        </Fade>
      </TitleBox>

      <InnerWrapper>
        <Fade left>
          <DetailWrapper>
            <a href="https://www.youtube.com/watch?v=ISzkvqwT5ho">
              <ImageBox src={mentalhealth} />
            </a>
            <DetailTitle>학생정서교육 (우울)</DetailTitle>
          </DetailWrapper>
        </Fade>
        <Fade left>
          <DetailWrapper>
            <a href="https://www.youtube.com/watch?v=AAXH9c9NQPA">
              <ImageBox src={mentalhealtha} />
            </a>
            <DetailTitle>학생정서교육 (분노조절)</DetailTitle>
          </DetailWrapper>
        </Fade>

        <Fade right>
          <DetailWrapper>
            <a href="https://www.youtube.com/watch?v=BxJfN_0kZK8">
              <ImageBox src={mentalhealthb} />
            </a>
            <DetailTitle>정신력 강화를 위한 9가지 두뇌 운동</DetailTitle>
          </DetailWrapper>
        </Fade>

        <Fade right>
          <DetailWrapper>
            <a href="https://www.youtube.com/watch?v=gLqg-wU_WQc">
              <ImageBox src={mentalhealthc} />
            </a>
            <DetailTitle>스트레스를 무시하면 안되는 6가지 이유</DetailTitle>
          </DetailWrapper>
        </Fade>
      </InnerWrapper>
    </MM02Area>
  );
};

export default MM02Presenter;
