import React from "react";
import styled from "styled-components";

const City = styled.p`
  background-color: #eaeaea;
`;

const Card = styled.section`
  background-color: #fff;
  display: flex;
  flex-flow: column;
  margin-bottom: 0.5rem;
`;

const PriceAvia = styled.div`
  background-color: red;
  display: flex;
  justify-content: space-between;
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

const Logo = styled.img``;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: normal;
  line-height: 18px;
  font-size: 14px;

  color: #4a4a4a;
`;

export default props => {
  return (
    <Card href="#">
      <PriceAvia>
        <Price>{props.card.price}</Price>
        <Logo src="" alt="asd" />
      </PriceAvia>
      <Info>
        <Time>
          <img src="" alt="dd" />
          {props.card.timeTo}
        </Time>
        <TotalTime>
          <img src="" alt="dd" />
          {props.card.totalTimeTo}
        </TotalTime>
        <Direct>{props.card.directTo}</Direct>
      </Info>
      <Info>
        <Time>
          <img src="" alt="dd" />
          {props.card.timeFrom}
        </Time>
        <TotalTime>
          <img src="" alt="dd" />
          {props.card.totalTimeFrom}
        </TotalTime>
        <Direct>{props.card.directFrom}</Direct>
      </Info>
    </Card>
  );
};
