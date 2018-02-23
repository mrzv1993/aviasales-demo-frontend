import React from "react";
import styled from "styled-components";

import clock from "./clock.svg";
import planeTo from "./plane-to.svg";
import planeFrom from "./plane-from.svg";
import share from "./share.svg";

const Card = styled.div`
  display: flex;
  background-color: #eeffff;
  margin-top: 0.5rem;
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
    flex: 1 1 15%;
    padding: 5px;
    background-color: #fff;
    min-width: 208px;
  }
`;

const RightColumn = styled.div`
  flex: 1 1 75%;
  padding: 5px;
  flewx-basis: 75%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    border-left: 1px solid #dddddd;
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
  color: orange;
  text-align: left;
  font-weight: 500;
  line-height: 18px;
  font-size: 16px;

  color: #ff6d00;
  @media screen and (min-width: 768px) {
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
  display: flex;
  background-color: #aaaaff;
  align-items: center;
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

const Text = styled.span`
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
  background-color: #000;
  width: 20px;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const WrapTime = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DepartTime = WrapTime.extend``;

const CommingTime = WrapTime.extend``;

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
  margin: 0 0.5rem;
`;

const StartTime = styled.div`
  background-color: #678873;
  width: 25%;
  line-height: 18px;
  font-size: 14px;
  color: #4a4a4a;

  @media screen and (min-width: 768px) {
    line-height: 40px;
    font-size: 28px;
    text-align: right;
    color: #323333;
    width: 20%;
  }
`;

const EndTime = styled.div`
  background-color: #678873;
  width: 25%;
  line-height: 18px;
  font-size: 14px;
  color: #4a4a4a;

  @media screen and (min-width: 768px) {
    line-height: 40px;
    font-size: 28px;
    text-align: right;
    color: #323333;
    width: 20%;
  }
`;

const TotalTimeWrap = styled.div`
  background-color: #435188;
  width: 25%;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;

const TotalTime = styled.div`
  display: flex;
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  color: #a0b0b9;
`;

const Direct = styled.div`
  background-color: #678873;
  width: 25%;
  text-align: right;
  padding-right: 0.5rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default props => {
  return (
    <Card>
      <LeftColumn>
        <Baggage src={props.card.baggage} />
        <LeftTicket>Осталось 4 билета</LeftTicket>
        <Price>
          <Text>
            Купить<br /> за{" "}
          </Text>
          {props.card.price}
        </Price>

        <Partner>Clickavia</Partner>
        <Offers>
          <Offer>
            <AirOffer>Svyaznoy Travel</AirOffer>
            <PriceOffer>9 275 ₽</PriceOffer>
          </Offer>
          <Offer>
            <AirOffer>Билетик Аэро</AirOffer>
            <PriceOffer>9 587 ₽</PriceOffer>
          </Offer>
          <ButtonOffer>+ Еще 4 предложения</ButtonOffer>
        </Offers>
      </LeftColumn>

      <RightColumn>
        <PriceCarrier>
          <PriceContainer>
            <Price>2415 р</Price>
          </PriceContainer>
          <AirLogoWrap>
            <AirLogo src={props.card.logo} />
          </AirLogoWrap>
          <BadgesAndShare>
            <Badges>Чартер</Badges>
            <Share />
          </BadgesAndShare>
        </PriceCarrier>
        <DepartTime>
          <StartTime> 07:30</StartTime>
          <EndTime>09:50 </EndTime>
          <TotalTimeWrap>
            <TotalTime>
              <img src="" alt="взлет" />
              <p> Всего: 4ч 55м</p>
              <img src="" alt="посадка" />
            </TotalTime>
          </TotalTimeWrap>
          <Direct> Прямой</Direct>
        </DepartTime>
        <CommingTime>
          <StartTime> 07:30</StartTime>
          <EndTime>09:50 </EndTime>
          <TotalTime>4 ч 20 м </TotalTime>
          <Direct> Прямой</Direct>
        </CommingTime>
      </RightColumn>

      <RigthButton />
    </Card>
  );
};
