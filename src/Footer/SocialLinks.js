import React, { Component } from "react";
import styled from "styled-components";
import Marketplace from "./Marketplace";

import vk from "./vk.svg";
import tw from "./tw.svg";
import inst from "./inst.svg";
import fb from "./fb.svg";
import viber from "./viber.svg";

const SocialLinks = styled.div`
  padding-top: 1.5rem;
`;

const Links = styled.div``;

const LeftLinks = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const StoreLinks = styled.div``;

const AboutLinks = styled.nav``;

const NetLinks = styled.nav`
  margin-top: 1.5rem;
`;

const Link = styled.a`
  margin-right: 1rem;
  line-height: 2rem;
  font-size: 0.75rem;
  text-decoration: none;
  color: #5b5b5c;
  padding: 0.5rem 0;
`;

const NetImg = styled.img`
  padding-right: 0.5rem;
`;

const Info = styled.p`
  line-height: 1rem;
  font-size: 0.75rem;
  display: block;
  color: #5b5b5c;
  margin-top: 1.5rem;
`;

const CopyRight = Info.extend`
  text-align: right;
`;

export default function() {
  return (
    <SocialLinks>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="row">
              <AboutLinks>
                <Link href="#">О компании</Link>
                <Link href="#">Партнерская программа</Link>
                <Link href="#">Реклама</Link>
                <Link href="#">Вакансии</Link>
                <Link href="#">Помощь</Link>
                <Link href="#">Правила</Link>
                <Link href="#">White Label авиабилеты</Link>
              </AboutLinks>
              <NetLinks>
                <Link href="#">
                  <NetImg src={vk} />Вконтакте
                </Link>
                <Link href="#">
                  <NetImg src={fb} />Фейсбук
                </Link>
                <Link href="#">
                  <NetImg src={inst} />Инстаграм
                </Link>
                <Link href="#">
                  <NetImg src={tw} />Твиттер
                </Link>
                <Link href="#">
                  <NetImg src={viber} />Вайбер
                </Link>
              </NetLinks>
            </div>
            <div className="row center-xs start-md ">
              <Info>Поиск и бронирование отелей</Info>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row center-xs start-md end-xl ">
              <Marketplace />
            </div>
            <div className="row center-xs start-md end-xl ">
              <CopyRight>© 2007–2018, Aviasales — дешевые авиабилеты</CopyRight>
            </div>
          </div>
        </div>
      </div>
    </SocialLinks>
  );
}
