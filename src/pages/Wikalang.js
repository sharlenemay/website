import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import wikalang from "../photos/wikalang-01-01.png";
import "./styles.css";

export default function Wikalang() {

  return (
    <div className="main">
        <img src={wikalang} alt="wika lang"></img>
        <h1> Wika Lang </h1>
    </div>
  );
}