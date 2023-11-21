import styles from "./Blogs.module.css";

const Blogs = () => {
  return (
    <div className={styles.blogs}>
      <div className={`container ${styles.blogContainer}`}>
        <div className={styles.left.blog}></div>
        <div className={styles.rightBlog}></div>
      </div>
    </div>
  );
};

export default Blogs;
