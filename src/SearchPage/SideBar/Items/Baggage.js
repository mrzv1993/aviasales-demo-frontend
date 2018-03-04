import React from "react";
import styled from "styled-components";

import arrow from "./arrow.svg";

const Baggage = styled.div`
  padding: 0.75rem 1rem;
  border-top: 1px solid #dddddd;
`;

const Title = styled.h2`
  position: relative;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 0.75rem;
  text-transform: uppercase;

  color: #5b5b5c;
`;

const Arrow = styled.img`
  margin-right: 0.5rem;
`;

export default () => {
  return (
    <Baggage>
      <Title>
        <Arrow src={arrow} alt="Раскрыть" />
        Багаж
      </Title>
    </Baggage>
  );
};
