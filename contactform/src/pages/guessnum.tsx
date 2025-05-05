import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const GuessNum = () => {
  const [guessedNum, setGuessedNum] = useState(0);
  const [message, setMessage] = useState("");
  const [num, setNum] = useState<number>(0);

  const randomNum = () => 
    Math.floor(Math.random() * 100) + 1;
  ;

  const onReset = () => {
    setGuessedNum(randomNum);
    setMessage("");
    window.location.reload();
  };

  useEffect(() => {
    setNum(randomNum);
  },[]);
  const checkNum = () => {
    if (guessedNum < 1 || guessedNum > 100) {
      setMessage("Please enter a number between 1 and 100.");
    } else if (guessedNum === num) {
      setMessage("You guessed the correct number!");
    } else if (guessedNum > num) {
      setMessage("Too high! Please try again.");
    } else {
      setMessage("Too low! Please try again.");
    }
  };


  return (
    <>
      <Link to="/">Back</Link>
      <button
        style={{
          width: "100px",
          height: "30px",
          marginLeft: "25px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
        onClick={onReset}
      >
        Reset
      </button>
      <h1>Guess the number</h1>
      <input
        style={{
          width: "300px",
          height: "30px",
          border: "2px solid black",
          borderRadius: "10px",
        }}
        placeholder="Enter a number between 1 and 100"
        type="number"
        onChange={(e) => setGuessedNum(parseInt(e.target.value))}
      />
      <button
        style={{
          width: "100px",
          height: "30px",
          marginLeft: "25px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
        onClick={checkNum}
      >
        Check
      </button>
      <p>{message}</p>
    </>
  );
};

export default GuessNum;
