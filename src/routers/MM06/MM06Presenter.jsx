import React from "react";
import styled from "styled-components";
import suicideprevention from "../../img/suicideprevention.png";
import suicidepreventiona from "../../img/suicidepreventiona.png";
import suicidepreventionb from "../../img/suicidepreventionb.png";
import suicidepreventionc from "../../img/suicidepreventionc.png";

const MM06Area = styled.div`
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

  margin-top: 40px;
  margin-left: 90px;
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

  transition: 0.5s;

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
    opacity: 0.8;
  }
`;

const MM06Presenter = () => {
  return (
    <MM06Area>
      <TitleBox>
        <Title>학생 자살예방교육 동영상 🖥</Title>
      </TitleBox>
      <InnerWrapper>
        <DetailWrapper>
          <a href="https://www.youtube.com/watch?v=YIQZxvCA1q4">
            <ImageBox src={suicideprevention} />
          </a>
          <DetailTitle>학생 자살예방교육-고등용</DetailTitle>
        </DetailWrapper>

        <DetailWrapper>
          <a href="https://www.youtube.com/watch?v=e_XMM98oV80t=316s">
            <ImageBox src={suicidepreventiona} />
          </a>
          <DetailTitle>학생 자살예방교육 중등용-변성기</DetailTitle>
        </DetailWrapper>

        <DetailWrapper>
          <a href="https://www.youtube.com/watch?v=dkcfXFx2U2I">
            <ImageBox src={suicidepreventionb} />
          </a>
          <DetailTitle>중등 자살예방교육 영상</DetailTitle>
        </DetailWrapper>

        <DetailWrapper>
          <a href="https://www.youtube.com/watch?v=0n7lJG2PSKQ">
            <ImageBox src={suicidepreventionc} />
          </a>
          <DetailTitle>생명존중과 자살예방 영상</DetailTitle>
        </DetailWrapper>
      </InnerWrapper>
    </MM06Area>
  );
};

export default MM06Presenter;
