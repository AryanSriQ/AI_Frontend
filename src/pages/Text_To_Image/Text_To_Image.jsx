import { useState } from "react";
import styles from "./style.module.css";

const Text_To_Image = () => {
  const [imageOutput, setImageOutput] = useState(null);
  const [formData, setFormData] = useState({ inputField: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await fetch("http://127.0.0.1:5000/process_data", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     const result = await response.json();
    //     console.log(result);
    //   } else {
    //     console.error("Failed to send data to the server");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

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
          onChange={handleInputChange}
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
