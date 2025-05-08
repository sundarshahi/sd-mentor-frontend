import { QRCodeSVG } from "qrcode.react";
import styles from "./qr.module.css";
const QrCode = () => {
  return (
    <>
      <div className={styles.qrmain}>
        <h3>Qr Code</h3>
        <div className={styles.qr}>
          <QRCodeSVG value="https://www.google.com" size={200} bgColor="aliceblue" fgColor="black"/>
        </div>
        <p style={{ fontSize: "20px", fontFamily: "cursive" }}>
          Scan the qr code to go to google.
        </p>
      </div>
    </>
  );
};

export default QrCode;