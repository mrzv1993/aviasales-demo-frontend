import React, { Component } from "react";
import styled from "styled-components";

const MainArticles = styled.section`
  background: #ffffff;
`;

export default function() {
  return (
    <MainArticles>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h3>asds</h3>
            <p>Билеты от 499 рублей!</p>
          </div>
          <div className="col-xs-12">
            <h3>asds</h3>
            <p>два</p>
          </div>
          <div className="col-xs-12">
            <h3>asds</h3>
            <p>три</p>
          </div>
        </div>
      </div>
    </MainArticles>
  );
}
