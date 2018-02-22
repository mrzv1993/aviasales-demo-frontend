import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

import prev from "./prev-arrow.svg";
import menu from "./menu.svg";
import message from "./message.svg";
import userImg from "./user-img.svg";

import Logo from "../../Main/Header/Logo";

const Header = styled.div``;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PrevPage = styled.button`
  background-image: url(${prev});
  background-position: center center;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  height: 2rem;
  width: 2rem;
`;

const Flight = styled.div`
  font-weight: 500;
  line-height: 20px;
  font-size: 16px;
  width: 100%;
  margin-left: 1rem;

  color: #ffffff;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 1rem;
  margin: 0;

  color: #ffffff;
`;

const Date = styled.p`
  font-weight: 500;
  line-height: 1rem;
  font-size: 0.75rem;
  margin: 0.5rem 0 0 0;

  color: #ffffff;
`;

const NavButtons = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 100px;
  height: 36px;
  color: #ffffff;
  margin-right: 0.5rem;
`;

const Value = NavButtons.extend`
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;
  padding: 0 1.25rem;
`;

const Message = NavButtons.extend`
  width: 36px;
`;

const User = NavButtons.extend`
  position: relative;
  width: 36px;
`;

const Notification = styled.div`
  position: absolute;
  background-color: #ff6400;
  border-radius: 50%;
  top: -2px;
  right: -10px;
  height: 20px;
  width: 20px;
  font-weight: 900;
  font-size: 0.875rem;
  line-height: 20px;
  text-align: center;
`;

const Menu = styled.button`
  background-color: transparent;
  border: none;
`;

const FilterButton = styled.button`
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 1rem;
  max-width: 160px;
  background-color: #00ace2;
  border: none;
  border-radius: 100px;
  padding: 0.75rem 1.25rem;
  font-weight: 900;
  line-height: normal;
  font-size: 1rem;

  color: #ffffff;
`;

export default function() {
  return (
    <Header>
      <div className="row hidden-sm hidden-md hidden-lg hidden-xl">
        <div className="col-xs-12">
          <NavBar>
            <Link to="/">
              <PrevPage />
            </Link>
            <Flight>
              <Title>Москва — Барселона</Title>
              <Date>24 фев — 3 март, 1 пассажир</Date>
            </Flight>
            <Value>Rub</Value>
          </NavBar>
        </div>
      </div>
      <div className="row hidden-xs">
        <div className="col-xs-12">
          <div className="row between-sm end-sm">
            <div className="col-sm-6">
              <Logo />
            </div>
            <div className="col-sm-6">
              <Value>RUB</Value>
              <Message>
                <img src={message} alt="Сообщение" />
              </Message>
              <User>
                <Notification>1</Notification>
                <img src={userImg} alt="Профиль" />
              </User>
              <Menu>
                <img src={menu} alt="Меню" />
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
}
