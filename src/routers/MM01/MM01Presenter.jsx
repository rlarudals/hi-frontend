import React from "react";
import styled from "styled-components";
import ph from "../../img/physicalhealth.png";

const MM01Area = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`;

const TitleBox = styled.div`
  width: 200px;
  height: 50px;

  margin-left: 10px;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 20px;

  display: flex;
  flex-direction: row;
`;

const TextBox = styled.div`
  width: 550px;
  height: 250px;

  margin-left: 50px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const Text = styled.p`
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const ImgBox = styled.img`
  width: 700px;
  height: 300px;

  margin-left: 50px;
`;

const AreaBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MM01Presenter = () => {
  return (
    <MM01Area>
      <AreaBox>
        <TitleBox>
          <Title>학생 신체건강 🏃🏻</Title>
        </TitleBox>
        <TextBox>
          <Text>
            1. 아침 일찍 기상하여 걸어서 또는 자전거를 타고 등하교하기.
          </Text>
          <Text>2. 수업 후 쉬는 시간이나 휴식시간에 스트레칭하기.</Text>
          <Text>3. 점심시간에 활동적인 놀이 참여하기.</Text>
          <Text>4. 방과 후 스포츠클럽 참여하기.</Text>
          <Text>
            5. 텔레비전 시청 또는 컴퓨터 이용 시 스트레칭을 하거나 선 자세로
            시청하기.
          </Text>
          <Text>
            6. 주말에 가족과 운동이나 야외 활동을 하며 여가시간 보내기.
          </Text>
          <Text>
            7. 심부름, 청소, 세차 등 가정에서의 생활활동에 자주 참여하기.
          </Text>
          <Text>
            8. 친구들과 만나는 장소를 실내보다는 야외로 정하여 가능한 몸을 많이
            움직이도록 노력하기.
          </Text>
          <Text>9. 운동이나 스포츠종목 중 하나를 나만의 취미로 만들기.</Text>
          <Text>
            10. 신체활동 참여 계획을 세우고 일별, 주별 또는 월별로 계획에 대해
            평가해보기.
          </Text>
        </TextBox>
      </AreaBox>

      <ImgBox src={ph} />
    </MM01Area>
  );
};

export default MM01Presenter;
