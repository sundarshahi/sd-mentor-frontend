import styles from "./tab.module.css";
import { useState, ReactNode } from "react";

interface TabProps {
  tabs: {
    label: string;
    content: ReactNode;
  }[];
}
const Tab = ({ tabs }: TabProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <div className={styles.tabmain}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={activeTabIndex === index ? styles.tabactive : styles.tab}
            onClick={() => setActiveTabIndex(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className={styles.tabcontent}>{tabs[activeTabIndex].content}</div>
    </div>
  );
};

export default Tab;
