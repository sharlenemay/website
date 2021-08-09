import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import jothefish from "../photos/jothefish.png";
import "./styles.css";
import jo1 from "../photos/jo-screenshot.png";
import jo2 from "../photos/jo-screenshot2.png";

export default function Jo() {
  return (
    <div className="main">
      <h1> Jo the Fish</h1>
      <img src={jothefish} alt="jo the fish"></img>
      <p>
        Jo the fish is a non-profit start-up dedicated to business and consumer
        transparency online around the world. I helped to create a responsive
        site built with React for Jo to market our mission and publicize our
        goals. I also assist in the front-end development of the Google Chrome
        Extension.
      </p>
      <p>
        For this project, I collaborate closely with and facilitate
        communication between the Design and Development teams.
      </p>
      <a href="https://www.jothefish.com/" target="_blank">
        Visit the site here.
      </a>
      <img src={jo1} alt="google chrome extension"></img>
      <img src={jo2} className="body-img" alt="screenshot"></img>
    </div>
  );
}
