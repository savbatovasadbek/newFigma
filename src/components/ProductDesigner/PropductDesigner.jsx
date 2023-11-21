import React from "react";
import styles from "./ProductDesigner.module.css";
const PropductDesigner = () => {
  return (
    <>
      <div className='container'>
        <div className={styles.info}>
          <div className={styles.title}>
            <h3>Product Designer</h3>
            <h2>That's Me!</h2>
          </div>
          <div className={styles.text}>
            Over the past 12 years, I've worked with a diverse range of clients,
            from startups to Fortune 500 companies. I love crafting interfaces
            that delight users and help businesses grow.
          </div>
        </div>
      </div>
    </>
  );
};

export default PropductDesigner;
