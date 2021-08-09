import React from "react";
import purito1 from "../photos/purito-rebrand.png";
import purito2 from "../photos/purito-rebrand2.png";
import purito3 from "../photos/purito-rebrand3.png";
import purito4 from "../photos/purito-rebrand4.png";
import "./styles.css";

export default function Purito() {
  return (
    <div className="main">
      <h1>Purito Brand Redesign</h1>
      <img src={purito1} alt="purito1"></img>
      <p>
        Purito, a Korean-based skincare company, defines its brand philosophy
        with products crafted using only cruelty-free, clean, and honest
        ingredients. This product redesign hopes to represent Purito with a more
        contemporary aesthetic while still aligning with its "pure" priorities of
        using recycled and minimal packaging.
      </p>
      <p>
        This was an independent assignment completed in 2020 for the course
        CM501 Design Strategy and Software.
      </p>
      <img src={purito2} alt="purito2"></img>
      <img src={purito3} className="body-img" alt="purito3"></img>
      <img src={purito4} className="body-img" alt="purito4"></img>
    </div>
  );
}
