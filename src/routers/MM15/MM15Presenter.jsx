import React from "react";
import styled from "styled-components";
import { Wrapper } from "../../components/commonComponent";
import eatinglifea from "../../img/eatinglifea.png";
import eatinglifeb from "../../img/eatinglifeb.png";
import eatinglifec from "../../img/eatinglifec.png";
import eatinglifed from "../../img/eatinglifed.png";
import eatinglifee from "../../img/eatinglifee.png";
import eatinglifef from "../../img/eatinglifef.png";
import eatinglifeg from "../../img/eatinglifeg.png";
import eatinglifeh from "../../img/eatinglifeh.png";

const InnerWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; // width가 꽉 차면 자동으로 내려주는 애
`;

const ImageWrapper = styled.div`
  height: 200px;
  margin: 20px;
`;

const SpanText = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #83b331;
  font-family: fantasy;

  text-shadow: 2px 2px 0px #a7e074, 5px 5px 0px #c0ec83, 8px 8px 0px #e3f2fd;
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

const MM15Presenter = () => {
  return (
    <Wrapper>
      <SpanText>Promotion Video</SpanText>
      <InnerWrapper>
        <ImageWrapper>
          <a href="https://www.youtube.com/watch?v=WBtbMLk43a0">
            <ImageBox src={eatinglifea} width="300px" height="200px" />
          </a>
        </ImageWrapper>
        <ImageWrapper>
          <a href="https://www.youtube.com/watch?v=io6RQ-4JrtM">
            <ImageBox src={eatinglifeb} width="300px" height="200px" />
          </a>
        </ImageWrapper>
        <ImageWrapper>
          <a href="https://www.youtube.com/watch?v=NUN7Sk-OUdM">
            <ImageBox src={eatinglifec} width="300px" height="200px" />
          </a>
        </ImageWrapper>
        <ImageWrapper>
          <a href="https://www.youtube.com/watch?v=GFJzE0Kk4Rk">
            <ImageBox src={eatinglifed} width="300px" height="200px" />
          </a>
        </ImageWrapper>
        <ImageWrapper>
          <a href="https://www.youtube.com/watch?v=3goYXaT24F0">
            <ImageBox src={eatinglifee} width="300px" height="200px" />
          </a>
        </ImageWrapper>
        <ImageWrapper>
          <a href="https://www.youtube.com/watch?v=B5xDw6nhY5U">
            <ImageBox src={eatinglifef} width="300px" height="200px" />
          </a>
        </ImageWrapper>
        <ImageWrapper>
          <a href="https://www.youtube.com/watch?v=qqel92gLPjg">
            <ImageBox src={eatinglifeg} width="300px" height="200px" />
          </a>
        </ImageWrapper>{" "}
        <ImageWrapper>
          <a href="https://www.youtube.com/watch?v=2cMl_kW4Zi8&t=5s">
            <ImageBox src={eatinglifeh} width="300px" height="200px" />
          </a>
        </ImageWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default MM15Presenter;
