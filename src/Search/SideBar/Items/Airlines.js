import React from "react";
import styled from "styled-components";

import arrow from "./arrow.svg";
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

const Checkbox = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #4a4a4a;
  flex-wrap: wrap;
  cursor: pointer;
`;

const Check = styled.input`
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
            <Check type="checkbox" value="Одна пересадка" />
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
              <Check type="checkbox" value="Одна пересадка" />
              Все
            </All>
            <Price>7 712 ₽</Price>
          </Checkbox>

          <Checkbox>
            <StarAlliance>
              <Check type="checkbox" value="Одна пересадка" />
              Star Alliance
            </StarAlliance>
            <Price>11 150 ₽</Price>
          </Checkbox>

          <Checkbox>
            <OneWorld>
              <Check type="checkbox" value="Одна пересадка" />
              OneWorld
            </OneWorld>
            <Price>12 370 ₽</Price>
          </Checkbox>

          <Checkbox>
            <SkyTeam>
              <Check type="checkbox" value="Одна пересадка" />
              SkyTeam
            </SkyTeam>
            <Price>16 290 ₽</Price>
          </Checkbox>
        </Group>

        <Group>
          <SubTitle>Авиакомпании</SubTitle>
          <Checkbox>
            <All>
              <Check type="checkbox" value="Одна пересадка" />
              Все
            </All>
            <Price>7 712 ₽</Price>
          </Checkbox>

          <Checkbox>
            <AegeanAirlines>
              <Check type="checkbox" value="Одна пересадка" />
              Aegean Airlines
            </AegeanAirlines>
            <Price>20 357 ₽</Price>
          </Checkbox>

          <Checkbox>
            <AirAlgerie>
              <Check type="checkbox" value="Одна пересадка" />
              Air Algerie
            </AirAlgerie>
            <Price>29 105 ₽</Price>
          </Checkbox>

          <Checkbox>
            <AirEuropa>
              <Check type="checkbox" value="Одна пересадка" />
              Air Europa
            </AirEuropa>
            <Price>22 202 ₽</Price>
          </Checkbox>

          <Checkbox>
            <AirFrance>
              <Check type="checkbox" value="Одна пересадка" />
              Air France
            </AirFrance>
            <Price>17 050 ₽</Price>
          </Checkbox>

          <Checkbox>
            <AirMoldova>
              <Check type="checkbox" value="Одна пересадка" />
              Air Moldova
            </AirMoldova>
            <Price>22 613 ₽</Price>
          </Checkbox>

          <Checkbox>
            <Alitalia>
              <Check type="checkbox" value="Одна пересадка" />
              Alitalia
            </Alitalia>
            <Price>22 717 ₽</Price>
          </Checkbox>

          <Checkbox>
            <AlitaliaCityLiner>
              <Check type="checkbox" value="Одна пересадка" />
              Alitalia CityLiner
            </AlitaliaCityLiner>
            <Price>20 271 ₽</Price>
          </Checkbox>

          <Checkbox>
            <BelleAir>
              <Check type="checkbox" value="Одна пересадка" />
              Belle Air
            </BelleAir>
            <Price>18 371 ₽</Price>
          </Checkbox>

          <Checkbox>
            <BritishAirways>
              <Check type="checkbox" value="Одна пересадка" />
              British Airways
            </BritishAirways>
            <Price>23 839 ₽</Price>
          </Checkbox>

          <Checkbox>
            <BrusselsAirlines>
              <Check type="checkbox" value="Одна пересадка" />
              Brussels Airlines
            </BrusselsAirlines>
            <Price>11 150 ₽</Price>
          </Checkbox>

          <Checkbox>
            <BulgariaAir>
              <Check type="checkbox" value="Одна пересадка" />
              Bulgaria Air
            </BulgariaAir>
            <Price>20 114 ₽</Price>
          </Checkbox>
        </Group>
      </Checkboxes>
    </Transfer>
  );
};
