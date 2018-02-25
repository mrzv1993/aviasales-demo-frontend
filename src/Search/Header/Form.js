import React from "react";
import styled from "styled-components";

import InputDepart from "../../Main/Header/Form/InputDepart";
import InputComming from "../../Main/Header/Form/InputComming";
import ButtonPassenger from "../../Main/Header/Form/ButtonPassenger";
import ButtonSearch from "../../Main/Header/Form/ButtonSearch";

import DatePicker from "../../Main/Header/Form/DatePicker";

const Form = styled.form`
  padding: 2.5rem 0 2rem 0;
`;

const Places = styled.div`
  @media (min-width: 768px) {
    display: inline-block;
    width: 100%;
  }
  @media (min-width: 1200px) {
    display: inline-block;
    margin-right: 2px;
    width: calc(30% - 2px);
  }
`;

const DateRange = styled.div`
  @media (min-width: 768px) {
    display: inline-block;
    margin-right: 2px;
    width: calc(50% - 2px);
  }
`;

const Service = styled.div`
  @media (min-width: 768px) {
    display: inline-block;
    width: 100%;
    margin-top: 2px;
  }
  @media (min-width: 1200px) {
    display: inline-block;
    width: 70%;
  }
`;

const Passenger = styled.div`
  @media (min-width: 768px) {
    display: inline-block;
    width: 50%;
  }
`;

const Depart = styled.div`
  position: relative;
  @media (min-width: 768px) {
    display: inline-block;
    margin-right: 2px;
    width: calc(50% - 2px);
  }
`;
const Comming = styled.div`
  @media (min-width: 768px) {
    display: inline-block;
    width: 50%;
  }
`;

const Forward = styled.div`
  position: relative;
  @media (min-width: 768px) {
    display: inline-block;
    margin-right: 2px;
    width: calc(50% - 2px);
  }
`;

const Reverse = styled.div`
  @media (min-width: 768px) {
    display: inline-block;
    width: 50%;
  }
`;

class Dropdown extends React.Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <Form>
        <Places>
          <Depart>
            <InputDepart />
          </Depart>
          <Comming>
            <InputComming />
          </Comming>
        </Places>
        <Service>
          <DateRange>
            <DatePicker />
          </DateRange>
          <Passenger>
            <Forward>
              <ButtonPassenger />
            </Forward>
            <Reverse>
              <ButtonSearch />
            </Reverse>
          </Passenger>
        </Service>
      </Form>
    );
  }
}

export default Dropdown;
