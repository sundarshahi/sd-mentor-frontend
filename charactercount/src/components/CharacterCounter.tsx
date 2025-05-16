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
    console.log(isChecked, "checked");

    setIsCharLimitActive(isChecked);
    if (!isChecked) {
      setCharacterLimit(0);
    }
  };

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center content-center w-full max-sm:p-2.5 max-md:p-2.5">
      <div className="flex items-center w-3/4 max-sm:w-full max-md:w-full mt-[10px]">
        <div>Character Counter</div>
        <div className="bg-gray-300 h-[33px] w-[33px] rounded-lg ml-[auto]">
          <img
            src={theme === "light" ? moon : sun}
            alt="Theme"
            onClick={switchTheme}
            className="h-[30px] w-[30px] m-[2px] cursor-pointer"
          />
        </div>
      </div>
      <h1 className="flex content-center mt-5 text-3xl mb-2.5 w-1/2">
        Analyze your text in real-time
      </h1>

      <div className="flex flex-col w-3/4 max-sm:w-full max-md:w-full max-sm:h-[fit-content]">
        <textarea
          onChange={handleTextChange}
          placeholder="Start typing here..."
          value={text}
          className="rounded-md h-[100px] min-w-[150px] p-2.5 bg-[var(--text-field-background)] text-[var(--field-text)]"
        />
        <div className="w-full flex mt-2.5 text-[14px] max-sm:flex-col">
          <label className="mr-1.5 flex content-center text-gray-500">
            <input type="checkbox" onChange={handleExcludeSpacesChange} />
            Exclude Spaces
          </label>
          <label className="mr-1.5 flex content-center text-gray-500">
            <input type="checkbox" onChange={handleSetCharacterLimit} />
            Set Character Limit
          </label>
          {isCharLimitActive && (
            <div>
              <input
                type="number"
                min="1"
                className="w-[55px] max-sm:[200px] h-4 border border-black mr-0.5 p-1 rounded"
                value={characterlimit > 0 ? characterlimit : ""}
                onChange={(e) => setCharacterLimit(Number(e.target.value))}
                placeholder="Enter character limit"
              />
              <button
                onClick={applyLimit}
                className="ml-1 mr-1 text-[10px] border border-black p-0.5 rounded"
              >
                Apply
              </button>
            </div>
          )}
          <div className="ml-auto max-sm:ml-0 text-gray-500">
            Approx.reading time: {readingTime} minute
          </div>
        </div>

        <div className="mt-7.5 flex max-sm:flex-col gap-4 max-md:gap[1rem] w-full max-md:w-full text-black">
          <div className="rounded-2xl w-[32%] max-sm:w-full  p-1.5 min-w-[200px] max-md:min-w-[100px] height-[110px] bg-[url(https://images.pexels.com/photos/7130870/pexels-photo-7130870.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)]">
            <div className="text-[40px] font-bold mt-[7px]">
              {characterCount}
            </div>
            Total Characters
          </div>
          <div className="rounded-2xl w-[32%] max-sm:w-full p-1.5 min-w-[200px] max-md:min-w-[100px] height-[110px] bg-[url(https://images.pexels.com/photos/7135052/pexels-photo-7135052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]">
            <div className="text-[40px] font-bold mt-[7px]">{wordscount}</div>
            Word Count
          </div>
          <div className="rounded-2xl w-[32%] max-sm:w-full p-1.5 min-w-[200px] max-md:min-w-[100px] height-[110px] bg-[url(https://images.pexels.com/photos/7130873/pexels-photo-7130873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]">
            <div className="text-[40px] font-bold mt-[7px]">
              {sentencecount}
            </div>
            Sentence Count
          </div>
        </div>
      </div>

      <div className="flex w-[75%] max-sm:w-full max-md:w-full flex-col mt-3">
        <h3>Letter Density</h3>
        <div>
          {Object.entries(letterDensity).length > 0 && (
            <ul className="list-none m-0 p-0">
              {(showAll
                ? Object.entries(letterDensity).sort((a, b) => b[1] - a[1])
                : Object.entries(letterDensity)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 5)
              ).map(([letter, percent]) => (
                <li
                  key={letter}
                  className="flex items-center mb-2.5 text-gray-500"
                >
                  <span style={{ width: "5%" }}>{letter.toUpperCase()}</span>
                  <div className="w-[78%] max-sm:w-[68%] h-2.5 rounded-[5px] mr-auto bg-(--background-pogress)">
                    <div
                      style={{
                        width: `${percent}%`,
                        height: "10px",
                        borderRadius: "5px",
                        backgroundColor: "#DC8BE0",
                      }}
                    ></div>
                  </div>

                  <div className="text-gary-500">
                    {letterCount[letter]}
                    {" ("}
                    {percent}%{")"}
                  </div>
                </li>
              ))}
            </ul>
          )}
          {Object.entries(letterDensity).length > 5 && (
            <button
              onClick={toggleShowAll}
              className="w-fit bg-transparent border border-none cursor-pointer text-gray-400"
            >
              {showAll ? "Show Less \u02c4" : "Show More \u02c5"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterCounter;
