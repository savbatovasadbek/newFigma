import Card from "./Card/Card";
import { cardData } from "./data";
import style from "./project.module.css";

const Projects = () => {
  return (
    <div className={`${style.project} container `}>
      <h2>PROJECTS</h2>
      <div className={style.flex}>
        <div>
          <p>I bring results.</p>
          <p>My clients are proof.</p>
        </div>
        <button>View all projects</button>
      </div>
      <div className={style.cards}>
        {cardData.map((data) => {
          return <Card key={data.id} prop={data} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
