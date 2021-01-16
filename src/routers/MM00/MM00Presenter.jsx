import React from "react";
import { Wrapper, ImageBox } from "../../components/commonComponent";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const ViewText = styled.div`
  margin: 6px;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => (props.isTitle ? props.theme.blackColor : ``)};
  color: ${(props) => (props.isAuthor ? props.theme.whiteColor : ``)};
  color: ${(props) => (props.isDesc ? props.theme.greyColor : ``)};
`;

const WrapWrapper = styled(Wrapper)`
  width: 1350px;
  flex-wrap: wrap; // width가 꽉 차면 자동으로 내려주는 애
`;

const FileInput = styled.input`
  display: none;
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

const Image = styled.img`
  width: 400px;
  height: 400px;
  border: 2px solid #777;
  margin: 10px;
  object-fit: cover;
`;

const MM00Presenter = ({ fileChangeHandler, imagePath }) => {
  return (
    <Wrapper>
      <Wrapper hidden={`400px`} padding={`25px`} dr={`row`}>
        <Fade left>
          <Wrapper al={`flex-end`} padding={`20px`}>
            <ImageBox
              width={`400px`}
              height={`225px`}
              bgImg={`https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80`}
            />
          </Wrapper>
        </Fade>

        <Fade right>
          <Wrapper al={`flex-start`} padding={`20px`}>
            <ViewText size={`20px`} weight={`700`} isTitle={true}>
              Text 1
            </ViewText>
            <ViewText size={`15px`} weight={`400`} isTitle={true}>
              Text 2
            </ViewText>
            <ViewText size={`13px`} weight={`500`} isTitle={true}>
              Text 3
            </ViewText>
          </Wrapper>
        </Fade>
      </Wrapper>
    </Wrapper>
  );
};

export default MM00Presenter;
