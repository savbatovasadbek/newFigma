import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <footer className={styles.footer_1}>
          <p className={styles.footer_p1}>Ready to make something kickass?</p>
          <p className={styles.footer_p2}>Let's get on a call.</p>
        </footer>
        <div className={styles.footer_2}>
          <div className={styles.footer_box}>
            <h3>PortfolioCreator</h3>
            <p className={styles.p_3}>
              4353 Delaware Avenue, San Francisco, USA
            </p>
            <p className={styles.email}>hi@thefolio.com</p>
          </div>
          <div className={styles.more} style={{ color: "white" }}>
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Dribbble</li>
            </ul>
            <ul>
              <li>Services</li>
              <li>Blog</li>
              <li>Instagram</li>
            </ul>
            <ul>
              <li>Experience</li>
              <li>Projects</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <a href="#">
            © All rights reserved. Sumit Hegde. Powered by Webflow / Image
            License Info / Instructions / Changelog / Style Guide
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
