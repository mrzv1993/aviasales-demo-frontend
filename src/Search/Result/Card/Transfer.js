import React from "react";
import styled from "styled-components";

import arrow from "./arrow.svg";
import clear from "./clear.svg";
import check from "./check.svg";
import checked from "./checked.svg";

const Transfer = styled.div`
  padding: 0.75rem 1rem;
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
    <Transfer>
      <Title>
        <Arrow src={arrow} alt="Раскрыть" />
        Пересадки
        <Clear src={clear} alt="Сбросить фильтр" />
      </Title>

      <Checkboxes>
        <Checkbox>
          <All>
            <Check src={check} alt="checkbox" />
            Все
          </All>
        </Checkbox>

        <Checkbox>
          <WhitoutTransfer>
            <Check src={checked} alt="checkbox" />
            Без пересадок
          </WhitoutTransfer>
          <Price>7 712 ₽</Price>
        </Checkbox>

        <Checkbox>
          <OneTransfer>
            <Check src={check} alt="checkbox" />
            Одна пересадка
          </OneTransfer>
          <Price>11 150 ₽</Price>
        </Checkbox>

        <Checkbox>
          <TwoTransfer>
            <Check src={check} alt="checkbox" />
            Две пересадки
          </TwoTransfer>
          <Price>16 821 ₽</Price>
        </Checkbox>

        <Checkbox>
          <ThreeTransfer>
            <Check src={check} alt="checkbox" />
            Три пересадки
          </ThreeTransfer>
          <Price>23 986 ₽</Price>
        </Checkbox>
      </Checkboxes>
    </Transfer>
  );
};
