import { useState, useEffect } from "react";

const AudioPlayer = ({ wavId, musicName }) => {
  const [audioUrl, setAudioUrl] = useState(null);

  const cleanedFilename = musicName.replace(/_\d+\.wav$/, "");
  const formattedFilename = cleanedFilename.replace(/_/g, " ");

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
        console.log(blob);
        // Create a Blob URL for the audio
        const url = window.URL.createObjectURL(blob);
        setAudioUrl(url);
        console.log(audioUrl);
      })
      .catch((error) => {
        console.error("Error fetching audio:", error);
      });
  }, []);
  return (
    <>
      <audio controls>
        {audioUrl && <source src={audioUrl} type="audio/wav" />}
        Your browser does not support the audio element.
      </audio>
      <p>{formattedFilename}</p>
    </>
  );
};

export default AudioPlayer;
