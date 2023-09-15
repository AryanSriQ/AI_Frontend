import { useState } from "react";
import styles from "./style.module.css";

const Image_To_Story = () => {
  const handleSubmit = () => {};

  const [imageOutput, setImageOutput] = useState(null);

  return (
    <div className={`${styles.container}`}>
      <h2 className={`${styles.subheading}`}>
       Transform Images into Captivating Stories
      </h2>
      <form onSubmit={handleSubmit} className={`${styles.form}`}>
        <input type="file" accept="image/*" className={`${styles.input}`} />
        <button type="submit" className={`${styles.button}`}>
          Generate
        </button>
      </form>
      {!imageOutput !== null ?? (
        <div className={`${styles.outputWindow}`}>{imageOutput}</div>
      )}
    </div>
  );
};

export default Image_To_Story;
