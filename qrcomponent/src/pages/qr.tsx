import { QRCodeSVG } from "qrcode.react";
import "../css/qr.css";
const QrCode = () => {
  return (
    <>
      <div className="qr-main">
        <h3>Qr Code</h3>
        <div className="qr">
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
