import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import jothefish from "../photos/jothefish.png";
import wikalang from "../photos/wikalang-01-01.png";
import purito from "../photos/purito1.png";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Portfolio() {
  function fade(e) {
    // e.target.style.opacity = "0.75";
  }
  function fadeOut(e) {
    // e.target.style.opacity = "1";
  }

  return (
    <div className="main">
      {/* <Row className="main">
        <h4 className="green">
          Hi, I'm Sharlene May.
          <br/>I research.
          <br/>I design.
          <br/>I code.
        </h4>
      </Row> */}
      <Row>
      <Col s={12} sm={12} md={12} lg={12} xl={6}>
          <Link to="/purito">
            <img
              src={purito}
              className="project"
              alt="purito"
              onMouseOver={fade}
              onMouseOut={fadeOut}
            />
            <h5>Purito, Brand Redesign Project</h5>
          </Link>
        </Col>
        <Col s={12} sm={12} md={12} lg={12} xl={6}>
          <Link to="/jothefish">
            <img
              src={jothefish}
              className="project"
              alt="jo the fish"
              onMouseOver={fade}
              onMouseOut={fadeOut}
            />
            <h5>Jo the Fish, Front-end Development</h5>
          </Link>
        </Col>
      </Row>
      {/* <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Link to="/eso">
            <img
              src={wikalang}
              className="project"
              alt="eso"
              onMouseOver={fade}
              onMouseOut={fadeOut}
            />
            <h5>Boston University Environmental Student Organization, UX Research and Design</h5>
          </Link>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Link to="/wikalang">
            <img
              src={wikalang}
              className="project"
              alt="wikalang"
              onMouseOver={fade}
              onMouseOut={fadeOut}
            />
            <h5>Wika Lang, UX Design for a Language Learning Mobile Application</h5>
          </Link>
        </Col>

      </Row> */}
    </div>
  );
}
