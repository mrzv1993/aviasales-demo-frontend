import React from "react";
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

const AboutLinks = styled.div`
  width: 100%;
  display; flex;
  flex-wrap: wrap;
`;

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
          <div className="col-xs-12">
            <div className="row">
              <div className="col-md-12 col-xl-6">
                <AboutLinks>
                  <Link href="#">О&nbsp;компании</Link>
                  <Link href="#">Партнерская&nbsp;программа</Link>
                  <Link href="#">Реклама</Link>
                  <Link href="#">Вакансии</Link>
                  <Link href="#">Помощь</Link>
                  <Link href="#">Правила </Link>
                  <Link href="#">White&nbsp;Label&nbsp;авиабилеты</Link>
                </AboutLinks>
                <NetLinks>
                  <Link href="#">
                    <NetImg src={vk} />&nbsp;Вконтакте
                  </Link>
                  <Link href="#">
                    <NetImg src={fb} />&nbsp;Фейсбук
                  </Link>
                  <Link href="#">
                    <NetImg src={inst} />&nbsp;Инстаграм
                  </Link>
                  <Link href="#">
                    <NetImg src={tw} />&nbsp;Твиттер
                  </Link>
                  <Link href="#">
                    <NetImg src={viber} />&nbsp;Вайбер
                  </Link>
                </NetLinks>
                <div className="row center-xs">
                  <div className="col-xs-12">
                    <Info>Поиск и бронирование отелей</Info>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-xl-6">
                <div className="row center-xs">
                  <div className="col-xs-12">
                    <Marketplace />
                    <CopyRight>
                      © 2007–2018, Aviasales — дешевые авиабилеты
                    </CopyRight>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SocialLinks>
  );
}
