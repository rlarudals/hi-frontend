import React from "react";
import styled from "styled-components";

const MM01Area = styled.div`
  width: 100%;

  color: ${(props) => props.theme.blackColor};
`;

const MM01Presenter = () => {
  return <MM01Area>SchoolHealth</MM01Area>;
};

export default MM01Presenter;
