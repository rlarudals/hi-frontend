import React from "react";
import { Wrapper, ImageBox } from "../../components/commonComponent";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Carousel from "react-elastic-carousel";

const ViewText = styled.div`
  margin: 5px;
  font-size: ${(props) => props.size};
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;

const FileLabel = styled.label`
  width: 120px;
  height: 25px;
  line-height: 25px;
  background-color: ${(props) => props.theme.checkColor};
  color: #fff;
  box-shadow: ${(props) => props.theme.boxShadow};
  margin: 5px;
  border-radius: ${(props) => props.theme.radius};
  text-align: center;
  cursor: pointer;
`;

const MM00Presenter = () => {
  return (
    <Wrapper>
      <Wrapper hidden={`400px`} padding={`25px`} dr={`row`}>
        <Fade left>
          <ImageBox></ImageBox>
        </Fade>
        <Fade right>
          <Wrapper>
            <ViewText size={`20px`} isTitle={true}>
              Text 1
            </ViewText>
            <ViewText size={`15px`} isTitle={true}>
              Text 2
            </ViewText>
            <ViewText size={`13px`} isTitle={true}>
              Text 3
            </ViewText>
          </Wrapper>
        </Fade>
      </Wrapper>
    </Wrapper>
  );
};

export default MM00Presenter;
