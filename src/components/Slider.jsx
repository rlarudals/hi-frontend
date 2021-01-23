import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { Image, Wrapper } from "./commonComponent";

export default ({ mainBannerData, width }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 4000,
    arrows: true,
  };

  const Container = styled.div`
    width: 100%;
    height: 660px;
    margin-top: 15px;

    position: relative;

    & .slick-slide {
      text-align: center;
    }
  `;

  return (
    <Container>
      <Slider {...settings}>
        <Image
          height={`660px`}
          alt="slide"
          src={`https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcGl0YWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`}
        />
        <Image
          height={`660px`}
          alt="slide"
          src={`https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`}
        />
        <Image
          height={`660px`}
          alt="slide"
          src={`https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8aG9zcGl0YWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`}
        />
        <Image
          height={`660px`}
          alt="slide"
          src={`https://images.unsplash.com/photo-1551076805-e1869033e561?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8aG9zcGl0YWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`}
        />
        <Image
          height={`660px`}
          alt="slide"
          src={`https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvc3BpdGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`}
        />
        <Image
          height={`660px`}
          alt="slide"
          src={`https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGhvc3BpdGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`}
        />
      </Slider>
    </Container>
  );
};
