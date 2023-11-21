import React from "react";
import styles from "./ProductDesigner.module.css";
import phone from "../../assets/images/telefon.png";
import myBrother from "../../assets/images/myBrother.png";
import mac from "../../assets/images/mac.png";
import girls from "../../assets/images/girls.png";
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
        <div className={styles.photos}>
          <div className={styles.leftSide}>
            <img src={phone} alt='img' loading='lazy' />
            <img src={myBrother} alt='img' loading='lazy' />
          </div>
          <div className={styles.rightSide}>
            <img src={mac} alt='img' loading='lazy' />
            <img src={girls} alt='img' loading='lazy' />
          </div>
        </div>
      </div>
    </>
  );
};

export default PropductDesigner;
