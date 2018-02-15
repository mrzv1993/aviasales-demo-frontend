import React, { Component } from "react";
import styled from "styled-components";
import all from "./01-all.svg";
import beach from "./02-beach.svg";
import family from "./03-family.svg";
import history from "./04-history.svg";
import nightlife from "./05-nightlife.svg";
import shopping from "./06-shopping.svg";

const Wrapper = styled.div`
  width: 100%;
`;

const Nav = styled.div`
  width: 50%;
  display: inline-flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    width: 100%;
  }

  &:last-child {
    margin-top: 1.5rem;
  }
`;

const Tab = styled.div`
  width: 33.333333%;
  display: inline-flex;
  justify-content: center;
`;

const CategotyButton = styled.button`
  background: transparent;
  border: none;
  padding: 8px;
  padding-top: 64px;
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

const CategotyAll = CategotyButton.extend`
  border-bottom: 1px solid #00ace2;
  color: #5c5c5c;
  &:after {
    background-image: url(${all});
    box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.12);
  }
`;

const CategotyBeach = CategotyButton.extend`
  &:after {
    background-image: url(${beach});
  }
`;

const CategotyFamily = CategotyButton.extend`
  &:after {
    background-image: url(${family});
  }
`;

const CategotyHistory = CategotyButton.extend`
  &:after {
    background-image: url(${history});
  }
`;

const CategotyNightlife = CategotyButton.extend`
  &:after {
    background-image: url(${nightlife});
  }
`;

const CategotyShopping = CategotyButton.extend`
  &:after {
    background-image: url(${shopping});
  }
`;

export default function() {
  return (
    <Wrapper>
      <Nav>
        <Tab>
          <CategotyAll>
            КУДА<br />УГОДНО
          </CategotyAll>
        </Tab>
        <Tab>
          <CategotyBeach>
            Солнце<br />и море
          </CategotyBeach>
        </Tab>
        <Tab>
          <CategotyFamily>
            Шопинг,<br />город
          </CategotyFamily>
        </Tab>
      </Nav>
      <Nav>
        <Tab>
          <CategotyHistory>
            Культура<br />и история
          </CategotyHistory>
        </Tab>
        <Tab>
          <CategotyNightlife>
            Ночная<br />жизнь
          </CategotyNightlife>
        </Tab>
        <Tab>
          <CategotyShopping>
            Отдых<br />с детьми
          </CategotyShopping>
        </Tab>
      </Nav>
    </Wrapper>
  );
}
