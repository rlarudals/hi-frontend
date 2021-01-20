import React from "react";
import styled from "styled-components";
import mentalhealth from "../../img/mentalhealth.png";

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
  margin-left: 50px;
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
  width: 200px;
  height: 120px;

  border-radius: 10px;

  transition: 0.5s;
  margin-left: 40px;

  cursor: pointer;

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
    opacity: 0.8;
  }
`;

const MM06Presenter = () => {
  return (
    <InnerWrapper>
      <DetailWrapper>
        <ImageBox src={mentalhealth} />
        <a href=""></a>
        <DetailTitle>학생자살예방교육-고등용</DetailTitle>
      </DetailWrapper>

      <DetailWrapper>
        <ImageBox src={mentalhealth} />
        <a href="https://www.youtube.com/watch?v=e_XMM98oV80t=316s"></a>
        <DetailTitle>학생자살예방교육-중등용</DetailTitle>
      </DetailWrapper>

      <DetailWrapper>
        <ImageBox src={mentalhealth} />
        <a href="https://www.youtube.com/watch?v=dkcfXFx2U2I"></a>
        <DetailTitle>학생자살예방교육-중등용</DetailTitle>
      </DetailWrapper>

      <DetailWrapper>
        <ImageBox src={mentalhealth} />
        <a href="https://www.youtube.com/watch?v=0n7lJG2PSKQ"></a>
        <DetailTitle>생명존중과 자살예방</DetailTitle>
      </DetailWrapper>
    </InnerWrapper>
  );
};

export default MM06Presenter;
