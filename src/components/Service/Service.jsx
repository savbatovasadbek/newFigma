import React from 'react'
import styles from "./Service.module.css"
import img1 from "../../assets/images/service1.svg"
import img2 from "../../assets/images/service2.svg"
import img3 from "../../assets/images/service3.svg"

const Service = () => {

  

  return (
    <div className={styles.service}>
      <h3>SERVICES</h3>
      <h2>Design that solves problems, <br /> one product at a time.</h2>
      <div className={styles.serviceCard}>

        <div className={styles.card}>

          <div>
            <img src={img1} alt="img1" />
          </div>
          <h4>What I can do for you</h4>
          <p>Faster, better products that your <br /> users love. Here's all the services I <br /> provide:</p>
          <ul>
            <li>
              Design Strategy
            </li>
            <li>
              Web and Mobile App Design
            </li>
            <li>
              Front-end Development
            </li>
          </ul>

        </div>

        <div className={styles.card}>

          <div>
            <img src={img2} alt="img2" />
          </div>
          <h4>Applications I'm fluent in</h4>
          <p>Every designer needs the right <br /> tools to do the perfect job. <br /> Thankfully, I'm multilingual.</p>
          <ul>
            <li>
              Sketch
            </li>
            <li>
              Webflow
            </li>
            <li>
              Figma
            </li>
          </ul>

        </div>

        <div className={styles.card}>

          <div>
            <img src={img3} alt="img3" />
          </div>
          <h4>What you can expect</h4>
          <p>I design products that are more <br /> than pretty. I make them shippable <br /> and usable.</p>
          <ul>
            <li>
              Clean and functional
            </li>
            <li>
              Device and user friendly
            </li>
            <li>
              Efficient and maintainable
            </li>
          </ul>

        </div>

      </div>
    </div>
  );
};

export default Service;


