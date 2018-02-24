import React from "react";
import styled from "styled-components";

import clock from "./clock.svg";
import share from "./share.svg";
import arrow from "./arrow.svg";
import pin from "./pin.svg";
import planeFxs from "./plane-forward-xs.svg";
import planeRxs from "./plane-reverse-xs.svg";
import planeRmd from "./plane-reverse-md.svg";
import planeFmd from "./plane-forward-md.svg";

const Card = styled.div`
  display: flex;
  background-color: #fff;
  margin: 0 -8px 0 -8px;
  margin-bottom: 0.5rem;

  @media screen and (min-width: 576px) {
    margin: 0;
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    border-radius: 4px;
  }
`;

const LeftColumn = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 5px;
    background-color: #fff;
    min-width: 198px;
  }
`;

const RightColumn = styled.div`
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  padding-bottom: 1rem;

  @media screen and (min-width: 768px) {
    border-left: 1px solid #dddddd;
    padding-top: 0.5rem;
    padding-bottom: 1.5rem;
  }
`;

const Baggage = styled.img`
  margin-top: 0.5rem;
`;

const Offers = styled.div`
  margin-top: 1rem;
  padding: 0 1.5rem;
`;

const Offer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.25rem;
  color: #59bce5;
`;

const AirOffer = styled.p`
  font-size: 12px;
  line-height: 18px;
  margin: 0;
`;

const PriceOffer = styled.p`
  font-size: 12px;
  line-height: 18px;
  margin: 0;
`;

const ButtonOffer = styled.button`
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  background-color: transparent;
  border: none;
  color: #59bce5;
  margin-top: 0.5rem;
`;

const Price = styled.div`
  font-weight: bold;
  line-height: normal;
  font-size: 22px;
  text-align: left;
  color: #ff9241;

  @media screen and (min-width: 768px) {
    font-weight: bold;

    font-weight: 500;
    line-height: 18px;
    font-size: 16px;

    color: #ff6d00;
    text-align: center;
    background: #ff6d00;
    border-radius: 4px;
    color: #ffffff;
    padding: 0.5rem;
    margin: 0.5rem 1.5rem 0 1.5rem;
  }
`;

const Partner = styled.div`
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  margin-top: 0.5rem;
  color: #a0b0b9;
`;

const LeftTicket = styled.div`
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  margin-top: 0.5rem;

  color: #ff654e;
`;

const PriceCarrier = styled.div`
  align-items: center;
  margin: 0.5rem 0;
  display: flex;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

const PriceContainer = styled.div`
  flex: 1 1 25%;
  display: block;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const AirLogoWrap = styled.div`
  flex: 1 1 75%;
  text-align: right;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

const AirLogo = styled.img``;

const TextPrice = styled.span`
  display: none;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  line-height: 20px;

  color: #ffffff;
  @media screen and (min-width: 768px) {
    display: inline;
  }
`;

const RigthButton = styled.div`
  width: 20px;
  display: none;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: center;
  background-color: #edf5f7;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const BadgesAndShare = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const Badges = styled.button`
  background: transparent;
  border: 1px solid #23a9f6;
  border-radius: 100px;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 11px;
  color: #23a9f6;
`;

const Share = styled.button`
  background-image: url(${share});
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  background-color: transparent;
  margin-left: 0.5rem;
  width: 18px;
`;

const WrapTime = styled.div`
  display: flex;
  align-items: stretch;

  @media screen and (min-width: 768px) {
    margin-top: 1rem;
  }
`;

const DepartTime = WrapTime.extend`
  display: flex;
  padding: 0.25rem 0;

  @media screen and (min-width: 768px) {
    border-bottom: 1px dashed #afbec6;
    padding: 0.75rem 0;
  }
`;

// Веремя вылета Начало

const Start = styled.div`
  order: 1;
  width: 25%;
  max-width: 80px;
  display: flex;
  flex-flow: column;

  @media screen and (min-width: 768px) {
    max-width: 25%;
  }
`;

const Time = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 40%;
    line-height: 40px;
    font-size: 28px;
    color: #323333;
  }
`;

const TimeStart = Time.extend``;

const TimeFinish = Time.extend`
  justify-content: flex-start;

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const Def = styled.span`
  display: inline;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Pin = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    margin-right: 0.5rem;
    display: block;
  }
`;

const Info = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    height: 60%;
  }
`;

const InfoStart = Info.extend`
  text-align: left;
`;

const InfoFinish = Info.extend`
  text-align: right;
`;

const City = styled.p`
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  color: #9ca5a8;
  margin: 0;
  margin-top: 0.5rem;
`;

const Date = styled.p`
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  color: #9ca5a8;
  margin: 0;
`;

// Веремя вылета Конец

// Время прибытия Начало

const Finish = styled.div`
  order: 2;
  width: 25%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    order: 3;
  }
`;

// Время прибытия Конец

//  Общее время начало

const TotalTimeWrap = styled.div`
  order: 3;
  width: 25%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    padding: 0 0.5rem;
    width: 50%;
    order: 2;
  }
`;

const TotalTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Count = styled.p`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 14px;
  margin: 0;
  color: #4a4a4a;
`;

