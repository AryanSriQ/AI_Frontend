import { useState } from "react";
import styles from "./style.module.css";

const Text_To_Image = () => {
  const [prompt, setPrompt] = useState({});
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPrompt({ ...prompt, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await fetch('http://127.0.0.1:5000/text_to_image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(prompt),
      });
      
      console.log(response);

      if (!response || !response?.ok){
        throw new Error('Something went wrong');
      }
      
      const data = await response.json();
      if (data.image_id) {
        // Make a GET request to retrieve the image using the image_id
        const imageResponse = await fetch(`http://127.0.0.1:5000/get_image/${data.image_id}`);
        const imageData = await imageResponse.json();
        
        if (imageData.image) {
          // Set the image data in state
          setImage(imageData.image);
          console.log(image);
        }
      }
    } catch(error) {
      console.log("Error : ", error);
    }
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
          name="prompt"
          className={`${styles.input}`}
          onChange={handleInputChange}
        />
        <button type="submit" className={`${styles.button}`}>
          Draw
        </button>
      </form>
      <div className={`${styles.outputWindow}`}>
        {image && (
          <img
            src={image}
            alt="generate image"
            className={`${styles.outputImage}`}
          />
        )}
      </div>
    </div>
  );
};

export default Text_To_Image;
