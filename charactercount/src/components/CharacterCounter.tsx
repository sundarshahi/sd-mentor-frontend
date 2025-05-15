import styles from "./CharacterCounter.module.css";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../App";

import sun from "../assets/images/icon-sun.svg";
import moon from "../assets/images/icon-moon.svg";

const CharacterCounter = () => {
  const { theme, switchTheme } = useContext(ThemeContext);
  const [text, setText] = useState("");

  const [readingTime, setReadingTime] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [wordscount, setWordsCount] = useState(0);
  const [sentencecount, setSentenceCount] = useState(0);

  const [characterlimit, setCharacterLimit] = useState(0);
  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const [isCharLimitActive, setIsCharLimitActive] = useState(false);

  const [letterDensity, setLetterDensity] = useState<{ [key: string]: number }>(
    {}
  );
  const [letterCount, setLetterCount] = useState<{ [key: string]: number }>({});

  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const characterCount = excludeSpaces
      ? text.replace(/\s/g, "").length
      : text.length;
    setCharacterCount(characterCount);

    const words = text.trim().split(/\s+/).filter(Boolean);
    setWordsCount(words.length);

    const sentences = text.match(/[^.!?]+[.!?]/g);
    setSentenceCount(sentences ? sentences.length : 0);

    setReadingTime(Math.round(text.length / 200));
  }, [text, characterlimit, excludeSpaces]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    setText(inputText);

    const letters = inputText.toLowerCase().replace(/[^a-z]/g, "");
    const totalLetters = letters.length;

    const frequencyMap: { [key: string]: number } = {};
    for (const char of letters) {
      frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }
    setLetterCount(frequencyMap);

    const densityMap: { [key: string]: number } = {};
    for (const char in frequencyMap) {
      densityMap[char] = parseFloat(
        ((frequencyMap[char] / totalLetters) * 100).toFixed(2)
      );
    }

    setLetterDensity(densityMap);
    applyLimit();
  };

  const applyLimit = () => {
    if (
      isCharLimitActive &&
      characterlimit > 0 &&
      text.length > characterlimit
    ) {
      setText(text.slice(0, characterlimit));
      alert(
        `Character limit exceeded. You cannot enter more than ${characterlimit} characters.`
      );
    }
  };

  const handleExcludeSpacesChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setExcludeSpaces(e.target.checked);
  };

  const handleSetCharacterLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    console.log(isChecked,"checked");

    setIsCharLimitActive(isChecked);
    if (!isChecked) {
      setCharacterLimit(0);
    }
  };

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div className={styles.main}>
      <div className={styles.topContainer}>
        <div>Character Counter</div>
        <div className={styles.icon}>
          <img
            src={theme === "light" ? moon : sun}
            alt="Theme"
            onClick={switchTheme}
            className={styles.img}
          />
        </div>
      </div>
      <h1 style={{ justifyContent: "center", display: "flex" }}>
        Analyze your text in real-time
      </h1>

      <div className={styles.container}>
        <textarea
          onChange={handleTextChange}
          placeholder="Start typing here..."
          value={text}
          className={styles.textAreaField}
        />
        <div className={styles.inputDiv}>
          <label className={styles.label}>
            <input type="checkbox" onChange={handleExcludeSpacesChange} />
            Exclude Spaces
          </label>
          <label className={styles.label}>
            <input type="checkbox" onChange={handleSetCharacterLimit} />
            Set Character Limit
          </label>
          {isCharLimitActive && (
            <div>
              <input
                type="number"
                min="1"
                className={styles.limitInput}
                value={characterlimit > 0 ? characterlimit : ""}
                onChange={(e) => setCharacterLimit(Number(e.target.value))}
                placeholder="Enter character limit"
              />
              <button onClick={applyLimit} className={styles.applyButton}>Apply</button>
            </div>
          )}
          <div className={styles.readingTime}>
            Approx.reading time: {readingTime} minute
          </div>
        </div>

        <div className={styles.countContainer}>
          <div className={styles.lettercount}>
            <div className={styles.p}>{characterCount}</div>Total Characters
          </div>
          <div className={styles.wordscount}>
            <div className={styles.p}>{wordscount}</div>Word Count
          </div>
          <div className={styles.sentencecount}>
            <div className={styles.p}>{sentencecount}</div>Sentence Count
          </div>
        </div>
      </div>

      <div className={styles.bottomContainer}>
        <h3>Letter Density</h3>
        <div>
          {" "}
          {Object.entries(letterDensity).length > 0 && (
            <ul className={styles.ul}>
              {(showAll
                ? Object.entries(letterDensity).sort((a, b) => b[1] - a[1])
                : Object.entries(letterDensity)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 5)
              ).map(([letter, percent]) => (
                <li key={letter} className={styles.li}>
                  <span style={{ width: "5%" }}>{letter.toUpperCase()}</span>
                  <div className={styles.progressBar}>
                    <div
                      style={{
                        width: `${percent}%`,
                        height: "10px",
                        borderRadius: "5px",
                        backgroundColor: "#DC8BE0",
                      }}
                    ></div>
                  </div>

                  <div style={{ color: "grey" }}>
                    {letterCount[letter]}
                    {" ("}
                    {percent}%{")"}
                  </div>
                </li>
              ))}
            </ul>
          )}
          {Object.entries(letterDensity).length > 5 && (
            <button onClick={toggleShowAll} className={styles.morelessBtn}>
              {showAll ? "Show Less \u02c4" : "Show More \u02c5"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterCounter;
