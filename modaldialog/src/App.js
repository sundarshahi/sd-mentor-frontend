import "./App.css";
import { useState } from "react";
import ModalDialog from "./components/modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="App">
      <div className={`${showModal ? "blur" : ""}`}>
        <h1>Modal Dialog</h1>
        <button onClick={openModal}>Open Modal</button>
      </div>
      <ModalDialog isOpen={showModal} onclose={closeModal} />
    </div>
  );
}

export default App;
