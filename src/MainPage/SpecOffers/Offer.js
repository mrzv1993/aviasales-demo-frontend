import React from "react";
import styled from "styled-components";

const Offer = styled.section`
  background: #fff;
  margin-top: 2.5rem;
  border-radius: 3px;
`;

const Header = styled.div`
  background-color: #cd2027;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AllianceLogo = styled.img`
  width: 40px;
  height: 40px;
`;

const Title = styled.h3`
  line-height: 1.5rem;
  font-size: 1rem;
  color: #ffffff;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-style: normal;
  font-weight: normal;
  margin: 0;
`;

const Info = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PriceInfo = styled.div`
  margin-right: 1rem;
  margin-top: 1rem;
`;

const Logo = styled.img`
  width: 128px;
  height: 32px;
  margin-left: 1rem;

  @media (min-width: 768px) {
    width: 112px;
    height: 24px;
  }
`;

const Price = styled.p`
  line-height: 16px;
  font-size: 20px;
  text-align: right;
  margin: 0;
  padding: 0;
  margin-bottom: 0.5rem;

  color: #5c5c5c;
`;

const Days = styled.p`
  line-height: 1.5;
  font-size: 12px;
  text-align: right;
  margin: 0;
  padding: 0;

  color: #d93633;
`;

const At = styled.span`
  font-size: 12px;

  color: #5c5c5c;
`;

const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  color: #242424;
  margin: 1rem 0 1.5rem 0;
  padding: 1rem;
  text-align: left;
`;

const Button = styled.button`
  background: rgba(0, 0, 0, 0.0001);
  border: 2px solid #cd1f27;
  border-radius: 3px;
  line-height: 20px;
  font-size: 1rem;
  text-align: center;

  color: #d93533;
  width: calc(100% - 2rem);
  margin-left: 1rem;
  padding: 0.75rem 0;
  margin-bottom: 1rem;

  @media (min-width: 1200px) {
    width: calc(100% - 2rem);
    margin-left: 0;
  }
`;

export default props => {
  return (
    <Offer>
      <Header>
        <Title>{props.data.title}</Title>
        <AllianceLogo src={props.data.allianceLogo} alt="SkyTeam" />
      </Header>
      <Info>
        <Logo src={props.data.logo} alt="Aviasales" title="LuftHansa" />
        <PriceInfo>
          <Price>
            <At>от</At> {props.data.price} ₽
          </Price>
          <Days>{props.data.day}</Days>
        </PriceInfo>
      </Info>
      <Description>{props.data.description}</Description>
      <Button type="button">Узнать подробности</Button>
    </Offer>
  );
};
