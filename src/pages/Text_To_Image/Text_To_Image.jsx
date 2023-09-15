import { useState } from "react";
import styles from "./style.module.css";

const Text_To_Image = () => {
  const handleSubmit = () => {};

  const [imageOutput, setImageOutput] = useState(null);

  return (
    <div className={`${styles.container}`}>
      <h2 className={`${styles.subheading}`}>
        Create AI Art with our AI image generator.
      </h2>
      <form onSubmit={handleSubmit} className={`${styles.form}`}>
        <input
          type="text"
          placeholder="what do you want to generate ?"
          className={`${styles.input}`}
        />
        <button type="submit" className={`${styles.button}`}>
          Draw
        </button>
      </form>
      <div className={`${styles.outputWindow}`}>
        {!imageOutput ?? (
          <img
            src="../../image1.png"
            alt="generate image"
            className={`${styles.outputImage}`}
          />
        )}
      </div>
    </div>
  );
};

export default Text_To_Image;
