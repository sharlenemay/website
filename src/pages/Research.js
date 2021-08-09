import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

export default function CenteredGrid() {
  return (
    <div className="main">
      <h1>
        <a
          href="https://drive.google.com/file/d/1vTYZClJ-M4zdlhrJoMwCnQZZOJ6-ohfz/view?usp=sharing"
          target="_blank"
        >
          My Face, My Choice: Plastic Surgery and the Modern Woman in
          Contemporary South Korea - Independent Research
        </a>
      </h1>
      <h5>UCLA Department of Asian Humanities, Spring 2018</h5>
      <Link to="/a118">
        <h1>Tracing Genetic Relationships - Independent Research Project</h1>
      </Link>
      <h5>UCLA Department of Anthropology, Spring 2017</h5>
      <h1>
        <a
          href="https://drive.google.com/file/d/1Fim5pedV0XS2YeODbv7FvWNe1eCDxurD/view?usp=sharing"
          target="_blank"
        >
          An Analysis of Female Identity and Nationalism in Dekada '70 -
          Independent Writing Assignment
        </a>
      </h1>
      <h5>UCLA Department of Asian Humanities, Spring 2017</h5>
    </div>
  );
}
