import React, { Component } from "react";
import styled from "styled-components";

import calendar from "./assets/calendar-img.svg";
import flagRu from "./assets/flag-ru.svg";

const BestPrice = styled.section`
  background: linear-gradient(180deg, #f8fcff 0%, #ffffff 100%);
`;

// Тайтл начало

const SectionTitleWrap = styled.div`
  padding-top: 2.5rem;
  text-align: center;
  min-width: 312px;

  @media (min-width: 768px) {
    padding-top: 4rem;
  }
`;

const Label = styled.div`
  margin: 0 auto;
  background-image: url(${calendar});
  background-repeat: no-repeat;
  width: 64px;
  height: 64px;
`;

const TitleText = styled.h2`
  font-weight: 500;
  line-height: 1.125rem;
  font-size: 1.125rem
  margin-top: 1.5rem;
  color: #4a4a4a;

  @media (min-width: 768px) {
    margin-top: 2.5rem;
    font-size: 1.5rem;
  }
`;

// Тайтл Конец

const ListWrapper = styled.div`
  margin-top: 2.5rem;

  @media (min-width: 768px) {
    margin-top: 3.5rem;
  }

  @media (max-width: 1200px) {
    border-bottom: 1px dashed #afbec6;
    margin-top: 3.5rem;
  }

  @media (min-width: 1200px) {
    border-right: 1px dashed #afbec6;
  }
`;

const ListHeader = styled.div`
  display: flex;
  align-items: center;
`;

const Flag = styled.img`
  width: 32px;
  height: 32px;
`;

const CityCountry = styled.div`
  margin-left: 1rem;
`;

const City = styled.h3`
  margin: 0;
  padding-bottom: 0.25rem;
  font-weight: bold;
  line-height: 32px;
  font-size: 22px;

  color: #5b5b5c;

  color: #5b5b5c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Country = styled.p`
  margin: 0;
  font-weight: 500;
  line-height: 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;

  color: #a0b0b9;
`;

const List = styled.ul`
  list-style: none;
  padding-right: 1rem;
`;

const ListItem = styled.li`
  padding: 0.75rem 0;
  margin-left: -2.5rem;
  font-size: 1rem;
  color: #4a4a4a;
`;

const Price = styled.span`
  font-size: 1rem;
  color: #00bae8;
  float: right;
`;

const FirstNote = styled.p`
  line-height: 1.5rem;
  font-size: 1rem;
  text-align: center;
  color: #4a4a4a;

  @media (min-width: 768px) {
    line-height: 1.625rem;
  }
`;

const SecondNote = styled.p`
  line-height: 1.25rem;
  font-size: 0.875rem;
  text-align: center;
  color: #a0b0b9;

  @media (min-width: 768px) {
    line-height: 1.625rem;
  }
`;

export default function() {
  return (
    <BestPrice>
      <div className="container">
        <SectionTitleWrap>
          <Label />
          <TitleText>Лучшие цены на авиабилеты за последний месяц</TitleText>
        </SectionTitleWrap>
        <div className="row">
          <div className="col-xl-10 col-xl-offset-1 col-md-10 col-md-offset-1">
            <div className="row">
              <div className="col-xs-12 col-xl-4">
                <ListWrapper>
                  <ListHeader>
                    <Flag src={flagRu} alt="Россия" />
                    <CityCountry>
                      <City>Симферополь (Крым)</City>
                      <Country>Россия</Country>
                    </CityCountry>
                  </ListHeader>
                  <List>
                    <ListItem>
                      Из Москвы <Price>от 4 813 ₽</Price>
                    </ListItem>
                    <ListItem>
                      Из Санкт-Петербурга<Price>от 7 857 ₽</Price>
                    </ListItem>
                    <ListItem>
                      Из Новосибирска<Price>от 15 127 ₽</Price>
                    </ListItem>
                    <ListItem>
                      Из Екатеринбурга<Price>от 9 275 ₽</Price>
                    </ListItem>
                    <ListItem>
                      Из Челябинска<Price>от 9 148 ₽</Price>
                    </ListItem>
                  </List>
                </ListWrapper>
              </div>
              <div className="col-xs-12 col-xl-4">
                <ListWrapper>
                  <ListHeader>
                    <Flag src={flagRu} alt="Россия" />
                    <CityCountry>
                      <City>Симферополь (Крым)</City>
                      <Country>Россия</Country>
                    </CityCountry>
                  </ListHeader>
                  <List>
                    <ListItem>
                      Из Москвы <Price>от 4 813 ₽</Price>
                    </ListItem>
                    <ListItem>
                      Из Санкт-Петербурга<Price>от 7 857 ₽</Price>
                    </ListItem>
                    <ListItem>
                      Из Новосибирска<Price>от 15 127 ₽</Price>
                    </ListItem>
                    <ListItem>
                      Из Екатеринбурга<Price>от 9 275 ₽</Price>
                    </ListItem>
                    <ListItem>
                      Из Челябинска<Price>от 9 148 ₽</Price>
                    </ListItem>
                  </List>
                </ListWrapper>
              </div>
              <div className="col-xs-12 col-xl-4">
                <ListWrapper>
                  <ListHeader>
                    <Flag src={flagRu} alt="Россия" />
                    <CityCountry>
                      <City>Ереван</City>
                      <Country>Армения</Country>
                    </CityCountry>
                  </ListHeader>
                  <List>
                    <ListItem>
                      Из Москвы <Price>от 4 813 ₽</Price>
                    </ListItem>
                    <ListItem>
                      Из Санкт-Петербурга<Price>от 7 857 ₽</Price>
                    </ListItem>
                    <ListItem>
                      Из Сургута<Price>от 16 277 ₽</Price>
                    </ListItem>
                    <ListItem>
                      Из Краснодара<Price>от 11 741 ₽</Price>
                    </ListItem>
                    <ListItem>
                      Из Нового Уренгоя<Price>от 15 987 ₽</Price>
                    </ListItem>
                  </List>
                </ListWrapper>
              </div>
            </div>
          </div>
        </div>
        <div className="row center-md center-xl">
          <div className="col-xs-12 col-md-10 col-xl-6">
            <FirstNote>
              Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
              стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств
              и 728 авиакомпаний.
            </FirstNote>
            <SecondNote>
              Цены, найденные пользователями за последние 48 часов, не являются
              офертой.
            </SecondNote>
          </div>
        </div>
      </div>
    </BestPrice>
  );
}
