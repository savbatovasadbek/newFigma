import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <nav className="container">
      <div className={styles.nav_left_child}>
         <h2>Portfolio Creator</h2>
      </div>
      <div className={styles.nav_right_child}>
           <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Blog</a></li>
            <li ><a href="#">Book a call
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
            <g clip-path="url(#clip0_1_452)">
              <path d="M9.72837 5.50978L5.57767 1.35907L6.67183 0.2649L12.6905 6.28359L6.67183 12.3023L5.57767 11.2081L9.72837 7.0574H0.30957V5.50978H9.72837Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_1_452">
         <rect width="13" height="13" fill="white"/>
          </clipPath>
           </defs>
             </svg></a>
             </li>
           </ul>   
      </div>
    </nav>
  )
};

export default Navbar;
