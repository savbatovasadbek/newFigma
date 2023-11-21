import React from "react";
import styles from "./AccordionPage.module.css";
import Accordion from "./Accordion";

export default function AccordionPage() {
  return (
    <section className={`container ${styles.accordion}`}>
      <div className={styles.accordionTop}>
        <span>FAQ</span>
        <h2>Frequently asked questions</h2>
      </div>
      <div className={styles.accordionSpace}>
        <Accordion>ffffff</Accordion>
      </div>
    </section>
  );
}
