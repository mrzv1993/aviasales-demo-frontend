import React, { Component } from "react";
import styled from "styled-components";

import mockup1x from "./phone1x.png";
import mockup2x from "./phone2x.png";
import star from "../assets/star.svg";
import halfStar from "../assets/half-star.svg";

import apple from "./apple.svg";
import android from "./android.svg";
import wPh from "./w-ph.svg";

const DownloadApp = styled.section`
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
  padding: 0;
  margin-top: 2rem;
`;
const Title = styled.h2`
  font-weight: 500;
  line-height: 40px;
  font-size: 32px;

  color: #ffffff;
  @media (min-width: 767px) {
    text-align: left;
  }
`;
const Rating = styled.ul`
  list-style: none;
  padding: 0;

  @media (min-width: 767px) {
    text-align: left;
  }
`;

const Star = styled.li`
  display: inline;
  margin-left: 0.5rem;
  padding: 0;
`;

const Mark = Star.extend`
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;

  color: #ffffff;
`;

const AppList = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 0;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const AppLink = styled.a`
  line-height: 24px;
  font-size: 14px;
  color: #ffffff;
  text-decoration: none;
  padding: 1.5rem 0;

  @media (min-width: 768px) {
    padding: 0rem 1.5rem 0rem 0.5rem;
  }

  @media (min-width: 991px) {
    padding: 3rem 1.5rem 3rem 0.5rem;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const PhonePicture = styled.div`
  height: 100%;
  position: relative;
`;

const Picture = styled.picture`
  @media (min-width: 767px) {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const Img = styled.img`
  width: 100%;
  background-size: cover;
`;

const MarketImg = styled.img`
  height: 24px;
  background-size: cover;
`;

const Market = styled.div`
  display: flex;
  align-items: center;
`;

export default function() {
  return (
    <DownloadApp>
      <div className="container">
        <div className="row center-xs left-md">
          <div className="col-xs-12 col-md-8 col-md-offset-4">
            <Title>Скачай мобильное приложение Aviasales.ru</Title>
            <Rating>
              <Star>
                <img src={star} alt="1" />
              </Star>
              <Star>
                <img src={star} alt="2" />
              </Star>
              <Star>
                <img src={star} alt="3" />
              </Star>
              <Star>
                <img src={star} alt="4" />
              </Star>
              <Star>
                <img src={halfStar} alt="5" />
              </Star>
              <Mark>Более 103 000 оценок</Mark>
            </Rating>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-4 col-xl-3 col-xl-offset-1">
            <PhonePicture>
              <Picture>
                <source
                  media="(max-width: 575px)"
                  srcSet={mockup1x + " , " + mockup2x + "2x"}
                />
                <Img
                  src={mockup1x}
                  srcSet={mockup2x}
                  alt="iPhone Application"
                />
              </Picture>
            </PhonePicture>
          </div>
          <div className="col-xs-6 col-md-8 col-xl">
            <AppList>
              <Market>
                <MarketImg src={apple} alt="App Store" />
                <AppLink href="#">iPhone или iPad</AppLink>
              </Market>
              <Market>
                <MarketImg src={android} alt="Google Play" />
                <AppLink href="#">Phone или iPad</AppLink>
              </Market>
              <Market>
                <MarketImg src={wPh} alt="Windows Phone" />
                <AppLink href="#">iPhone или iPad</AppLink>
              </Market>
            </AppList>
          </div>
        </div>
      </div>
    </DownloadApp>
  );
}
