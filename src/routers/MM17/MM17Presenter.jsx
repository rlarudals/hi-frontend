import React from "react";
import styled from "styled-components";
import eatinginfoa from "../../img/eatinginfoa.png";
import eatinginfob from "../../img/eatinginfob.png";
import eatinginfoc from "../../img/eatinginfoc.png";
import eatinginfod from "../../img/eatinginfod.png";
import eatinginfoe from "../../img/eatinginfoe.png";
import eatinginfof from "../../img/eatinginfof.png";
import eatinginfog from "../../img/eatinginfog.png";
import eatinginfoh from "../../img/eatinginfoh.png";
import eatinginfoi from "../../img/eatinginfoi.png";
import eatinginfoj from "../../img/eatinginfoj.png";

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

  margin-left: 30px;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap; // width가 꽉 차면 자동으로 내려주는 애
`;

const ImageWrapper = styled.div`
  margin: 20px 60px 20px 20px;

  width: 170px;
  height: 80px;

  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: 0.3s;

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
    opacity: 0.8;
  }
`;

const SpanText = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #3c6382;
  font-family: fantasy;

  text-shadow: 2px 3px 0px #82ccdd, 4px 5px 0px #60a3bc;
`;

const ImageBox = styled.img`
  width: 150px;
  height: 50px;
`;

const TitleWrapper = styled.div`
  margin: 0px 60px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const MM17Presenter = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <SpanText>Promotion Video</SpanText>
      </TitleWrapper>
      <InnerWrapper>
        <ImageWrapper>
          <a href="https://www.dietitian.or.kr/index.do">
            <ImageBox src={eatinginfoa} />
          </a>
        </ImageWrapper>
        <ImageWrapper>
          <a href="https://www.mfds.go.kr/index.do">
            <ImageBox src={eatinginfob} />
          </a>
        </ImageWrapper>
        <ImageWrapper>
          <a href="http://www.kns.or.kr/">
            <ImageBox src={eatinginfoc} />
          </a>
        </ImageWrapper>
        <ImageWrapper>
          <a href="http://koscom.or.kr/">
            <ImageBox src={eatinginfod} />
          </a>
        </ImageWrapper>
        <ImageWrapper>
          <a href="https://www.kihasa.re.kr/">
            <ImageBox src={eatinginfoe} />
          </a>
        </ImageWrapper>
        <ImageWrapper>
          <a href="http://www.kosfost.or.kr/">
            <ImageBox src={eatinginfof} />
          </a>
        </ImageWrapper>
        <ImageWrapper>
          <a href="http://koscom.or.kr/">
            <ImageBox src={eatinginfog} />
          </a>
        </ImageWrapper>
        <ImageWrapper>
          <a href="http://www.amc.seoul.kr/asan/healthinfo/main/healthInfoMain.do">
            <ImageBox src={eatinginfoh} />
          </a>
        </ImageWrapper>
        <ImageWrapper>
          <a href="https://www.diabetes.or.kr/intro.html">
            <ImageBox src={eatinginfoi} />
          </a>
        </ImageWrapper>
        <ImageWrapper>
          <a href="http://www.ald.or.kr/">
            <ImageBox src={eatinginfoj} />
          </a>
        </ImageWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default MM17Presenter;
