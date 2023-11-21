import styles from "./Blogs.module.css";
import { FaArrowRight } from "react-icons/fa";
import { BlogData } from "./blogs-data";
import { Fragment } from "react";

const Blogs = () => {
  return (
    <div className={styles.blogs}>
      <div className={`container ${styles.blogContainer}`}>
        <div className={styles.leftBlog}>
          <h3 className={styles.leftTitle}>Blogs</h3>
          <h1 className={styles.leftMain}>Latest Blogs</h1>
          <a href="#1" className={styles.leftHref}>
            <p>View all</p>
            <div className={styles.leftArrow}>
              <FaArrowRight />
            </div>
          </a>
        </div>
        <div className={styles.rightBlog}>
          {BlogData?.map((el) => {
            return (
              <Fragment key={el.id}>
                <div className={styles.card}>
                  <div className={styles.cardTop}>
                    <p>{el.time}</p>
                    <span>.</span>
                    <p>{el.times}</p>
                  </div>
                  <div className={styles.cardMid}>
                    <h1>
                      Design tips for designers, that cover everything you need
                    </h1>
                  </div>
                  <div className={styles.cardBottom}>
                    <a href="#1">
                      <p>{el.link}</p>
                      <div className={styles.leftArrow}>
                        <FaArrowRight />
                      </div>
                    </a>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
