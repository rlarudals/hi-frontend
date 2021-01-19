import React from "react";
import styled from "styled-components";

const MM02Area = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`;

const Box = styled.div`
  width: 200px;
`;

const MM02Presenter = () => {
  return <MM02Area>정신건강</MM02Area>;
};

export default MM02Presenter;
