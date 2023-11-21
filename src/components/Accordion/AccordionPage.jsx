import React from "react";
import styles from "./AccordionPage.module.css";
import Accordion from "./Accordion";

export default function AccordionPage() {
  return (
    <div className={styles.accordionPageBg}>
      <section className={`container `}>
        <div className={styles.accordionTop}>
          <span>FAQ</span>
          <h2>Frequently asked questions</h2>
        </div>
        <div className={styles.accordionSpace}>
          <div>
            <Accordion>What type of projects do you take on?</Accordion>
            <Accordion>What is your hourly rate?</Accordion>
            <Accordion>What time-zone do you work in?</Accordion>
            <Accordion>What is the typical timeline for a project?</Accordion>
          </div>

          <div>
            <Accordion>How do you charge for projects ?</Accordion>
            <Accordion>What does your design process look like?</Accordion>

            <Accordion>What metrics do you use to measure success?</Accordion>
            <Accordion>
              What if I need help after the project is complete?
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
