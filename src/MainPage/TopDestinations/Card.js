import React from "react";
import styled from "styled-components";

const Card = styled.a`
  display: block;
  background-color: #fff;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  text-decoration: none;
  margin-top: 1rem;

  :hover {
    box-shadow: 0 10px 20px 0 rgba(91, 137, 163, 0.2);
  }

  @media (min-width: 768px) {
    margin-top: 1.5rem;
  }
`;

const CityImg = styled.img`
  display: block;
  height: 128px;
  width: 100%;
  border: none;
  border-radius: 8px 8px 0 0;
  background-color: #eee;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 212px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;

  @media (min-width: 768px) {
  }

  @media (min-width: 768px) {
  }
`;

const Place = styled.div`
  flex-grow: 1;
  min-width: 0;
`;

const PriceAndDate = styled.div`
  margin-left: 8px;
`;

const City = styled.h4`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  margin: 0 0 4px;
  text-align: left;
  font-weight: bold;
  padding: 0.25rem 0;
  font-size: 1rem;
  color: #5b5b5c;

  @media (min-width: 768px) {
    font-size: 1.275rem;
  }
`;

const Price = styled.p`
  white-space: nowrap;
  margin: 0 0 4px;
  line-height: 20px;
  font-size: 14px;
  text-align: right;
  color: #00bae8;

  ${Card}:hover & {
    color: #ff9241;
  }

  @media (min-width: 768px) {
    font-size: 1.275rem;
  }
`;

const Country = styled.p`
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  margin: 0;
  text-align: left;
  line-height: 20px;
  font-weight: 500;
  font-size: 12px;
  color: #a0b0b9;
`;

const Departure = styled.p`
  white-space: nowrap;
  margin: 0;
  line-height: 20px;
  font-weight: 500;
  font-size: 12px;
  text-align: right;
  color: #a0b0b9;
`;

const Flag = styled.img`
  display: none;

  @media (min-width: 768px) {
    align-self: center;
    display: block;
    margin-right: 1rem;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(38, 38, 38, 0.05);
  }
`;

export default props => {
  return (
    <Card href="#">
      <CityImg src={props.card.img} />
      <Info>
        <Flag src={props.card.flag} />
        <Place>
          <City>{props.card.city}</City>
          <Country>{props.card.country}</Country>
        </Place>
        <PriceAndDate>
          <Price>{props.card.price}</Price>
          <Departure>{props.card.departure}</Departure>
        </PriceAndDate>
      </Info>
    </Card>
  );
};
