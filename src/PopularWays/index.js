import React, { Component } from "react";
import styled from "styled-components";

const PopularWays = styled.section`
  background-color: #f8fcff;
`;

const Card = styled.div`
  background-color: #5dc77b;
  height: 20px;
`;

export default function() {
  return (
    <PopularWays>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div>Компас имг</div>
            <h2>Популярные направления перелетов из города Москва</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <button>Куда угодно</button>
            <button>Солнце и море</button>
            <button>Шопинг, город</button>
          </div>
          <div className="col-xs-12">
            <button>Культура и история</button>
            <button>Ночная жизнь</button>
            <button>Отдых с детьми</button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <Card>
              <p>1</p>
            </Card>
          </div>
          <div className="col-xs-12">
            <Card>
              <p>2</p>
            </Card>
          </div>
          <div className="col-xs-12">
            <Card>
              <p>3</p>
            </Card>
          </div>
          <div className="col-xs-12">
            <Card>
              <p>4</p>
            </Card>
          </div>
          <div className="col-xs-12">
            <Card>
              <p>5</p>
            </Card>
          </div>
          <div className="col-xs-12">
            <Card>
              <p>6</p>
            </Card>
          </div>
        </div>
      </div>
    </PopularWays>
  );
}
