import React from "react";
import styled from "styled-components";

import arrow from "./arrow.svg";

const Transfer = styled.div`
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

const SubTitle = styled.h3`
  font-weight: bold;
  font-size: 0.75rem;
  color: #323333;
  margin-top: 1.5rem;
`;

const Count = styled.span`
  font-weight: 500;
  font-size: 0.75rem;
  text-transform: uppercase;
  margin-left: 0.5rem;
  color: #a0b0b9;
`;

const Arrow = styled.img`
  margin-right: 0.5rem;
`;

const Info = styled.p`
  font-size: 0.75rem;
  color: #4a4a4a;
  line-height: 1rem;
  margin: 0;
  margin-top: 0.125rem;
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

const Several = CheckboxItem.extend``;

const All = CheckboxItem.extend``;

const StarAlliance = CheckboxItem.extend``;

const OneWorld = CheckboxItem.extend``;

const SkyTeam = CheckboxItem.extend``;

const AegeanAirlines = CheckboxItem.extend``;

const AirAlgerie = CheckboxItem.extend``;

const AirEuropa = CheckboxItem.extend``;

const AirFrance = CheckboxItem.extend``;

const AirMoldova = CheckboxItem.extend``;

const Alitalia = CheckboxItem.extend``;

const AlitaliaCityLiner = CheckboxItem.extend``;

const BelleAir = CheckboxItem.extend``;

const BritishAirways = CheckboxItem.extend``;

const BrusselsAirlines = CheckboxItem.extend``;

const BulgariaAir = CheckboxItem.extend``;

const Check = styled.input`
  margin-right: 0.5rem;
`;

const AirName = styled.p`
  margin: 0;
  padding: 0.75rem 0;
  font-size: 12px;
  color: #4a4a4a;
`;

const Price = styled.p`
  font-size: 0.75rem;
  color: #a0b0b9;
`;

const Group = styled.div``;

export default () => {
  return (
    <Transfer>
      <Title>
        <Arrow src={arrow} alt="Раскрыть" />
        Авиакомпании <Count>43</Count>
      </Title>

      <Checkboxes>
        <CheckboxWrap>
          <Check type="checkbox" value="Несколько авиакомпаний" />
          <Several>
            <AirName>Несколько авиакомпаний</AirName>
          </Several>
        </CheckboxWrap>
        <Info>
          Показывать билеты с перелетами, выполняемыми несколькими
          авиакомпаниями, включая выбранную
        </Info>

        <Group>
          <SubTitle>Альянсы</SubTitle>

          <CheckboxWrap>
            <Check type="checkbox" value="Все" />
            <All>
              <AirName>Все</AirName>
            </All>
          </CheckboxWrap>

          <CheckboxWrap>
            <Check type="checkbox" value="Star Alliance" />
            <StarAlliance>
              <AirName> Star Alliance</AirName>
              <Price>11 150 ₽</Price>
            </StarAlliance>
          </CheckboxWrap>

          <CheckboxWrap>
            <Check type="checkbox" value="OneWorld" />
            <OneWorld>
              <AirName>OneWorld</AirName>
              <Price>12 370 ₽</Price>
            </OneWorld>
          </CheckboxWrap>

          <CheckboxWrap>
            <Check type="checkbox" value=" SkyTeam" />
            <SkyTeam>
              <AirName> SkyTeam</AirName>
              <Price>16 290 ₽</Price>
            </SkyTeam>
          </CheckboxWrap>
        </Group>

        <Group>
          <SubTitle>Авиакомпании</SubTitle>
          <CheckboxWrap>
            <Check type="checkbox" value="Все" />
            <All>
              <AirName>Все</AirName>
            </All>
          </CheckboxWrap>

          <CheckboxWrap>
            <Check type="checkbox" value=" Aegean Airlines" />
            <AegeanAirlines>
              <AirName> Aegean Airlines</AirName>
              <Price>20 357 ₽</Price>
            </AegeanAirlines>
          </CheckboxWrap>

          <CheckboxWrap>
            <Check type="checkbox" value="Air Algerie" />
            <AirAlgerie>
              <AirName> Air Algerie</AirName>
              <Price>29 105 ₽</Price>
            </AirAlgerie>
          </CheckboxWrap>

          <CheckboxWrap>
            <Check type="checkbox" value="Air Europa" />
            <AirEuropa>
              <AirName>Air Europa</AirName>
              <Price>22 202 ₽</Price>
            </AirEuropa>
          </CheckboxWrap>

          <CheckboxWrap>
            <Check type="checkbox" value=" Air France" />
            <AirFrance>
              <AirName> Air France</AirName>
              <Price>17 050 ₽</Price>
            </AirFrance>
          </CheckboxWrap>

          <CheckboxWrap>
            <Check type="checkbox" value="Air Moldova" />
            <AirMoldova>
              <AirName> Air Moldova</AirName>
              <Price>22 613 ₽</Price>
            </AirMoldova>
          </CheckboxWrap>

          <CheckboxWrap>
            <Check type="checkbox" value="Alitalia" />
            <Alitalia>
              <AirName>Alitalia</AirName>

              <Price>22 717 ₽</Price>
            </Alitalia>
          </CheckboxWrap>

          <CheckboxWrap>
            <Check type="checkbox" value=" Alitalia CityLiner" />
            <AlitaliaCityLiner>
              <AirName>Alitalia CityLiner</AirName>

              <Price>20 271 ₽</Price>
            </AlitaliaCityLiner>
          </CheckboxWrap>

          <CheckboxWrap>
            <Check type="checkbox" value=" Belle Air" />
            <BelleAir>
              <AirName>Belle Air</AirName>

              <Price>18 371 ₽</Price>
            </BelleAir>
          </CheckboxWrap>

          <CheckboxWrap>
            <Check type="checkbox" value=" British Airways" />
            <BritishAirways>
              <AirName>British Airways</AirName>

              <Price>23 839 ₽</Price>
            </BritishAirways>
          </CheckboxWrap>

          <CheckboxWrap>
            <Check type="checkbox" value=" Brussels Airlines" />
            <BrusselsAirlines>
              <AirName> Brussels Airlines</AirName>

              <Price>11 150 ₽</Price>
            </BrusselsAirlines>
          </CheckboxWrap>

          <CheckboxWrap>
            <Check type="checkbox" value=" Bulgaria Air" />
            <BulgariaAir>
              <AirName>Bulgaria Air</AirName>
              <Price>20 114 ₽</Price>
            </BulgariaAir>
          </CheckboxWrap>
        </Group>
      </Checkboxes>
    </Transfer>
  );
};