const All = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline;
    font-style: normal;
    font-weight: normal;
    line-height: 18px;
    font-size: 14px;

    color: #4a4a4a;
  }
`;

const PlaneMd = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const PlaneXs = styled.img`
  display: block;
  margin-right: 0.5rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Clock = styled.img`
  display: inline-block;
  margin-right: 0.25rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Line = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    height: 1px;
    background-color: #a0b0b9;
  }
`;

const Airports = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    height: 60%;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

const Airport = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  height: 100%;
  border: none;
  padding-top: 2rem;
  font-weight: 500;
  line-height: 18px;
  font-size: 11px;

  color: #4a4a4a;
`;

const AirportOne = Airport.extend`
  align-items: flex-start;
`;

const AirportTwo = Airport.extend`
  align-items: flex-end;
`;

const Circle = styled.div`
  position: absolute;
  top: -9px;
  border: 1px solid #a0b0b9;
  height: 11px;
  width: 11px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #fff;
`;

//  Общее время Конец

const Direct = styled.div`
  order: 4;
  width: calc(25% + 80px);
  text-align: right;
  line-height: 18px;
  font-size: 14px;
  text-align: right;

  color: #4a4a4a;

  @media screen and (min-width: 768px) {
    order: 2;
    display: none;
  }
`;

export default props => {
  return (
    <Card>
      <LeftColumn>
        <Baggage src={props.card.baggage} />
        <LeftTicket>{props.card.leftTicket}</LeftTicket>
        <Price>
          <TextPrice>
            Купить<br /> за{" "}
          </TextPrice>
          {props.card.price}
        </Price>

        <Partner>на {props.card.partner}</Partner>
        <Offers>
          <Offer>
            <AirOffer>{props.card.offerAirFirst}</AirOffer>
            <PriceOffer>{props.card.offerPriceFirst}</PriceOffer>
          </Offer>
          <Offer>
            <AirOffer>{props.card.offerAirSecond}</AirOffer>
            <PriceOffer>{props.card.offerPriceSecond}</PriceOffer>
          </Offer>
          <ButtonOffer type="button">{props.card.offerButton}</ButtonOffer>
        </Offers>
      </LeftColumn>

      <RightColumn>
        <PriceCarrier>
          <PriceContainer>
            <Price>{props.card.price}</Price>
          </PriceContainer>
          <AirLogoWrap>
            <AirLogo src={props.card.logo} />
          </AirLogoWrap>
          <BadgesAndShare>
            <Badges type="button">Чартер</Badges>
            <Share type="button" />
          </BadgesAndShare>
        </PriceCarrier>

        <DepartTime>
          <Start>
            <TimeStart>
              <Pin src={pin} alt="gby" />
              <PlaneXs src={planeFxs} alt="gby" />
              00:05&nbsp;<Def>–</Def>
            </TimeStart>
            <InfoStart>
              <City>Москва</City>
              <Date>24 фев 2018, Сб</Date>
            </InfoStart>
          </Start>
          <TotalTimeWrap>
            <TotalTime>
              <PlaneMd src={planeRmd} alt="1" />
              <Count>
                <Clock src={clock} alt="1" />
                <All>Всего:&nbsp;</All>
                {props.card.totalTimeTo}
              </Count>
              <PlaneMd src={planeFmd} alt="1" />
            </TotalTime>
            <Line />
            <Airports>
              <AirportOne>
                <Circle />
                VVS
              </AirportOne>
              <AirportTwo>
                <Circle />
                VVS
              </AirportTwo>
            </Airports>
          </TotalTimeWrap>
          <Finish>
            <TimeFinish>03:05</TimeFinish>
            <InfoFinish>
              <City>Барселона</City>
              <Date>24 фев 2018, Сб</Date>
            </InfoFinish>
          </Finish>
          <Direct>Прямой</Direct>
        </DepartTime>
        <DepartTime>
          <Start>
            <Time>
              <Pin src={pin} alt="gby" />
              <PlaneXs src={planeFxs} alt="gby" />
              00:05
            </Time>
            <InfoStart>
              <City>Москва</City>
              <Date>24 фев 2018, Сб</Date>
            </InfoStart>
          </Start>
          <TotalTimeWrap>
            <TotalTime>
              <PlaneMd src={planeRmd} alt="1" />
              <Count>
                <Clock src={clock} alt="1" />
                <All>Всего:&nbsp;</All>
                {props.card.totalTimeTo}
              </Count>
              <PlaneMd src={planeFmd} alt="1" />
            </TotalTime>
            <Line />
            <Airports>
              <AirportOne>
                <Circle />
                VVS
              </AirportOne>
              <AirportTwo>
                <Circle />
                VVS
              </AirportTwo>
            </Airports>
          </TotalTimeWrap>
          <Finish>
            <TimeFinish>03:05</TimeFinish>
            <InfoFinish>
              <City>Барселона</City>
              <Date>24 фев 2018, Сб</Date>
            </InfoFinish>
          </Finish>
          <Direct>Прямой</Direct>
        </DepartTime>
      </RightColumn>

      <RigthButton />
    </Card>
  );
};
