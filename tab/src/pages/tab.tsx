import "../css/tab.css";
import { useState, ReactNode } from "react";

interface TabProps {
  tabs: {
    label: string;
    content: ReactNode;
  }[];
}
const Tab = ({tabs}: TabProps) => {
  const [content, setContent] = useState<ReactNode>(tabs[0].content);
  const [activeTab, setActiveTab] = useState("First");

  const handleClick = (e:React.MouseEvent<HTMLDivElement>) => {
    switch (e.currentTarget.innerText) {
      case `${tabs[0].label}`:
        setContent(tabs[0].content);
        console.log(tabs[0].content);
        setActiveTab("First");
        break;
      case `${tabs[1].label}`:
        setContent(tabs[1].content);
        console.log(tabs[1].content);
        setActiveTab("Second");
        break;
      case `${tabs[2].label}`:
        setContent(tabs[2].content);
        setActiveTab("Third");
        break;
      case `${tabs[3].label}`:
        setContent(tabs[3].content);
        setActiveTab("Fourth");
        break;
      default:
        setContent(tabs[0].content);
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
          {tabs[0].label}
        </div>
        <div
          className={activeTab === "Second" ? "tab tab-active" : "tab"}
          onClick={handleClick}
        >
          {tabs[1].label}
        </div>
        <div
          className={activeTab === "Third" ? "tab tab-active" : "tab"}
          onClick={handleClick}
        >
          {tabs[2].label}
        </div>
        <div
          className={activeTab === "Fourth" ? "tab tab-active" : "tab"}
          onClick={handleClick}
        >
          {tabs[3].label}
        </div>
      </div>
      <div className="tab-content">{content}</div>
    </div>
  );
};

export default Tab;
