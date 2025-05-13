import BrowserExtension from "./components/BrowserExtension";
import devlens from "./assets/images/logo-devlens.svg";
import stylespy from "./assets/images/logo-style-spy.svg";
import speedboost from "./assets/images/logo-speed-boost.svg";
import jsonwizard from "./assets/images/logo-json-wizard.svg";
import tabmaster from "./assets/images/logo-tab-master-pro.svg";
import viewportbuddy from "./assets/images/logo-viewport-buddy.svg";
import markupnotes from "./assets/images/logo-markup-notes.svg";
import gridguides from "./assets/images/logo-grid-guides.svg";
import palettepicker from "./assets/images/logo-palette-picker.svg";
import linkchecker from "./assets/images/logo-link-checker.svg";
import domsnapshot from "./assets/images/logo-dom-snapshot.svg";
import consoleplus from "./assets/images/logo-console-plus.svg";

import { createContext, useEffect, useState } from "react";
interface ThemeContextType {
  theme: string;
  switchTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  switchTheme: () => {},
});


export const Contents = [
  {
    id: 1,
    image: devlens,
    title: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    activeState: false,
  },
  {
    id: 2,
    image: stylespy,
    title: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    activeState: false,
  },
  {
    id: 3,
    image: speedboost,
    title: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading",
    activeState: false,
  },
  {
    id: 4,
    image: jsonwizard,
    title: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    activeState: false,
  },
  {
    id: 5,
    image: tabmaster,
    title: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    activeState: false,
  },
  {
    id: 6,
    image: viewportbuddy,
    title: "ViewPortBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    activeState: false,
  },
  {
    id: 7,
    image: markupnotes,
    title: "MarkUp Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    activeState: false,
  },
  {
    id: 8,
    image: gridguides,
    title: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    activeState: false,
  },
  {
    id: 9,
    image: palettepicker,
    title: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    activeState: false,
  },
  {
    id: 10,
    image: linkchecker,
    title: "LinkChecker",
    description: " Scans and highlights broken links on any page.",
    activeState: false,
  },
  {
    id: 11,
    image: domsnapshot,
    title: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    activeState: false,
  },
  {
    id: 12,
    image: consoleplus,
    title: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    activeState: false,
  },
];

function App() {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.className =
      theme === "light" ? "light-theme" : "dark-theme";
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <BrowserExtension />
    </ThemeContext.Provider>
  );
}

export default App;
