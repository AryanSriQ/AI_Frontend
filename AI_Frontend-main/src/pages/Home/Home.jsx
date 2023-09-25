import { Main_Button } from "../../components";
import styles from "./style.module.css";

const Home = () => {
  return (
    <div className={`${styles.background}`}>
      <div className={`${styles.heading_container}`}>
        <h1 className={`${styles.heading}`}>
          <span>AI </span>
          is changing the game.
        </h1>
        <h1 className={`${styles.heading}`}>
          Use it to <span>your advantage.</span>
        </h1>
      </div>

      <p className={`${styles.subheading}`}>
        Behold the power of <span>AI tools</span> to change the way you think.
      </p>

      <Main_Button content="Get Started" link="tools" />

      <div className={`${styles.cta_button}`} >
        <p>
          See it in action.
        </p>
        <div className={`${styles.arrow}`}></div>
      </div>
    </div>
  );
};

export default Home;
