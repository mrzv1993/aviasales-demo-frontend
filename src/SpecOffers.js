import React, { Component } from "react";
import styled from "styled-components";

const SpecOffers = styled.section`
  background: linear-gradient(162.96deg, #00b0de 41.41%, #196ebd 141.41%);
`;

export default function() {
  return (
    <SpecOffers>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h2>Спецпредложения на авиабилеты</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <p>Билеты от 499 рублей!</p>
          </div>
          <div className="col-xs-12">
            <p>два</p>
          </div>
          <div className="col-xs-12">
            <p>три</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <p>Смотреть все спецпредложения</p>
          </div>
          <div className="col-xs-12">
            <p>* средняя цена по направлению</p>
          </div>
        </div>
      </div>
    </SpecOffers>
  );
}
