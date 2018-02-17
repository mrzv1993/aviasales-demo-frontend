import React, { Component } from "react";
import styled from "styled-components";
import Marketplace from "./Marketplace";

const Nav = styled.nav`
  display: block;
  width: 100%;
  margin-top: 1rem;
`;

const ListFooterLink = styled.div`
  display: flex;
`;

const Link = styled.a`
  line-height: 16px;
  font-size: 12px;

  color: #5b5b5c;
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem;
`;

const StoreCopyright = styled.div`
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  text-align: center;

  color: #5b5b5c;
`;

const Note = styled.p`
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  text-align: center;

  color: #5b5b5c;
`;

const CopyRight = styled.p`
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  text-align: center;

  color: #5b5b5c;
`;

export default function() {
  return (
    <ListFooterLink>
      <div className="row">
        <div className="col-xs-12">
          <Nav>
            <Link href="#">О компании</Link>
            <Link href="#">Партнерска программа</Link>
            <Link href="#">Реклама</Link>
            <Link href="#">Вакансии</Link>
            <Link href="#">Помощь</Link>
            <Link href="#">Правила</Link>
            <Link href="#">White Label авиабилеты</Link>
          </Nav>
          <Nav>
            <Link href="#">Вконтакте</Link>
            <Link href="#">Фейсбук</Link>
            <Link href="#">Инстаграм</Link>
            <Link href="#">Твиттер</Link>
            <Link href="#">Вайбер</Link>
          </Nav>
          <Note>Поиск и бронирование отелей</Note>
        </div>
        <div className="col-xs-12">
          <Marketplace />
          <CopyRight>© 2007–2018, Aviasales — дешевые авиабилеты</CopyRight>
        </div>
      </div>
    </ListFooterLink>
  );
}
