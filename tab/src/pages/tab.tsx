import "../css/tab.css";
import { useState } from "react";
const Tab = () => {
  const [activeTab, setActiveTab] = useState("First");
  const [content, setContent] = useState("This is First Tab Content.");

  const handleClick = (e:React.MouseEvent<HTMLDivElement>) => {
    switch (e.currentTarget.innerText) {
      case "First Tab":
        setContent("This is First Tab Content.");
        setActiveTab("First");
        break;
      case "Second Tab":
        setContent("This is Second Tab Content.");
        setActiveTab("Second");
        break;
      case "Third Tab":
        setContent("This is Third Tab Content.");
        setActiveTab("Third");
        break;
      case "Fourth Tab":
        setContent("This is Fourth Tab Content.");
        setActiveTab("Fourth");
        break;
      default:
        setContent("This is First Tab Content.");
        setActiveTab("First");
        break;
    }
  };

  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <div className="tab-main">
        <div
          className={activeTab === "First" ? "tab tab-active" : "tab"}
          onClick={handleClick}
        >
          First Tab
        </div>
        <div
          className={activeTab === "Second" ? "tab tab-active" : "tab"}
          onClick={handleClick}
        >
          Second Tab
        </div>
        <div
          className={activeTab === "Third" ? "tab tab-active" : "tab"}
          onClick={handleClick}
        >
          Third Tab
        </div>
        <div
          className={activeTab === "Fourth" ? "tab tab-active" : "tab"}
          onClick={handleClick}
        >
          Fourth Tab
        </div>
      </div>
      <div className="tab-content">{content}</div>
    </div>
  );
};

export default Tab;
