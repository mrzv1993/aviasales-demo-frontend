import React, { Component } from "react";
import styled from "styled-components";
import barca from "./barca@1x.jpg";
import barca2x from "./barca@2x.jpg";

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;
  overflow: hidden;
  margin-top: 1rem;
`;

const CardCover = styled.img`
  width: 100%;
  background-size: cover;
`;

const CardData = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
`;

export default function() {
  return (
    <Card>
      <CardCover
        src={barca}
        srcset={barca2x}
        alt="Aviasales"
        title="Aviasales"
      />
      <CardData>
        <div className="LeftData">
          <h3>Краснодар</h3>
          <p>asd</p>
        </div>
        <div className="RightData">
          <h3>Найти от 1 334 ₽</h3>
          <p>19 февраля</p>
        </div>
      </CardData>
    </Card>
  );
}
