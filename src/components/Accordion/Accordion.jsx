import React, { useState } from "react";
import styles from "./Accordion.module.css";

export default function Accordion({ children }) {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!setIsActive);
  };
  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{children}</h3>
        <span>{isActive ? "▼" : "►"}</span>
      </div>
      {isActive && (
        <div className="accordion-content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            eligendi iure voluptas reprehenderit quo explicabo natus quae nulla
            rem blanditiis, sequi similique. Maiores maxime commodi pariatur,
            provident dolorum doloribus facilis?
          </p>
        </div>
      )}
    </div>
  );
}
