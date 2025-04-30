import { useEffect } from "react";

const Toast = ({ message, type, duration, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(()=>{
      onClose();
    },duration);
    return () => clearTimeout(timer);
  }, [duration,onClose]);


  const toastColor = () => {
    if (type === "success") {
      return "green";
    } else if (type === "error") {
      return "red";
    } else if (type === "info") {
      return "blue";
    } else {
      return "white";
    }
  };

  return (
    <div
      style={{
        height: "40px",
        width: "300px",
        backgroundColor: toastColor(),
        color: "white",
        borderRadius: "5px",
        margin: "auto",
        marginTop: "10px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "9px",
      }}
    >
      <h1>{message}</h1>
    </div>
  );
};

export default Toast;
