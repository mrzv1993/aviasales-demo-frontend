import React, { Component } from "react";
import styled from "styled-components";

import aero from "./aero.svg";
import at from "./at.svg";
import list from "./list.svg";

const MainArticles = styled.section`
  background: #ffffff;
  padding: 1.5rem 0;
`;

const Title = styled.div`
  font-weight: bold;
  line-height: 18px;
  font-size: 13px;
  display: flex;
  align-items: baseline;
  color: #4a4a4a;
  margin-top: 1.25rem;
`;

const Txt = styled.h3`
  font-weight: bold;
  line-height: 18px;
  font-size: 13px;
  display: inline-block;
  padding-left: 0.5rem;
  margin: 0;

  color: #4a4a4a;
`;

const TitleImg = styled.img`
  height: 16px;
`;

const Article = styled.p`
  margin: 0;
  margin-top: 1rem;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  text-align: left;

  color: #4a4a4a;
`;

const Link = styled.a`
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;

  color: #00ace2;
  text-decoration: none;
`;

export default function() {
  return (
    <MainArticles>
      <div className="container">
        <div className="row center-xl">
          <div className="col-xs-12 col-xl-10">
            <div className="row">
              <div className="col-xs-12">
                <Title>
                  <TitleImg src={aero} />
                  <Txt>КАК КУПИТЬ ДЕШЕВЫЕ АВИАБИЛЕТЫ?</Txt>
                </Title>

                <Article>
                  Aviasales.ru — это метапоисковик авиабилетов. Мы ищем билеты
                  на самолет по сотням авиакомпаний и находим за считанные
                  минуты самые дешевые авиабилеты. Чтобы купить авиабилет
                  дешево, воспользуйтесь нашим поиском, который совершенно
                  бесплатно сравнивает цены на авиабилеты онлайн и находит самые
                  дешевые перелеты. Больше нет смысла ходить в авиакассы,
                  обзванивать агентства — дешевый билет находится на расстоянии
                  клика. На нашем сайте вы можете подобрать дешевые билеты на
                  самолет в Европу, Азию и на другие континенты. Мы написали для
                  вас простую инструкцию о том, как пользоваться поиском и
                  экономить на перелетах от 1000 до 20 000 руб в год.{" "}
                  <Link href="#">Подробнее</Link>
                </Article>
              </div>
              <div className="col-xs-12">
                <Title>
                  <TitleImg src={at} />
                  <Txt>ЭЛЕКТРОННЫЙ АВИАБИЛЕТ</Txt>
                </Title>

                <Article>
                  Электронный авиабилет — это, по сути, обычный билет на
                  самолет, но только в менее привычном для путешественника виде.
                  Вся информация об авиаперелете (данные пассажира, маршрут
                  следования) хранится в электронной базе, а пассажир получает
                  на руки маршрут-квитанцию. Некоторые пассажиры, купив
                  авиабилет онлайн и получив маршрут-квитанцию, удивлены ее
                  видом — это обыкновенный лист формата А4, на котором
                  распечатана вся информация о предстоящем перелете. Однако это
                  действительно официальный документ, подтверждающий договор
                  между авиаперевозчиком и пассажиром. При регистрации на рейс
                  пассажир должен предъявить маршрут-квитанцию вместе с
                  удостоверением личности точно так же, как предъявляют
                  обыкновенный бумажный билет. Следует отметить, что электронный
                  билет, приобретенный онлайн, стоит дешевле своего бумажного
                  аналога. <Link href="#">Подробнее</Link>
                </Article>
              </div>
              <div className="col-xs-12">
                <Title>
                  <TitleImg src={list} />
                  <Txt>20 СОВЕТОВ АВИАПУТЕШЕСТВЕННИКАМ</Txt>
                </Title>
                <Article>
                  Есть масса путеводителей по странам, но ни одного о том, как
                  провести время в самолете. Для того, чтобы сделать ваш перелет
                  максимально комфортным, мы написали 20 советов о подготовке к
                  путешествию. Ведь настоящее путешествие начинается со слов
                  «Добро пожаловать на борт нашего самолета»!{" "}
                  <Link href="#">Подробнее</Link>
                </Article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainArticles>
  );
}
