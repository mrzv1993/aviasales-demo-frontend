import React, { Component } from "react";
import styled from "styled-components";
import mockup from "./assets/mockup.png";
import star from "./assets/star.svg";
import halfStar from "./assets/half-star.svg";

const DownloadApp = styled.section`
  position: relative;
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
`;

const Title = styled.h2`
  font-weight: 500;
  line-height: normal;
  font-size: 24px;
  text-align: center;

  color: #ffffff;
  display: inline-block;
  margin-top: 2.5rem;
`;

const Rate = styled.div`
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;

  color: #ffffff;
`;

const RateStars = styled.ul`
  display: flex;
  list-style: none;
  margin-right: 0.5rem;
`;

const RateListItem = styled.li`
  margin-right: 0.25rem;
`;

const Star = styled.img`
  display: flex;
`;

const HalfStar = styled.img`
  display: flex;
`;

const Market = styled.div`
  display: flex;
`;

const Mockup = styled.div`
  background-image: url(${mockup});
  background-repeat: no-repeat;
  background-size: 96px;
  width: 50%;
  position: absolute;
  botton: 0;
`;

const Link = styled.ul`
  color: #ffffff;
  list-style: none;
`;

const MarketListItem = styled.li`
  padding: 0.5rem 0;
  font-size: 14px;
`;

export default function() {
  return (
    <DownloadApp>
      <Mockup />
      <div className="container">
        <Title>Скачай мобильное приложение Aviasales.ru</Title>
        <Rate>
          <RateStars>
            <RateListItem>
              <Star src={star} alt="Aviasales" title="Aviasales" />
            </RateListItem>
            <RateListItem>
              <Star src={star} alt="Aviasales" title="Aviasales" />
            </RateListItem>
            <RateListItem>
              <Star src={star} alt="Aviasales" title="Aviasales" />
            </RateListItem>
            <RateListItem>
              <Star src={star} alt="Aviasales" title="Aviasales" />
            </RateListItem>
            <RateListItem>
              <HalfStar src={halfStar} alt="Aviasales" title="Aviasales" />
            </RateListItem>
          </RateStars>
          <p>Более 103 000 оценок</p>
        </Rate>
        <Market>
          <Link>
            <MarketListItem>iPhone или iPad</MarketListItem>
            <MarketListItem>Android</MarketListItem>
            <MarketListItem>Windows Phone</MarketListItem>
          </Link>
        </Market>
      </div>
    </DownloadApp>
  );
}
