import { useState } from "react";
import styles from "./style.module.css";

const Text_To_Music = () => {
  const [formData, setFormData] = useState({});
  const [fileUrl, setFileUrl] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/text_to_music", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      console.log("response : ", response);

      if (response.ok) {
        const blob = await response.blob();
        console.log("blob : ",blob);
        const url = window.URL.createObjectURL(blob);
        console.log("url : ",url);
        setFileUrl(url);
      } else {
        console.error("Failed to send data to the server");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  console.log("file URL : ", fileUrl);

  return (
    <div className={`${styles.container}`}>
      <h2 className={`${styles.subheading}`}>Turn Text into Tunes</h2>
      <form onSubmit={handleSubmit} className={`${styles.form}`}>
        <input
          type="text"
          name="prompt"
          id="prompt"
          placeholder="what do you want to generate ?"
          className={`${styles.input}`}
          onChange={handleInputChange}
        />
        <button type="submit" className={`${styles.button}`}>
          Generate
        </button>
      </form>
      <div className={`${styles.outputWindow}`}>
        {fileUrl ?? (
          <div>
            <audio controls>
              <source src={fileUrl} type="audio/wav" />
              Your browser does not support the audio element.
            </audio>
            <a href={fileUrl} download="your_audio.wav">
              Download .wav File
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Text_To_Music;
