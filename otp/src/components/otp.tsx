import styles from "./otp.module.css";
import { useRef } from "react";
const Otp = () => {
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLInputElement>(null);
  const inputRef4 = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    nextRef?: React.RefObject<HTMLInputElement | null>
  ) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      nextRef?.current?.focus();
    } else {
      e.target.value = "";
    }
  };

  const handleKeydown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    prevRef?: React.RefObject<HTMLInputElement | null>
  ) => {
    const inputValue = e.currentTarget;
    if (e.key === "Backspace" && inputValue.value === "") {
      prevRef?.current?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pastedData = e.clipboardData.getData("text").trim();
      if(/^\d{4}$/.test(pastedData)){
          inputRef1.current!.value = pastedData[0];
          inputRef2.current!.value = pastedData[1];
          inputRef3.current!.value = pastedData[2];
          inputRef4.current!.value = pastedData[3];
          inputRef4.current!.focus();
      }
  }

  return (
    <div>
      <h1>OTP</h1>
      <div>
        <form>
          <input
            className={styles.input}
            type="text"
            inputMode="numeric"
            pattern="[0-9]"
            maxLength={1}
            ref={inputRef1}
            onChange={(e) => handleChange(e, inputRef2)}
            onKeyDown={(e) => handleKeydown(e)}
            onPaste={handlePaste}
          />
          <input
            className={styles.input}
            type="text"
            inputMode="numeric"
            pattern="[0-9]"
            maxLength={1}
            ref={inputRef2}
            onChange={(e) => handleChange(e, inputRef3)}
            onKeyDown={(e) => handleKeydown(e, inputRef1)}
          />
          <input
            className={styles.input}
            type="text"
            inputMode="numeric"
            pattern="[0-9]"
            maxLength={1}
            ref={inputRef3}
            onChange={(e) => handleChange(e, inputRef4)}
            onKeyDown={(e) => handleKeydown(e, inputRef2)}
          />
          <input
            className={styles.input}
            type="text"
            inputMode="numeric"
            pattern="[0-9]"
            maxLength={1}
            ref={inputRef4}
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => handleKeydown(e, inputRef3)}
          />
        </form>
      </div>
    </div>
  );
};

export default Otp;
