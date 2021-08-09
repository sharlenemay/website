import React from "react";
import { Row, Col } from "react-bootstrap";
import "./styles.css";
import img from "../photos/me.jpg";

export default function About() {
  return (
    <div className="main">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={6}>
          <img src={img} className="bw-hover" alt="autumn colors"></img>
        </Col>
        <Col s={12} sm={12} md={12} lg={12} xl={6}>
          <h3>
            Digital Freelancer dedicated to creating meaningful user
            experiences through inclusive design and conscious research.
          </h3>
          <hr />
          <p>
            I’m Sharlene, an enthusiastic designer/developer interested in all things
            human and digital. With skills in media research, design, and coding, I approach product development from a holistic perspective.
            My goal is to bring people together through
            human-centered UX engineering and by using tech sustainably and ethically.
          </p>
          {/* <p>
            Since graduating with a Double B.A. in Anthropology and Asian
            Humanities, I've worked in non-profit and business settings near and
            far; from my home city of Los Angeles to the suburbs of Tokyo and
            rural Japan. Having experienced life in different parts of the
            world, my goal is to bring people together through the development
            of inclusive UX Engineering and the optimization of human-centered
            interaction design across cultural contexts.
          </p> */}
          {/* <h5>Education</h5>
          <p>
            Boston University, College of Communication (BU COM)
            <br />
            Master of Arts Candidate in Emerging Media Studies - Expected
            Graduation May 2022
          </p>
          <p>
            University of California, Los Angeles (UCLA)
            <br />
            Bachelor of Arts in Anthropology, Bachelor of Arts in Asian
            Humanities - Magna Cum Laude 2018
          </p> */}
          <hr />
          <p>Born and raised in Los Angeles, CA, I'm currently based between Baltimore, MD and Tampa, FL as a digital freelancer and part-time dog-sitter.</p>
        </Col>
      </Row>
    </div>
  );
}
