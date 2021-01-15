import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import MM00 from "../MM00";
import MM01 from "../MM01";
import MM02 from "../MM02";
import MM03 from "../MM03";
import MM04 from "../MM04";
import MM05 from "../MM05";
import MM06 from "../MM06";
import MM07 from "../MM07";

const WholeWrapper = styled.div`
  width: 100%;
`;

const Content = () => {
  return (
    <WholeWrapper>
      <Route exact path="/" component={MM00} />
      <Route exact path="/schoolh" component={MM01} />
      <Route exact path="/lovelife" component={MM02} />
      <Route exact path="/medicine" component={MM03} />
      <Route exact path="/signIn" component={MM04} />
      <Route exact path="/signUp" component={MM05} />
      <Route exact path="/pe" component={MM06} />
      <Route exact path="/eatinglife" component={MM07} />
    </WholeWrapper>
  );
};

export default Content;
