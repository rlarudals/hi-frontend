import React from "react";
import styled from "styled-components";
import recomkcala from "../../img/recomkcala.png";
import recomkcalb from "../../img/recomkcalb.png";
import recomkcalc from "../../img/recomkcalc.png";

const Wrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: 100%;

  display: flex;
  flex-direction: row;

  flex-wrap: wrap; // width가 꽉 차면 자동으로 내려주는 애
`;

const InnerWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: 100%;
  margin: 30px 0px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; // width가 꽉 차면 자동으로 내려주는 애
`;

const SpanText = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #3c6382;
  font-family: fantasy;

  text-shadow: 2px 3px 0px #82ccdd, 4px 5px 0px #60a3bc;
`;

const ImageBox = styled.img`
  width: 350px;
  height: 400px;
  box-shadow: 1px 1px 3px #808080;
`;

const PText = styled.p`
  margin-top: 10px;
  margin-left: 3px;
  font-size: 15px;
  font-weight: 500;
  color: #808080;
`;

const DetailWrapper = styled.div`
  height: 100%;
  margin: 0px 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  margin: 0px 60px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const MM16Presenter = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <SpanText>Recommended Kcal</SpanText>
      </TitleWrapper>
      <InnerWrapper>
        <DetailWrapper>
          <ImageBox src={recomkcala} />
          <PText>[ 성별, 연령 별 하루 권장 칼로리 섭취량 ]</PText>
        </DetailWrapper>
        <DetailWrapper>
          <ImageBox src={recomkcalb} />
          <PText>[ 음식별 1회 제공량 당 칼로리 ]</PText>
        </DetailWrapper>
        <DetailWrapper>
          <ImageBox src={recomkcalc} />
          <PText>[ 주요 운동 별 칼로리 소모량 ]</PText>
        </DetailWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default MM16Presenter;
