import CharacterCounter from "./components/CharacterCounter";
import "./App.css";
import { createContext, useEffect, useState } from "react";

interface ThemeContextProps {
  theme: string;
  switchTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  switchTheme: () => {},
});

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
    <>
      <ThemeContext.Provider value={{ theme, switchTheme }}>
        <CharacterCounter />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
