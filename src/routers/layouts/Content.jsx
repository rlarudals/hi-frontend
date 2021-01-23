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
import MM08 from "../MM08";
import MM09 from "../MM09";
import MM10 from "../MM10";
import MM11 from "../MM11";
import MM12 from "../MM12";
import MM13 from "../MM13";
import MM14 from "../MM14";
import MM15 from "../MM15";
import MM16 from "../MM16";
import MM17 from "../MM17";

const WholeWrapper = styled.div`
  width: 100%;
`;

const Content = () => {
  return (
    <WholeWrapper>
      <Route exact path="/" component={MM00} />
      <Route exact path="/schoolhone" component={MM01} />
      <Route exact path="/schoolhtwo" component={MM02} />
      <Route exact path="/schoolhthr" component={MM03} />
      <Route exact path="/signIn" component={MM04} />
      <Route exact path="/signUp" component={MM05} />
      <Route exact path="/lovelifeone" component={MM06} />
      <Route exact path="/lovelifetwo" component={MM07} />
      <Route exact path="/lovelifethr" component={MM08} />
      <Route exact path="/medicineone" component={MM09} />
      <Route exact path="/medicinetwo" component={MM10} />
      <Route exact path="/medicinethr" component={MM11} />
      <Route exact path="/peone" component={MM12} />
      <Route exact path="/petwo" component={MM13} />
      <Route exact path="/pethr" component={MM14} />
      <Route exact path="/eatinglifeone" component={MM15} />
      <Route exact path="/eatinglifetwo" component={MM16} />
      <Route exact path="/eatinglifethr" component={MM17} />
    </WholeWrapper>
  );
};

export default Content;
