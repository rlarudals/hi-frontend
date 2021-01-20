import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import MM11img1 from "../../img/MM11img1.png";
import MM11img2 from "../../img/MM11img2.png";
import MM11img3 from "../../img/MM11img3.png";
import MM11img4 from "../../img/MM11img4.png";
import MM11img5 from "../../img/MM11img5.png";
import MM11img6 from "../../img/MM11img6.png";
import MM11img7 from "../../img/MM11img7.png";
import MM11img8 from "../../img/MM11img8.png";

const MainWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};

  padding: ${(props) => props.padding || ``};

  display: flex;
  flex-direction: column;

  justify-content: flex-start;
`;

const SpanWrapper = styled.div`
  width: ${(props) => props.width || `48%`};
  height: ${(props) => props.height || `100%`};
  margin: 20px 40px 40px 40px;
  padding: 0px 0px 30px 0px;

  display: flex;
  flex-direction: row;

  border-bottom: 7px #83adbd solid;
`;

const InnerWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const ImageWrapper = styled.div`
  height: 200px;
  margin: 20px;
`;

const ImageBox = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 10px;

  transition: 0.3s;

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
    opacity: 0.8;
  }
`;

const EmjText = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin: 0px 0px 0px 30px;
`;

const SpanTextMain = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 8px 4px #60a3bc, 0px 3px 10px #0a3d62;
  margin: 0px 0px 0px 10px;
`;

const MM11Presenter = () => {
  return (
    <MainWrapper>
      <SpanWrapper>
        <Fade>
          <EmjText>💡</EmjText>
          <SpanTextMain>소비자를 위한 의약품 안전정보</SpanTextMain>
        </Fade>
      </SpanWrapper>
      <InnerWrapper>
        <Fade>
          <ImageWrapper>
            <a href="https://www.youtube.com/watch?v=v1M2JkViXSY">
              <ImageBox src={MM11img1} width="300px" height="200px" />
            </a>
          </ImageWrapper>
          <ImageWrapper>
            <a href="https://www.youtube.com/watch?v=ig-9k3UVQy4">
              <ImageBox src={MM11img2} width="300px" height="200px" />
            </a>
          </ImageWrapper>
          <ImageWrapper>
            <a href="https://www.youtube.com/watch?v=TSc_8V47pmQ">
              <ImageBox src={MM11img3} width="300px" height="200px" />
            </a>
          </ImageWrapper>
          <ImageWrapper>
            <a href="https://www.youtube.com/watch?v=ESbO7pLAo6s">
              <ImageBox src={MM11img4} width="300px" height="200px" />
            </a>
          </ImageWrapper>
          <ImageWrapper>
            <a href="https://www.youtube.com/watch?v=lz1pzUxAU8I">
              <ImageBox src={MM11img5} width="300px" height="200px" />
            </a>
          </ImageWrapper>
          <ImageWrapper>
            <a href="https://www.youtube.com/watch?v=yMCzKA6d3Eo">
              <ImageBox src={MM11img6} width="300px" height="200px" />
            </a>
          </ImageWrapper>
          <ImageWrapper>
            <a href="https://www.youtube.com/watch?v=xszr1WCLIHE">
              <ImageBox src={MM11img7} width="300px" height="200px" />
            </a>
          </ImageWrapper>
          <ImageWrapper>
            <a href="https://www.youtube.com/watch?v=BBnGKYE0zYg">
              <ImageBox src={MM11img8} width="300px" height="200px" />
            </a>
          </ImageWrapper>
        </Fade>
      </InnerWrapper>
    </MainWrapper>
  );
};

export default MM11Presenter;
