import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import style from "./card.module.css";
import images from "../../../assets/images/Projects/img1.svg";
const Card = ({ prop }) => {
  const { img, name, title } = prop;
  console.log(img);
  return (
    <div className={style.card}>
      <div className={style.cardTop}>
        <img src={images} alt="img" />
      </div>
      <div className={style.cardBottom}>
        <h4>{name}</h4>
        <h3>{title}</h3>
        <a href="#1">
          <span>View Project</span>
          <FaArrowRight className={style.arrow} />
        </a>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  prop: PropTypes.any,
};
