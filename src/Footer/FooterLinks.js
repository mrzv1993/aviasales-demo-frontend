import React, { Component } from "react";
import styled from "styled-components";

const FooterLinks = styled.section`
  border-bottom: 1px solid #e0e6e8;
  padding-bottom: 2rem;
`;

const ListLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  margin-top: 1.5rem;
`;

const Country = ListLinks.extend``;

const City = ListLinks.extend``;

const Avia = ListLinks.extend``;

const Airports = ListLinks.extend``;

const Deport = ListLinks.extend``;

const Services = ListLinks.extend``;

const Title = styled.h3`
  font-weight: 500;
  line-height: 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;

  color: #4a4a4a;
`;

const Link = styled.a`
  line-height: 1rem;
  font-size: 0.75rem;
  text-decoration: none;
  padding: 0.25rem 0;
  color: #5b5b5c;

  &:hover {
    color: #ff8e41;
  }
`;

const LastLink = styled.a`
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
  padding-top: 1rem;
  text-decoration: none;

  color: #4a4a4a;
`;

export default function() {
  return (
    <FooterLinks>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="row">
              <div className="col-xs-12 col-md-6 col-xl-4">
                <div className="row">
                  <div className="col-xs-6">
                    <Country>
                      <Title>Страны</Title>
                      <Link href="#">Россия</Link>
                      <Link href="#">Тайланд</Link>
                      <Link href="#">Черногори</Link>
                      <Link href="#">Кипр</Link>
                      <Link href="#">Болгария</Link>
                      <Link href="#">Грузия</Link>
                      <LastLink href="#">Все страны →</LastLink>
                    </Country>
                  </div>
                  <div className="col-xs-6">
                    <City>
                      <Title>Города</Title>
                      <Link href="#">Москва</Link>
                      <Link href="#">Санкт-Петербург</Link>
                      <Link href="#">Симферополь</Link>
                      <Link href="#">Адлер</Link>
                      <Link href="#">Екатерембург</Link>
                      <Link href="#">Лондон</Link>
                      <LastLink href="#">Все города →</LastLink>
                    </City>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6 col-xl-4">
                <div className="row">
                  <div className="col-xs-6">
                    <Avia>
                      <Title>Авиакомпании</Title>
                      <Link href="#">Air Berlin</Link>
                      <Link href="#">Air France</Link>
                      <Link href="#">Alitalia</Link>
                      <Link href="#">Air Baltic</Link>
                      <Link href="#">Emirates</Link>
                      <Link href="#">KLM</Link>
                      <LastLink href="#">Все авиакомпании →</LastLink>
                    </Avia>
                  </div>
                  <div className="col-xs-6">
                    <Airports>
                      <Title>Аэропорты</Title>
                      <Link href="#">Шереметьево</Link>
                      <Link href="#">Курумоч</Link>
                      <Link href="#">Домодедово</Link>
                      <Link href="#">Толмачево</Link>
                      <Link href="#">Владивосток</Link>
                      <Link href="#">Гамбург</Link>
                      <LastLink href="#">Все аэропорты →</LastLink>
                    </Airports>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6 col-xl-4">
                <div className="row">
                  <div className="col-xs-6">
                    <Deport>
                      <Title>Направления</Title>
                      <Link href="#">MOW - SIP</Link>
                      <Link href="#">MOW - AER</Link>
                      <Link href="#">MOW - TIV</Link>
                      <Link href="#">MOW - MRV</Link>
                      <Link href="#">LED - MOW</Link>
                      <Link href="#">MOW - BKK</Link>
                    </Deport>
                  </div>
                  <div className="col-xs-6">
                    <Services>
                      <Title>Сервисы</Title>
                      <Link href="#">Горящие авиабилеты</Link>
                      <Link href="#">Календарь низких цен</Link>
                      <Link href="#">Карта низких цен</Link>
                      <Link href="#">Спецпредложения</Link>
                      <Link href="#">Таблица цен</Link>
                      <Link href="#">Блог</Link>
                      <Link href="#">Помощь</Link>
                    </Services>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterLinks>
  );
}
