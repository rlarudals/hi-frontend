import React from "react";
import { Wrapper } from "../../components/commonComponent";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

const settings = {
  dots: false,
  infinite: true,
  speed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: false,
  autoplaySpeed: 4000,
  arrows: true,
};

const MM00Presenter = () => {
  return (
    <Wrapper>
      <Wrapper hidden={`400px`} padding={`25px`} dr={`row`}>
        <Fade left>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
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
