import "./App.css";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);

  const AddProgress = () => {
    if (progress >= 100) {
      setProgress(100);
    } else {
      setProgress(progress + 10);
    }
  };

  const DecreaseProgress = () => {
    if (progress <= 0) {
      setProgress(0);
    } else {
      setProgress(progress - 10);
    }
  };

  const progressColor = () => {
    if (progress >= 80) {
      return "green";
    } else if (progress >=40 && progress < 80) {
      return "orange";
    } 
    else {
      return "red";
    }
  }

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ height: "100%", width: `calc(${progress} * 2px)`, backgroundColor: progressColor() }}
        >
          <div style={{ textAlign: "center" }}>{progress}%</div>
        </div>
      </div>
      <div>
        <button className="btn" onClick={AddProgress}>
          +10%
        </button>
        <button className="btn" onClick={DecreaseProgress}>
          -10%
        </button>
      </div>
    </div>
  );
}

export default App;
