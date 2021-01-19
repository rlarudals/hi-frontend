import React from "react";
import styled from "styled-components";
import { Wrapper, ImageBox } from "../../components/commonComponent";
import eatinglifea from "../../img/eatinglifea.png";
import eatinglifeb from "../../img/eatinglifeb.png";

const InnerWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  height: 200px;
  margin: 20px;
  transition: 0.3s;

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
    opacity: 0.8;
  }
`;

const SpanText = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #83b331;
  font-family: fantasy;

  text-shadow: 2px 2px 0px #a7e074, 5px 5px 0px #c0ec83, 8px 8px 0px #e3f2fd;
`;

const MM15Presenter = () => {
  return (
    <Wrapper>
      <SpanText>Promotion Video</SpanText>
      <InnerWrapper>
        <ImageWrapper>
          <a href="https://www.youtube.com/watch?v=WBtbMLk43a0">
            <img src={eatinglifea} width="300px" height="200px" />
          </a>
        </ImageWrapper>
        <ImageWrapper>
          <a href="https://www.youtube.com/watch?v=io6RQ-4JrtM">
            <img src={eatinglifeb} width="300px" height="200px" />
          </a>
        </ImageWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default MM15Presenter;
