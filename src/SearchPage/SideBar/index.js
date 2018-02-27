import React from "react";
import styled from "styled-components";

import Transfer from "./Items/Transfer";
import DepartureTime from "./Items/DepartureTime";
import Baggage from "./Items/Baggage";
import Airlines from "./Items/Airlines";
import TransferTime from "./Items/TransferTime";
import Airport from "./Items/Airport";
import TransferAirport from "./Items/TransferAirport";
import Agencies from "./Items/Agencies";
import ClearAllFilters from "./Items/ClearAllFilters";
import TotalTime from "./Items/TotalTime";

const SideBar = styled.div`
  background-color: white;
  border-radius: 4px;
`;

const TotalDuration = styled.div``;

export default () => {
  return (
    <SideBar>
      <Transfer />
      <DepartureTime />
      <Baggage />
      <TransferTime />
      <TotalDuration />
      <TotalTime />
      <Airlines />
      <Airport />
      <TransferAirport />
      <Agencies />
      <ClearAllFilters />
    </SideBar>
  );
};
