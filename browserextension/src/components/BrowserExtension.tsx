import { useState } from "react";
import styles from "./BrowserExtension.module.css";
import logo from "../assets/images/logo.svg";
import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/icon-sun.svg";
import { Contents } from "../App";
import ToggleSwitch from "./ToggleSwitch";

import { ThemeContext } from "../App";
import { useContext } from "react";

interface Contents {
  id: number;
  image: string;
  title: string;
  description: string;
  activeState: boolean;
}

const BrowserExtension = () => {
  const { theme, switchTheme } = useContext(ThemeContext);
  const [extensions, setExtensions] = useState<Contents[]>(() =>
    localStorage.getItem("extensions")
      ? JSON.parse(localStorage.getItem("extensions") as string)
      : Contents
  );

  const [searchSelected, setSearchSelected] = useState<
    "all" | "active" | "inactive"
  >("all");

  const filteredExtensions = extensions.filter((extension) => {
    if (searchSelected === "all") {
      return true;
    } else if (searchSelected === "active" && extension.activeState) {
      return true;
    } else if (searchSelected === "inactive" && !extension.activeState) {
      return true;
    }
    return false;
  });

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logoDiv}>
            <img src={logo} alt="logo" className={styles.logo} />
          </div>
          <div className={styles.imgDiv}>
            <img
              src={theme === "light" ? moon : sun}
              onClick={switchTheme}
              alt="Theme"
              className={theme === "light" ? styles.img : styles.darkimg}
            />
          </div>
        </div>

        <div className={styles.mid}>
          <div className={styles.title}>Extensions List</div>
          <div className={styles.btnDiv}>
            <button
              className={
                searchSelected === "all" ? styles.searchbtn : styles.btn
              }
              onClick={() => {
                setSearchSelected("all");
              }}
            >
              All
            </button>
            <button
              className={
                searchSelected === "active" ? styles.searchbtn : styles.btn
              }
              onClick={() => {
                setSearchSelected("active");
              }}
            >
              Active
            </button>
            <button
              className={
                searchSelected === "inactive" ? styles.searchbtn : styles.btn
              }
              onClick={() => {
                setSearchSelected("inactive");
              }}
            >
              Inactive
            </button>
          </div>
        </div>

        <div className={styles.contents}>
          {filteredExtensions.map((content) => {
            return (
              <div className={styles.singleContent} key={content.id}>
                <div className={styles.singlecontentTop}>
                  <img
                    src={content.image}
                    alt={content.title}
                    className={styles.contentImg}
                  />
                  <div style={{ marginLeft: "10px" }}>
                    <div>
                      <b>{content.title}</b>
                    </div>
                    <div style={{ fontSize: "12px", color: "grey" }}>
                      {content.description}
                    </div>
                  </div>
                </div>

                <div className={styles.singleContentBottom}>
                  <button className={styles.removebtn}>Remove</button>
                  <div className={styles.switch}>
                    <ToggleSwitch
                      id={content.id}
                      activeState={content.activeState}
                      onToggle={() => {
                        setExtensions((prev) => {
                          const updated = prev.map((item) =>
                            item.id === content.id
                              ? { ...item, activeState: !item.activeState }
                              : item
                          );
                          localStorage.setItem(
                            "extensions",
                            JSON.stringify(updated)
                          );

                          return updated;
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrowserExtension;
