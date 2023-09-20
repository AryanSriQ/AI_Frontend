import { useState } from "react";
import styles from "./style.module.css";

const Text_To_Music = () => {
  const [formData, setFormData] = useState({});
  const [fileUrl, setFileUrl] = useState(null);
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:5000/text_to_music", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });


      if (response.ok) {
        // Create a blob URL for the downloaded file
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        // Set the file URL in the component state to allow downloading
        setFileUrl(url);
      } else {
        console.error('Error generating music:', response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

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
        <button type="submit" className={`${styles.button} ${loading ? styles.loading : ''}`}>
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>
      <label htmlFor="prompt" className={`${styles.label}`}>ex: soft and pleasing lofi beat music with rain in background</label>
      <div className={`${styles.outputWindow}`}>
        {fileUrl && (
          <div className={`${styles.audioContainer}`}>
            <audio controls>
              <source src={fileUrl} type="audio/wav" />
              Your browser does not support the audio element.
            </audio>
            <a className={`${styles.downloadButton}`} href={fileUrl} download="your_audio.wav">
              Download .wav File
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Text_To_Music;
