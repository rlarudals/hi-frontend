import React from "react";
import styled from "styled-components";
import { Wrapper } from "../../components/commonComponent";
import recomkcala from "../../img/recomkcala.png";
import recomkcalb from "../../img/recomkcalb.png";
import recomkcalc from "../../img/recomkcalc.png";

const InnerWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; // width가 꽉 차면 자동으로 내려주는 애
`;

const SpanText = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #83b331;
  font-family: fantasy;

  text-shadow: 2px 2px 0px #a7e074, 5px 5px 0px #c0ec83, 8px 8px 0px #e3f2fd;
`;

const ImageBox = styled.img`
  width: 350px;
  height: 400px;
  border-radius: 10px;
`;

const MM16Presenter = () => {
  return (
    <Wrapper>
      <SpanText>권장 칼로리 (Kcal)</SpanText>
      <InnerWrapper>
        <ImageBox src={recomkcala} width="300px" height="200px" />
        <ImageBox src={recomkcalb} width="300px" height="200px" />
        <ImageBox src={recomkcalc} width="300px" height="200px" />
      </InnerWrapper>
    </Wrapper>
  );
};

export default MM16Presenter;
