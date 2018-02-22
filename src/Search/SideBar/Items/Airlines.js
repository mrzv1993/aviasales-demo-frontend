import React from "react";
import styled from "styled-components";

import arrow from "./arrow.svg";
import clear from "./clear.svg";
import check from "./check.svg";
import checked from "./checked.svg";

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

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #4a4a4a;
  flex-wrap: wrap;
`;

const Check = styled.img`
  margin-right: 0.5rem;
`;

const Price = styled.p`
  font-size: 0.75rem;
  color: #a0b0b9;
`;

const Info = styled.p`
  font-size: 0.75rem;
  color: #4a4a4a;
  line-height: 1rem;
  margin: 0;
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
        <Checkbox>
          <Several>
            <Check src={check} alt="checkbox" />
            Несколько авиакомпаний
          </Several>
          <Info>
            Показывать билеты с перелетами, выполняемыми несколькими
            авиакомпаниями, включая выбранную
          </Info>
        </Checkbox>

        <Group>
          <SubTitle>Альянсы</SubTitle>
          <Checkbox>
            <All>
              <Check src={checked} alt="checkbox" />
              Все
            </All>
            <Price>7 712 ₽</Price>
          </Checkbox>

          <Checkbox>
            <StarAlliance>
              <Check src={checked} alt="checkbox" />
              Star Alliance
            </StarAlliance>
            <Price>11 150 ₽</Price>
          </Checkbox>

          <Checkbox>
            <OneWorld>
              <Check src={checked} alt="checkbox" />
              OneWorld
            </OneWorld>
            <Price>12 370 ₽</Price>
          </Checkbox>

          <Checkbox>
            <SkyTeam>
              <Check src={checked} alt="checkbox" />
              SkyTeam
            </SkyTeam>
            <Price>16 290 ₽</Price>
          </Checkbox>
        </Group>

        <Group>
          <SubTitle>Авиакомпании</SubTitle>
          <Checkbox>
            <All>
              <Check src={checked} alt="checkbox" />
              Все
            </All>
            <Price>7 712 ₽</Price>
          </Checkbox>

          <Checkbox>
            <AegeanAirlines>
              <Check src={checked} alt="checkbox" />
              Aegean Airlines
            </AegeanAirlines>
            <Price>20 357 ₽</Price>
          </Checkbox>

          <Checkbox>
            <AirAlgerie>
              <Check src={checked} alt="checkbox" />
              Air Algerie
            </AirAlgerie>
            <Price>29 105 ₽</Price>
          </Checkbox>

          <Checkbox>
            <AirEuropa>
              <Check src={checked} alt="checkbox" />
              Air Europa
            </AirEuropa>
            <Price>22 202 ₽</Price>
          </Checkbox>

          <Checkbox>
            <AirFrance>
              <Check src={checked} alt="checkbox" />
              Air France
            </AirFrance>
            <Price>17 050 ₽</Price>
          </Checkbox>

          <Checkbox>
            <AirMoldova>
              <Check src={checked} alt="checkbox" />
              Air Moldova
            </AirMoldova>
            <Price>22 613 ₽</Price>
          </Checkbox>

          <Checkbox>
            <Alitalia>
              <Check src={checked} alt="checkbox" />
              Alitalia
            </Alitalia>
            <Price>22 717 ₽</Price>
          </Checkbox>

          <Checkbox>
            <AlitaliaCityLiner>
              <Check src={checked} alt="checkbox" />
              Alitalia CityLiner
            </AlitaliaCityLiner>
            <Price>20 271 ₽</Price>
          </Checkbox>

          <Checkbox>
            <BelleAir>
              <Check src={checked} alt="checkbox" />
              Belle Air
            </BelleAir>
            <Price>18 371 ₽</Price>
          </Checkbox>

          <Checkbox>
            <BritishAirways>
              <Check src={checked} alt="checkbox" />
              British Airways
            </BritishAirways>
            <Price>23 839 ₽</Price>
          </Checkbox>

          <Checkbox>
            <BrusselsAirlines>
              <Check src={checked} alt="checkbox" />
              Brussels Airlines
            </BrusselsAirlines>
            <Price>11 150 ₽</Price>
          </Checkbox>

          <Checkbox>
            <BulgariaAir>
              <Check src={checked} alt="checkbox" />
              Bulgaria Air
            </BulgariaAir>
            <Price>20 114 ₽</Price>
          </Checkbox>
        </Group>
      </Checkboxes>
    </Transfer>
  );
};
