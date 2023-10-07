import { useEffect, useState } from "react";
import { AudioPlayer } from "../../components";
import styles from "./style.module.css";

const All_Music = () => {
  const [musicFiles, setMusicFiles] = useState(null);

  useEffect(() => {
    async function fetchMusicFiles() {
      try {
        const response = await fetch("http://127.0.0.1:5000/all_music", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Response:", response);
        if (response.ok) {
          const data = await response.json();
          setMusicFiles(data);
          console.log(musicFiles);
        } else {
          console.error("Failed to fetch music files:", response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchMusicFiles();
  }, []);

  return (
    <div className={`${styles.audio_container}`}>
      <h1 className={`${styles.heading}`}>All Music Files</h1>
      <ul className={`${styles.list}`}>
        {musicFiles &&
          musicFiles.map((data, index) => (
            <li key={index}>
              <AudioPlayer wavId={data.id} musicName={data.name} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default All_Music;
