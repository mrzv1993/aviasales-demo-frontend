import React from "react";
import styled from "styled-components";
import Switch from "react-ios-switch";

const CheckOneDirection = styled.div`
  padding: 18px 26px;
  display: flex;
  align-items: center;
`;

const SwitchLabel = styled.p`
  line-height: 18px;
  font-size: 12px;
  margin-left: 1rem;
  color: #4a4a4a;
`;

export default function() {
  return (
    <CheckOneDirection>
      <Switch
        checked={false}
        className={undefined}
        disabled={undefined}
        handleColor="white"
        name={undefined}
        offColor="#BCCDD6"
        onChange={() => {}}
        onColor="rgb(76, 217, 100)"
        pendingOffColor={undefined}
        pendingOnColor={undefined}
        readOnly={undefined}
        style={undefined}
      />
      <SwitchLabel>Показать цены в одну сторону</SwitchLabel>
    </CheckOneDirection>
  );
}
