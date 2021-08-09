import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <hr/>
      <Row>
      <Col>
      <h6>
      &copy;Sharlene May Minosa
      <br/>
      <a href="mailto:sminosa@bu.edu/">sminosa@bu.edu</a>
      </h6>
      </Col>
      <Col id="footer-right">
      <a href="https://github.com/sharlenemay" target="_blank">Github</a>
      </Col>
      <Col>
      <a href="https://www.linkedin.com/in/smminosa/" target="_blank">LinkedIn</a>
      </Col>
      <Col>
      <a href="https://drive.google.com/file/d/19sg9yxJVIziKwa6cbchzC11Z8r9xwUmX/view?usp=sharing" target="_blank">Resume</a>
      </Col>
      </Row>
    </div>
  );
}

export default Footer;
