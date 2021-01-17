import React from "react";
import styled from "styled-components";

const MM01Area = styled.div`
  width: 100%;
  height: 400px;

  margin-bottom: 20px;

  background-color: ${(props) => props.theme.greyColor};
`;

const MM01Presenter = () => {
  return <MM01Area>MM01</MM01Area>;
};

export default MM01Presenter;
