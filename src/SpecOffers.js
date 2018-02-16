import React, { Component } from "react";
import styled from "styled-components";
import oferLogo from "./assets/pobeda.png";

const SpecOffers = styled.section`
  background: linear-gradient(162.96deg, #00b0de 41.41%, #196ebd 141.41%);
  margin-top: 2.5rem;
`;

const OferLogo = styled.img`
  height: 100%;
  margin-left: 1rem;
`;

const Title = styled.h2`
  margin-top: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 28px;

  color: #ffffff;
  padding-top: 1rem;
`;

const Card = styled.div`
  background-color: #ffffff;
  margin-top: 1rem;
`;

const Header = styled.div`
  background-color: #cd2027;
  padding: 1.5rem 1rem;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;

  color: #ffffff;
`;

const Info = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PriceWrapper = styled.div`
  margin-right: 1rem;
  margin-top: 1rem;
`;

const Price = styled.p`
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 20px;
  text-align: right;
  margin: 0;
  padding: 0;
  margin-bottom: 0.5rem;

  color: #5c5c5c;
`;

const Days = styled.span`
  font-style: normal;
  font-weight: normal;
  line-height: 15px;
  font-size: 12px;
  text-align: right;
  margin: 0;
  padding: 0;

  color: #d93633;
`;

const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;

  color: #242424;
  margin: 1rem 0 1.5rem 0;
  padding: 0 0.5rem;
`;

const Button = styled.button`
  background: rgba(0, 0, 0, 0.0001);
  border: 2px solid #cd1f27;
  border-radius: 3px;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;

  color: #d93533;
  width: calc(100% - 1rem);
  margin-left: 0.5rem;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
`;

const Note = styled.div`
  text-align: center;
  padding: 2rem 0 1.5rem 0;
`;

const ShowAll = styled.a`
  font-size: 16px;
  text-decoration-line: underline;
  color: #ffffff;
`;

const Footnote = styled.span`
  display: inline-block;
  padding-top: 0.5rem;
  line-height: 20px;
  font-size: 16px;
  text-align: center;

  color: #ffffff;
`;

export default function() {
  return (
    <SpecOffers>
      <div className="container">
        <Title>Спецпредложения на авиабилеты</Title>
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <Card>
              <Header>
                <h3>Билеты от 499 рублей!</h3>
              </Header>
              <Info>
                <OferLogo src={oferLogo} alt="Aviasales" title="Aviasales" />
                <PriceWrapper>
                  <Price>от 499 ₽</Price>
                  <span>Осталось 45 дней</span>
                </PriceWrapper>
              </Info>
              <Description>
                Билеты от 499 рублей! Специальное предложение от авиакомпании
                Победа
              </Description>
              <Button>Узнать подробности</Button>
            </Card>
          </div>
          <div className="col-xs-12 col-md-4">
            <Card>
              <Header>
                <h3>Билеты от 499 рублей!</h3>
              </Header>
              <Info>
                <OferLogo src={oferLogo} alt="Aviasales" title="Aviasales" />
                <PriceWrapper>
                  <Price>от 499 ₽</Price>
                  <span>Осталось 45 дней</span>
                </PriceWrapper>
              </Info>
              <Description>
                Билеты от 499 рублей! Специальное предложение от авиакомпании
                Победа
              </Description>
              <Button>Узнать подробности</Button>
            </Card>
          </div>
          <div className="col-xs-12 col-md-4">
            <Card>
              <Header>
                <h3>Билеты от 499 рублей!</h3>
              </Header>
              <Info>
                <OferLogo src={oferLogo} alt="Aviasales" title="Aviasales" />
                <PriceWrapper>
                  <Price>от 499 ₽</Price>
                  <span>Осталось 45 дней</span>
                </PriceWrapper>
              </Info>
              <Description>
                Билеты от 499 рублей! Специальное предложение от авиакомпании
                Победа
              </Description>
              <Button>Узнать подробности</Button>
            </Card>
          </div>
        </div>
        <Note>
          <ShowAll href="#">Смотреть все спецпредложения</ShowAll>
          <br />
          <Footnote>* средняя цена по направлению</Footnote>
        </Note>
      </div>
    </SpecOffers>
  );
}
