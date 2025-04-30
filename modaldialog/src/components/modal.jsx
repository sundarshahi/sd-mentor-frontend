const ModalDialog = ({ isOpen, onclose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div
      style={{
        justifyContent: "center",
        textAlign: "center",
        display: "flex",
        position: "fixed",
        top: "30%",
        left: "40%",
      }}
    >
      <div
        style={{
          justifyContent: "center",
          border: "1px solid #000",
          padding: "10px",
          height: "150px",
          width: "200px",
          borderRadius: "10px",
          backgroundColor: "rgb(226, 218, 218)",
          boxShadow: "2px 2px 2px 2px grey",
        }}
      >
        <button
          style={{
            position: "absolute",
            marginLeft: "80px",
            backgroundColor: "red",
            borderRadius: "3px",
          }}
          onClick={onclose}
        >
          X
        </button>
        <h2>Modal</h2>
        <p>This is a modal dialog</p>
      </div>
    </div>
  );
};

export default ModalDialog;
