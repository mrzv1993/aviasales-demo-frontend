import React, { Component } from "react";
import styled from "styled-components";
import logo from "./assets/logo.svg";

const Header = styled.header`
  background: linear-gradient(148.48deg, #079dd4 22.46%, #196ebd 122.26%);
`;

const Logo = styled.img`
  padding: 0.75rem 0;
`;

const Title = styled.h2`
  margin-top: 3rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 1.25rem;
  text-align: center;

  color: #ffffff;
`;

const Input = styled.input`
  border: none;
  padding: 1rem 1rem;
  width: 100%;
`;

const DepartInput = Input.extend`
  border: none;
  padding: 1rem 1rem;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

const ComingInput = Input.extend`
  margin-top: 2px;
`;

const HeaderButtons = styled.div`
  margin-top: 2px;
`;

const Button = styled.button`
  background-color: #ffffff;
  border: none;
  padding: 1rem 1rem;
  width: 50%;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;

  color: #a0b0b9;
  text-align: left;
`;

const DepartButton = Button.extend`
  margin-right: 2px;
`;

const ReturnButton = Button.extend`
  width: calc(50% - 2px);
`;

const PassengerButton = Button.extend`
  margin-top: 2px;
  width: 100%;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const SearchButton = styled.button`
  background: #ff9241;
  border-radius: 4px;
  border: none;
  padding: 1rem 1rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 5.5rem;
  margin-top: 1rem;
  width: 100%;
`;

export default function() {
  return (
    <Header>
      <div className="container">
        <Logo src={logo} alt="Aviasales" title="Aviasales" />
        <Title>Поиск дешевых авиабилетов</Title>
        <DepartInput placeholder="Город вылета" value="Владивосток" />
        <ComingInput placeholder="Город прибытия" />
        <HeaderButtons>
          <DepartButton>Туда</DepartButton>
          <ReturnButton>Обратно</ReturnButton>
        </HeaderButtons>
        <PassengerButton>1 пассажир, эконом</PassengerButton>
        <SearchButton>Найти билеты</SearchButton>
      </div>
    </Header>
  );
}
