import styles from "./ToogleSwitch.module.css";
import { useEffect, useState } from "react";

type SwitchProps = {
  id: number;
  activeState: boolean;
  onToggle: (id: number) => void;
};

const ToggleSwitch = ({ id, activeState, onToggle }: SwitchProps) => {
  const [isOn, setIsOn] = useState(activeState);

  useEffect(() => {
    setIsOn(activeState);
  }, [activeState]);

  return (
    <div
      className={`${styles.main} ${isOn ? styles.on : ""}`}
      onClick={() => onToggle(id)}
    >
      <div className={styles.slider}></div>
    </div>
  );
};

export default ToggleSwitch;
