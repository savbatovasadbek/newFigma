import React from "react";
import { GoArrowRight } from "react-icons/go";
import styles from "./Header.module.css";
import smilingBrother from "../../assets/images/smilingBrother.png";
const Header = () => {
  return (
    <>
      <div className="container" style={{ paddingTop: "150px" }}>
        <div className={styles.bigDiv}>
          <div className={styles.leftSide}>
            <h2 className={styles.i}>I design products</h2>
            <h2 className={styles.black}>that delight and inspire people.</h2>
            <p>
              Hi! I’m Jake, a product designer based in Berlin. I create
              user-friendly interfaces for fast-growing startups.
            </p>
            <div className={styles.btns}>
              <button>Book a call</button>
              <button>
                Download SV <GoArrowRight className={styles.arrow} />
              </button>
            </div>
          </div>
          <img src={smilingBrother} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
