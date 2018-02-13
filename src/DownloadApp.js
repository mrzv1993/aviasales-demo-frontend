import React, { Component } from "react";
import styled from "styled-components";

const DownloadApp = styled.section`
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
`;

export default function() {
  return (
    <DownloadApp>
      <div className="container">
        <h2>Скачай мобильное приложение Aviasales.ru</h2>
        <div>
          <p>Более 103 000 оценок</p>
        </div>
      </div>
    </DownloadApp>
  );
}
