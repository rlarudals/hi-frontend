import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const MM12Wrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
  margin: ${(props) => props.margin || ``};
  padding: ${(props) => props.padding || ``};

  background-color: ${(props) => props.theme.checkColor};

  display: flex;
  flex-direction: row;
`;

const MM12Presenter = () => {
  return <MM12Wrapper>s</MM12Wrapper>;
};

export default MM12Presenter;
