import styles from "./style.module.css";
import { cardData } from "../../constant";
import { Card } from "../../components";

const Tools = () => {
  return (
    <div className={`${styles.tools_container}`}>
      {cardData.map((data, index) => (
        <Card
          key={index}
          title={data.title}
          content={data.content}
          images={data.images}
          link={data.id}
        />
      ))}
    </div>
  );
};

export default Tools;
