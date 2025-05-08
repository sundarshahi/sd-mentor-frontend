import React from 'react'
import { useState } from "react";
import ModalDialog from "./modal";
import styles from "./modal.module.css";
const Main = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
    return (
      <div className="App">
        <div className={`${showModal ? styles.blur : ""}`}>
          <h1>Modal Dialog</h1>
          <button onClick={openModal}>Open Modal</button>
        </div>
        <ModalDialog isOpen={showModal} onclose={closeModal} />
      </div>
    );
}

export default Main