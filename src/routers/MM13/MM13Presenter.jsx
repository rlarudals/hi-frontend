import React from "react";
import styled from "styled-components";

const MM13Wrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
`;

const MM13Presenter = () => {
  return <MM13Wrapper>22</MM13Wrapper>;
};

export default MM13Presenter;
