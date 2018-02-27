import React from "react";
import styled from "styled-components";

import arrow from "./arrow.svg";
import clear from "./clear.svg";

const Transfer = styled.div`
  padding: 0.75rem 0.5rem;
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
  margin-left: 0.5rem;
`;

const Clear = styled.img`
  position: absolute;
  right: 0;
`;

const Checkboxes = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin-top: 1rem;
`;

const CheckboxWrap = styled.label`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 0 0.5rem;
  border-radius: 6px;

  &:hover {
    background-color: #f3fbff;
  }
`;

const CheckboxItem = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const All = CheckboxItem.extend``;

const WhitoutTransfer = CheckboxItem.extend``;

const OneTransfer = CheckboxItem.extend``;

const TwoTransfer = CheckboxItem.extend``;

const ThreeTransfer = CheckboxItem.extend``;

const Check = styled.input`
  margin-right: 0.5rem;
`;

const TransferName = styled.p`
  margin: 0;
  padding: 0.75rem 0;
  font-size: 12px;
  color: #4a4a4a;
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
        <CheckboxWrap>
          <Check type="checkbox" value="Все" />
          <All>
            <TransferName>Все</TransferName>
          </All>
        </CheckboxWrap>

        <CheckboxWrap>
          <Check type="checkbox" value="Без пересадок" />
          <WhitoutTransfer>
            <TransferName>Без пересадок</TransferName>
            <Price>7 712 ₽</Price>
          </WhitoutTransfer>
        </CheckboxWrap>

        <CheckboxWrap>
          <Check type="checkbox" value="Одна пересадка" />
          <OneTransfer>
            <TransferName>Одна пересадка</TransferName>
            <Price>11 150 ₽</Price>
          </OneTransfer>
        </CheckboxWrap>

        <CheckboxWrap>
          <Check type="checkbox" value="Две пересадки" />
          <TwoTransfer>
            <TransferName> Две пересадки</TransferName>
            <Price>16 821 ₽</Price>
          </TwoTransfer>
        </CheckboxWrap>

        <CheckboxWrap>
          <Check type="checkbox" value="Три пересадки" />
          <ThreeTransfer>
            <TransferName>Три пересадки</TransferName>
            <Price>16 821 ₽</Price>
          </ThreeTransfer>
        </CheckboxWrap>
      </Checkboxes>
    </Transfer>
  );
};
