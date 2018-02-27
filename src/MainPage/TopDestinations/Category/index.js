import React from "react";
import styled from "styled-components";
import all from "./01-all.svg";
import beach from "./02-beach.svg";
import family from "./03-family.svg";
import history from "./04-history.svg";
import nightlife from "./05-nightlife.svg";
import shopping from "./06-shopping.svg";

const Category = styled.div`
  width: 100%;
  margin-top: 2rem;

  @media (min-width: 768px) {
    margin-top: 2.5rem;
  }
`;

const Nav = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;

  @media (min-width: 767px) {
    width: 50%;
  }

  &:last-child {
    margin-top: 2rem;
  }
`;

const Tab = styled.div`
  width: 33.333333%;
  display: inline-flex;
  justify-content: center;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  padding: 8px;
  padding-top: 56px;
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: center;
  text-transform: uppercase;
  color: #00ace2;
  position: relative;

  &:after {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin-left: auto;
    margin-right: auto;
    content: "";
    background-image: url(${all});
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0px 2px 4px rgba(74, 74, 74, 0.1);
    width: 48px;
    height: 48px;
    background-color: #fff;
    border-radius: 50%;
  }

  &:hover {
    color: #5c5c5c;
  }
`;

const All = Button.extend`
  border-bottom: 1px solid #00ace2;
  color: #5c5c5c;
  &:after {
    background-image: url(${all});
    box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.12);
  }
`;

const Beach = Button.extend`
  &:after {
    background-image: url(${beach});
  }
`;

const Family = Button.extend`
  &:after {
    background-image: url(${family});
  }
`;

const History = Button.extend`
  &:after {
    background-image: url(${history});
  }
`;

const Nightlife = Button.extend`
  &:after {
    background-image: url(${nightlife});
  }
`;

const Shopping = Button.extend`
  &:after {
    background-image: url(${shopping});
  }
`;

export default function() {
  return (
    <Category>
      <Nav>
        <Tab>
          <All type="button">
            КУДА<br />УГОДНО
          </All>
        </Tab>
        <Tab>
          <Beach type="button">
            Солнце<br />и море
          </Beach>
        </Tab>
        <Tab>
          <Family type="button">
            Шопинг,<br />город
          </Family>
        </Tab>
      </Nav>
      <Nav>
        <Tab>
          <History type="button">
            Культура<br />и история
          </History>
        </Tab>
        <Tab>
          <Nightlife type="button">
            Ночная<br />жизнь
          </Nightlife>
        </Tab>
        <Tab>
          <Shopping type="button">
            Отдых<br />с детьми
          </Shopping>
        </Tab>
      </Nav>
    </Category>
  );
}
