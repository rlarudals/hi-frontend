import React from "react";
import styled from "styled-components";
import eatinglifea from "../../img/eatinglifea.png";
import eatinglifeb from "../../img/eatinglifeb.png";
import eatinglifec from "../../img/eatinglifec.png";
import eatinglifed from "../../img/eatinglifed.png";
import eatinglifee from "../../img/eatinglifee.png";
import eatinglifef from "../../img/eatinglifef.png";
import eatinglifeg from "../../img/eatinglifeg.png";
import eatinglifeh from "../../img/eatinglifeh.png";

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
  color: #3c6382;
  font-family: fantasy;

  text-shadow: 2px 3px 0px #82ccdd, 4px 5px 0px #60a3bc;
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

const TitleWrapper = styled.div`
  margin: 0px 60px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const MM15Presenter = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <SpanText>Promotion Video</SpanText>
      </TitleWrapper>
      <InnerWrapper>
        <ImageWrapper>
          <a href="https://www.youtube.com/watch?v=WBtbMLk43a0">
            <ImageBox src={eatinglifea} />
          </a>
        </ImageWrapper>
        <ImageWrapper>
          <a href="https://www.youtube.com/watch?v=io6RQ-4JrtM">
            <ImageBox src={eatinglifeb} />
          </a>
        </ImageWrapper>
        <ImageWrapper>
          <a href="https://www.youtube.com/watch?v=NUN7Sk-OUdM">
            <ImageBox src={eatinglifec} />
          </a>
        </ImageWrapper>
        <ImageWrapper>
          <a href="https://www.youtube.com/watch?v=GFJzE0Kk4Rk">
            <ImageBox src={eatinglifed} />
          </a>
        </ImageWrapper>
        <ImageWrapper>
          <a href="https://www.youtube.com/watch?v=3goYXaT24F0">
            <ImageBox src={eatinglifee} />
          </a>
        </ImageWrapper>
        <ImageWrapper>
          <a href="https://www.youtube.com/watch?v=B5xDw6nhY5U">
            <ImageBox src={eatinglifef} />
          </a>
        </ImageWrapper>
        <ImageWrapper>
          <a href="https://www.youtube.com/watch?v=qqel92gLPjg">
            <ImageBox src={eatinglifeg} />
          </a>
        </ImageWrapper>
        <ImageWrapper>
          <a href="https://www.youtube.com/watch?v=2cMl_kW4Zi8&t=5s">
            <ImageBox src={eatinglifeh} />
          </a>
        </ImageWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default MM15Presenter;
