import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
  margin: ${(props) => props.margin || ``};
  padding: ${(props) => props.padding || ``};

  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.ju || `center`};
`;

const MM03Presenter = () => {
  return <Wrapper>wrwr</Wrapper>;
};

export default MM03Presenter;
