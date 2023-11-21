import education from "../../assets/images/EducationLogo.svg";
import work from "../../assets/images/WorkLogo.svg";
import icon from "../../assets/images/EWIcon.svg";
import image from "../../assets/images/EWImage.svg";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <>
      <div className="container" style={{ padding: "150px" }}>
        <div className={styles.box}>
          <div className={styles.leftbox}>
            <img src={education} alt="education" loading="lazy" />
            <div className={styles.cartsbox}>
              <div className={styles.cartn}>
                <div className={styles.textbox}>
                  <h3 className={styles.title}>Stanford University</h3>
                  <p className={styles.text}>Lorem ipsum dolor sit amet.</p>
                </div>
                <p className={styles.date}>• 2010-2015</p>
                <span>
                  <img
                    className={styles.icon}
                    src={icon}
                    alt="icon"
                    loading="lazy"
                  />
                </span>
              </div>
              <div className={styles.cartn}>
                <div className={styles.textbox}>
                  <h3 className={styles.title}>MIT Summer School</h3>
                  <p className={styles.text}>Lorem ipsum dolor sit amet.</p>
                </div>
                <p className={styles.date}>• 2010-2015</p>
                <span>
                  <img
                    className={styles.icon}
                    src={icon}
                    alt="icon"
                    loading="lazy"
                  />
                </span>
              </div>
              <div className={styles.cartn}>
                <div className={styles.textbox}>
                  <h3 className={styles.title}>California State University</h3>
                  <p className={styles.text}>Lorem ipsum dolor sit amet.</p>
                </div>
                <p className={styles.date}>• 2010-2015</p>
                <span>
                  <img
                    className={styles.icon}
                    src={icon}
                    alt="icon"
                    loading="lazy"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className={styles.rightbox}>
            <img src={work} alt="work" loading="lazy" />
            <div className={styles.cartsbox}>
              <div className={styles.cart}>
                <div className={styles.cartbox}>
                  <img
                    className={styles.img}
                    src={image}
                    alt="image"
                    loading="lazy"
                  />
                  <div className={styles.textbox}>
                    <h3 className={styles.title}>Kingdom</h3>
                    <p className={styles.text}>Lorem ipsum.</p>
                  </div>
                </div>
                <p className={styles.date}>• 2010-2015</p>
                <span>
                  <img
                    className={styles.icon}
                    src={icon}
                    alt="icon"
                    loading="lazy"
                  />
                </span>
              </div>
              <div className={styles.cart}>
                <div className={styles.cartbox}>
                  <img
                    className={styles.img}
                    src={image}
                    alt="image"
                    loading="lazy"
                  />
                  <div className={styles.textbox}>
                    <h3 className={styles.title}>Kingdom</h3>
                    <p className={styles.text}>Lorem ipsum.</p>
                  </div>
                </div>
                <p className={styles.date}>• 2010-2015</p>
                <span>
                  <img
                    className={styles.icon}
                    src={icon}
                    alt="icon"
                    loading="lazy"
                  />
                </span>
              </div>
              <div className={styles.cart}>
                <div className={styles.cartbox}>
                  <img
                    className={styles.img}
                    src={image}
                    alt="image"
                    loading="lazy"
                  />
                  <div className={styles.textbox}>
                    <h3 className={styles.title}>Kingdom</h3>
                    <p className={styles.text}>Lorem ipsum.</p>
                  </div>
                </div>
                <p className={styles.date}>• 2010-2015</p>
                <span>
                  <img
                    className={styles.icon}
                    src={icon}
                    alt="icon"
                    loading="lazy"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Education;
