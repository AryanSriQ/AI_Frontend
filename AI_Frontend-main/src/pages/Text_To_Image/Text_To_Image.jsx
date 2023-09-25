import { useState } from "react";
import styles from "./style.module.css";

const Text_To_Image = () => {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
    console.log(prompt);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:5000/prompt_to_text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt}),
      });

      const data = await response.json();
      setOutput(data.output);
      setLoading(false);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  return (
    <div className={`${styles.container}`}>
      <h2 className={`${styles.subheading}`}>
        Chat with the PDF document by asking your query
      </h2>
      <h2 className={`${styles.description}`}>
        Trained PDF : "Indian Constitution"
      </h2>
      <form onSubmit={handleSubmit} className={`${styles.form}`}>
        <input
          type="text"
          placeholder="Ask anything related to Indian Constitution..."
          name="prompt"
          className={`${styles.input}`}
          onChange={handleInputChange}
          autocomplete="off"
        />
        <button type="submit" className={`${styles.button}`}>
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>
       <div className={`${styles.description}`}>
            {output && <p>{output}</p>}
         </div>
    </div>
  );
};

export default Text_To_Image;
