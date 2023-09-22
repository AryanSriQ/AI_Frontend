import React, { useState } from "react";
import styles from "./style.module.css";
import { languages } from "../../constant";

const Translate = () => {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [fromLanguage, setFromLanguage] = useState("English");
  const [toLanguage, setToLanguage] = useState("Hindi");

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
    console.log(prompt);
  };

  const handleFromChange = (e) => {
    const lang = e.target.value;
    setFromLanguage(lang);
  };

  const handleToChange = (e) => {
    const lang = e.target.value;
    setToLanguage(lang);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:5000/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, fromLanguage, toLanguage }),
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
      <h2 className={`${styles.subheading}`}>Translate</h2>
      <form onSubmit={handleSubmit} className={`${styles.form}`}>
        <div className={`${styles.textContainer}`}>
          <input
            type="text"
            placeholder="How are you ?"
            name="prompt"
            value={prompt}
            className={`${styles.input}`}
            onChange={handleInputChange}
          />
          <div className={`${styles.selectContainer}`}>
            <select
              name="from"
              id="from"
              onChange={handleFromChange}
              className={`${styles.select}`}
            >
              {languages.map((data, index) => (
                <option value={data.id} key={index}>
                  {data.name}
                </option>
              ))}
            </select>
            <select
              name="to"
              id="to"
              onChange={handleToChange}
              className={`${styles.select}`}
            >
              {languages.map((data, index) => (
                <option value={data.id} key={index}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          className={`${styles.button} ${loading ? styles.loading : ""}`}
          disabled={loading}
        >
          {loading ? "Translating..." : "Translate"}
        </button>
      </form>

      <div className={`${styles.outputWindow}`}>
        {output && <p>{output}</p>}
      </div>
    </div>
  );
};

export default Translate;
