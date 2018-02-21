import React from "react";
import styled from "styled-components";

import clock from "./clock.svg";
import planeTo from "./plane-to.svg";
import planeFrom from "./plane-from.svg";

const Card = styled.section`
  background-color: #fff;
  display: flex;
  flex-flow: column;
  margin-bottom: 0.5rem;
  padding: 0 0.5rem;
`;

const Icon = styled.img`
  margin-right: 0.5rem;
`;

const PriceAvia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.75rem 0;
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 22px;
  margin: 0;

  color: #ff9241;
`;

const Time = styled.div`
  width: 40%;
`;

const TotalTime = styled.div`
  text-align: left;
  width: 30%;
`;

const Direct = styled.div`
  width: 30%;
  text-align: right;
`;

const Logos = styled.div``;

const LogoAlone = styled.img``;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: normal;
  line-height: 18px;
  font-size: 14px;
  margin-bottom: 1rem;

  color: #4a4a4a;
`;

export default props => {
  return (
    <Card href="#">
      <PriceAvia>
        <Price>{props.card.price}</Price>
        <Logos>
          <LogoAlone src={props.card.logo} alt="asd" />
        </Logos>
      </PriceAvia>
      <Info>
        <Time>
          <Icon src={planeTo} alt="Время в пути" />
          {props.card.timeTo}
        </Time>
        <TotalTime>
          <Icon src={clock} alt="Время в пути" />
          {props.card.totalTimeTo}
        </TotalTime>
        <Direct>{props.card.directTo}</Direct>
      </Info>
      <Info>
        <Time>
          <Icon src={planeFrom} alt="Время в пути" />
          {props.card.timeFrom}
        </Time>
        <TotalTime>
          <Icon src={clock} alt="Время в пути" />
          {props.card.totalTimeFrom}
        </TotalTime>
        <Direct>{props.card.directFrom}</Direct>
      </Info>
    </Card>
  );
};
