import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../photos/IMG_1189.jpeg";
import "./styles.css";

export default function Landing() {
  return (
    <div className="main">
      <img src={img} alt="mountain hike"></img>
    </div>
  );
}
