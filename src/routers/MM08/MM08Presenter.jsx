import React from "react";
import styled from "styled-components";
import respectanimala from "../../img/respectanimala.png";
import respectanimalb from "../../img/respectanimalb.png";
import respectanimalc from "../../img/respectanimalc.png";
import respectanimald from "../../img/respectanimald.png";
import Fade from "react-reveal/Fade";

const MM08Area = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.div`
  width: 300px;
  height: 50px;

  margin-left: 30px;
  margin-top: 30px;
  margin-bottom: 35px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  border-bottom: 7px #83adbd solid;
`;

const Title = styled.span`
  font-size: 25px;
  color: #ffffff;

  display: flex;
  flex-direction: row;
  text-shadow: 2px 8px 4px #7db6ca, 0px 3px 10px #0a3d62;
`;

const InnerWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap; // width가 꽉 차면 자동으로 내려주는 애
`;

const DetailWrapper = styled.div`
  width: 250px;
  height: 170px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin-top: 70px;
  margin-left: 90px;
  margin-bottom: 50px;
`;

const DetailTitle = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin-bottom: 50px;
  margin-top: 15px;

  font-weight: bold;
`;

const ImageBox = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 10px;

  transition: 0.5s;

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
    opacity: 0.8;
  }
`;

const MM08Presenter = () => {
  return (
    <MM08Area>
      <TitleBox>
        <Title>동물 존중 영상 👩🏻‍💻</Title>
      </TitleBox>
      <InnerWrapper>
        <Fade left>
          <DetailWrapper>
            <a href="https://www.youtube.com/watch?v=ObRe-1yRMPs">
              <ImageBox src={respectanimala} />
            </a>
            <DetailTitle>동물도 권리가 있어요</DetailTitle>
          </DetailWrapper>
        </Fade>

        <Fade left>
          <DetailWrapper>
            <a href="https://www.youtube.com/watch?v=H9LU3jvbp8s">
              <ImageBox src={respectanimalb} />
            </a>
            <DetailTitle>동물 존중 샌드아트</DetailTitle>
          </DetailWrapper>
        </Fade>

        <Fade right>
          <DetailWrapper>
            <a href="https://www.youtube.com/watch?v=iO5zWAp7sl4">
              <ImageBox src={respectanimalc} />
            </a>
            <DetailTitle>반려 동물 존중 캠페인</DetailTitle>
          </DetailWrapper>
        </Fade>

        <Fade right>
          <DetailWrapper>
            <a href="https://www.youtube.com/watch?v=RLzXrAee3j0">
              <ImageBox src={respectanimald} />
            </a>
            <DetailTitle>생명의 소중함 인지 교육</DetailTitle>
          </DetailWrapper>
        </Fade>
      </InnerWrapper>
    </MM08Area>
  );
};

export default MM08Presenter;
