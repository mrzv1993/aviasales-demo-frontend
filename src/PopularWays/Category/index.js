import React, { Component } from "react";
import styled from "styled-components";
import all from "./01-all.svg";
import beach from "./02-beach.svg";
import family from "./03-family.svg";
import history from "./04-history.svg";
import nightlife from "./05-nightlife.svg";
import shopping from "./06-shopping.svg";

const CategotyButton = styled.button`
  background: #ffffff;
  width: 3rem;
  height: 3rem;
  border: none;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.12);
  border-radius: 50%;
`;

const CategotyAll = CategotyButton.extend`
  background-image: url(${all});
`;

const CategotyBeach = CategotyButton.extend`
  background-image: url(${beach});
`;

const CategotyFamily = CategotyButton.extend`
  background-image: url(${family});
`;

const CategotyHistory = CategotyButton.extend`
  background-image: url(${history});
`;

const CategotyNightlife = CategotyButton.extend`
  background-image: url(${nightlife});
`;

const CategotyShopping = CategotyButton.extend`
  background-image: url(${shopping});
`;

export default function() {
  return (
    <div className="row">
      <div className="col-xs-12 col-md-6">
        <CategotyAll />
        <CategotyBeach />
        <CategotyFamily />
      </div>
      <div className="col-xs-12 col-md-6">
        <CategotyHistory />
        <CategotyNightlife />
        <CategotyShopping />
      </div>
    </div>
  );
}
