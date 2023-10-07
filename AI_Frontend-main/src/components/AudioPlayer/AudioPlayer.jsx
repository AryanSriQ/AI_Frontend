import { useState, useEffect, useRef } from "react";
import styles from "./style.module.css";

const AudioPlayer = ({ wavId, musicName }) => {
  const [audioUrl, setAudioUrl] = useState(null);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const cleanedFilename = musicName.replace(/_\d+\.wav$/, "");
  const formattedFilename = cleanedFilename.replace(/_/g, " ");

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    // Fetch the WAV file from the backend
    fetch(`http://127.0.0.1:5000/music`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ id: wavId }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob();
      })
      .then((blob) => {
        // Create a Blob URL for the audio
        const url = window.URL.createObjectURL(blob);
        setAudioUrl(url);
      })
      .catch((error) => {
        console.error("Error fetching audio:", error);
      });
  }, []);

  return (
    <div className={`${styles.custom_audio_player}`}>
      <audio ref={audioRef} src={audioUrl}></audio>
      <div className={`${styles.player_controls}`}>
        <button onClick={togglePlay}>
          {isPlaying ? (
            <i class="fa-solid fa-pause"></i>
          ) : (
            <i class="fa-solid fa-play"></i>
          )}
        </button>
        <p className={`${styles.prompt}`}>
          <span>PROMPT : </span>
          {formattedFilename}
        </p>
      </div>
    </div>
  );
};

export default AudioPlayer;

{
  /* {audioUrl && <source src={audioUrl} ref={audioRef} type="audio/wav" />} */
}
