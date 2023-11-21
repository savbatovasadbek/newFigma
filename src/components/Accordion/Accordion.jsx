import React, { useState } from "react";
import styles from "./Accordion.module.css";
import { SlArrowDown } from "react-icons/sl";

export default function Accordion({ children }) {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={styles.accordion}>
      <div className={styles.title} onClick={toggleAccordion}>
        <h3>{children}</h3>
        <SlArrowDown  className={styles.icon}/>
        {/* <span>{isActive ? "▼" : "►"}</span> */}
      </div>
      {isActive && (
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            eligendi iure voluptas reprehenderit quo explicabo natus quae nulla
            rem blanditiis, sequi similique. Maiores maxime commodi pariatur,
            provident dolorum doloribus facilis?
          </p>
        </div>
      )}
      {/* <span className={styles.underline}></span> */}
      <hr className={styles.underline} />
    </div>
  );
}
