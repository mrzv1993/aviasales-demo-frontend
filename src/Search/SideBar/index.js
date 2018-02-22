import React from "react";
import styled from "styled-components";

import Transfer from "./Items/Transfer";
import DepartureTime from "./Items/DepartureTime";
import Airlines from "./Items/Airlines";

const SideBar = styled.div`
  background-color: white;
  border-radius: 4px;
`;

const Baggage = styled.div``;
const TransferTime = styled.div``;
const TotalDuration = styled.div``;

const Airport = styled.div``;
const TransferAirport = styled.div``;
const Agencies = styled.div``;

export default () => {
  return (
    <SideBar>
      <Transfer />
      <DepartureTime />
      <Baggage />
      <TransferTime />
      <TotalDuration />
      <Airlines />
      <Airport />
      <TransferAirport />
      <Agencies />
    </SideBar>
  );
};
