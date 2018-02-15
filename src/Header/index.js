import React, { Component } from "react";
import styled from "styled-components";

import Form from "./Form/";

import logo from "../assets/logo.svg";
import aero from "./aero.svg";

const Layout = styled.header`
  background: linear-gradient(148.48deg, #079dd4 22.46%, #196ebd 122.26%);
  height: 100vh;
`;

const Header = styled.div`
  padding: 0.75rem 0;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 2rem;
`;

const LogoTxt = styled.span`
  margin-left: 0.75rem;
  font-weight: 300;
  line-height: 25px;
  font-size: 20px;
  color: #ffffff;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
`;

const H1 = styled.h1`
  font-weight: bold;
  font-size: 1.25rem;
  text-align: center;
  color: #ffffff;

  @media (min-width: 768px) {
    line-height: 48px;
    font-size: 32px;
  }

  @media (min-width: 1440px) {
    line-height: 48px;
    font-size: 40px;
  }
`;

const H2 = styled.h2`
  font-weight: bold;
  font-size: 1.25rem;
  text-align: center;
  color: #ffffff;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 1440px) {
    line-height: normal;
    font-size: 24px;
    text-align: center;
    margin-bottom: 2.5rem;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff9241;
  border-radius: 4px;
  border: none;
  padding: 1rem 1rem;
  width: 100%;
  margin: 1rem auto 0 auto;

  &:hover {
    background: #d97d38;
  }

  @media (min-width: 768px) {
    max-width: 312px;
    margin-top: 2rem;
  }
  @media (min-width: 1440px) {
    max-width: 312px;
    margin-top: 3rem;
  }
`;

const Span = styled.span`
  font-weight: 900;
  font-size: 1.5rem;
  color: #ffffff;
  padding-right: 1rem;
`;

export default function() {
  return (
    <Layout>
      <div className="container">
        <Header>
          <LogoImg src={logo} alt="Aviasales" title="Aviasales" />
          <LogoTxt>aviasales</LogoTxt>
        </Header>
        <FormWrap>
          <div>
            <H1>Поиск дешевых авиабилетов</H1>
            <H2>Лучший способ купить авиабилеты дешево</H2>
            <Form />
            <Button>
              <Span>Найти билеты</Span>
              <img src={aero} alt="" />
            </Button>
          </div>
        </FormWrap>
      </div>
    </Layout>
  );
}
