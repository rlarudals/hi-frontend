import React from "react";
import styled from "styled-components";
import lifesciencea from "../../img/lifesciencea.png";
import lifescienceb from "../../img/lifescienceb.png";
import lifesciencec from "../../img/lifesciencec.png";
import lifescienced from "../../img/lifescienced.png";
import Fade from "react-reveal/Fade";

const MM07Area = styled.div`
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

  margin-top: 50px;
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
  height: 100px;
  border-radius: 10px;

  transition: 0.5s;

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
    opacity: 0.8;
  }
`;

const MM07Presenter = () => {
  return (
    <MM07Area>
      <TitleBox>
        <Title>생명 공학 자료실 👩🏻‍💻</Title>
      </TitleBox>
      <InnerWrapper>
        <Fade left>
          <DetailWrapper>
            <a href="http://www.mogam.re.kr/eng/main.do">
              <ImageBox src={lifesciencea} />
            </a>
            <DetailTitle>목암연구소</DetailTitle>
          </DetailWrapper>
        </Fade>

        <Fade left>
          <DetailWrapper>
            <a href="https://kctc.kribb.re.kr/">
              <ImageBox src={lifescienceb} />
            </a>
            <DetailTitle>생물 자원 센터 KCTC</DetailTitle>
          </DetailWrapper>
        </Fade>

        <Fade right>
          <DetailWrapper>
            <a href="https://www.kribb.re.kr/kor/main/main.jsp">
              <ImageBox src={lifesciencec} />
            </a>
            <DetailTitle>한국 생명 공학 연구원</DetailTitle>
          </DetailWrapper>
        </Fade>

        <Fade right>
          <DetailWrapper>
            <a href="http://www.medicalplus.co.kr/">
              <ImageBox src={lifescienced} />
            </a>
            <DetailTitle>학생 자살예방교육-고등용</DetailTitle>
          </DetailWrapper>
        </Fade>
      </InnerWrapper>
    </MM07Area>
  );
};

export default MM07Presenter;
