import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card";

export default function() {
  return (
    <div className="row">
      <div className="col-xs-12 col-lg-6">
        <Card />
      </div>
      <div className="col-xs-12 col-lg-6">
        <Card />
      </div>
      <div className="col-xs-12 col-lg-6">
        <Card />
      </div>
      <div className="col-xs-12 col-lg-6">
        <Card />
      </div>
      <div className="col-xs-12 col-lg-6">
        <Card />
      </div>
      <div className="col-xs-12 col-lg-6">
        <Card />
      </div>
    </div>
  );
}
