import { useState } from "react";
import React from "react";
import Toast from "./toast"
const ToastDiaplay = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type, duration) => {
    const id = Date.now() + Math.random();
    setToasts((prevToasts) => [
      ...prevToasts,
      { id, message, type, duration: Number(duration) },
    ]);
  };
  console.log("toasts", toasts);

  const removetoast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
    console.log("toasts from removing", toasts);
  };

  return (
    <div className="App">
      <h1>Toast</h1>
      <button
        style={{ margin: "5px", borderRadius: "5px" }}
        onClick={() => addToast("Success Message", "success", "3000")}
      >
        Show Success
      </button>
      <button
        style={{ margin: "5px", borderRadius: "5px" }}
        onClick={() => addToast("Error Message", "error", "5000")}
      >
        Show Error
      </button>
      <button
        style={{ margin: "5px", borderRadius: "5px" }}
        onClick={() => addToast("Info Message", "info", "4000")}
      >
        Show Info
      </button>

      <div
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          zIndex: "9999",
        }}
      >
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={() => removetoast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ToastDiaplay;
