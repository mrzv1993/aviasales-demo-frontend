import React from "react";
import styled from "styled-components";

import arrow from "./arrow.svg";
import clear from "./clear.svg";

const DepartureTime = styled.div`
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

const Clear = styled.img`
  position: absolute;
  right: 0;
`;

const Checkboxes = styled.div``;

const CheckboxItem = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  font-size: 0.75rem;
  color: #4a4a4a;
`;

const All = CheckboxItem.extend``;

const WhitoutTransfer = CheckboxItem.extend``;

const OneTransfer = CheckboxItem.extend``;

const TwoTransfer = CheckboxItem.extend``;

const ThreeTransfer = CheckboxItem.extend``;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #4a4a4a;
`;

const Check = styled.img`
  margin-right: 0.5rem;
`;

const Price = styled.p`
  font-size: 0.75rem;
  color: #a0b0b9;
`;

export default () => {
  return (
    <DepartureTime>
      <Title>
        <Arrow src={arrow} alt="Раскрыть" />
        Время вылета и прибытия
      </Title>
    </DepartureTime>
  );
};
