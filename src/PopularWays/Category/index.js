import React, { Component } from "react";
import styled from "styled-components";
import all from "./01-all.svg";
import beach from "./02-beach.svg";
import family from "./03-family.svg";
import history from "./04-history.svg";
import nightlife from "./05-nightlife.svg";
import shopping from "./06-shopping.svg";

const Nav = styled.div`
  padding-top: 48px;
  display: flex;
  justify-content: space-around;
`;

const NavSecond = Nav.extend`
  margin-top: 1.5rem;
`;

const CategotyButton = styled.button`
  background: transparent;
  border: none;
  padding: 8px;
  position: relative;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;

  color: #00ace2;

  &:after {
    position: absolute;
    top: -48px;
    left: 0;
    right: 0;
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
    <div className="row">
      <div className="col-xs-12 col-md-6">
        <Nav>
          <CategotyAll>
            КУДА<br />УГОДНО
          </CategotyAll>
          <CategotyBeach>
            Солнце<br />и море
          </CategotyBeach>
          <CategotyFamily>
            Шопинг,<br />город
          </CategotyFamily>
        </Nav>
      </div>
      <div className="col-xs-12 col-md-6">
        <NavSecond>
          <CategotyHistory>
            Культура<br />и история
          </CategotyHistory>
          <CategotyNightlife>
            Ночная<br />жизнь
          </CategotyNightlife>
          <CategotyShopping>
            Отдых<br />с детьми
          </CategotyShopping>
        </NavSecond>
      </div>
    </div>
  );
}
