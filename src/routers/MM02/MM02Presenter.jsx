import React from "react";
import styled from "styled-components";
import mentalhealth from "../../img/mentalhealth.png";
import mentalhealtha from "../../img/mentalhealtha.png";
import mentalhealthb from "../../img/mentalhealthb.png";
import mentalhealthc from "../../img/mentalhealthc.png";

const MM02Area = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.div`
  width: 300px;
  height: 50px;

  margin-left: 30px;
  margin-bottom: 35px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    font-weight: 600;
  }
`;

const Title = styled.span`
  font-size: 25px;

  display: flex;
  flex-direction: row;
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

  margin-top: 10px;
  margin-left: 80px;
  margin-bottom: 50px;
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

  transition: 0.3s;

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
    opacity: 0.8;
  }
`;

const MM02Presenter = () => {
  return (
    <MM02Area>
      <TitleBox>
        <Title>학생 정신건강 동영상 🖥</Title>
      </TitleBox>
      <InnerWrapper>
        <DetailWrapper>
          <a href="https://www.youtube.com/watch?v=ISzkvqwT5ho">
            <ImageBox src={mentalhealth} />
          </a>
          <DetailTitle>학생정서교육-우울</DetailTitle>
        </DetailWrapper>

        <DetailWrapper>
          <a href="https://www.youtube.com/watch?v=AAXH9c9NQPA">
            <ImageBox src={mentalhealtha} />
          </a>
          <DetailTitle>학생정서교육-분노조절</DetailTitle>
        </DetailWrapper>

        <DetailWrapper>
          <a href="https://www.youtube.com/watch?v=BxJfN_0kZK8">
            <ImageBox src={mentalhealthb} />
          </a>
          <DetailTitle>정신력 강화를 위한 9가지 두뇌 운동</DetailTitle>
        </DetailWrapper>

        <DetailWrapper>
          <a href="https://www.youtube.com/watch?v=gLqg-wU_WQc">
            <ImageBox src={mentalhealthc} />
          </a>
          <DetailTitle>스트레스를 무시하면 안되는 6가지 이유</DetailTitle>
        </DetailWrapper>
      </InnerWrapper>
    </MM02Area>
  );
};

export default MM02Presenter;
