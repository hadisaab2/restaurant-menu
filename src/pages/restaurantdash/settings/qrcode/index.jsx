import React, { useEffect, useRef } from "react";
import QRCode from "qrcode";
import jsPDF from "jspdf";
import { Button, Container } from "./styles";

export default function QrCode({ userInformation }) {
  const qrRef = useRef(null);
  const qrValue = `https://${userInformation?.restaurant_name}.menugic.com/`;

  useEffect(() => {
    generateQRCode(qrValue);
  }, [qrValue]);

  const generateQRCode = async (text) => {
    try {
      const canvas = document.createElement('canvas');
      await QRCode.toCanvas(canvas, text, { errorCorrectionLevel: 'H', scale: 10 });
      qrRef.current.src = canvas.toDataURL("image/png");
    } catch (error) {
      console.error("Error generating QR code", error);
    }
  };

  const downloadQRCodeAsPDF = () => {
    const imgData = qrRef.current.src;
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4"
    });
    const imgWidth = 160; // Adjust the width of the image in mm
    const imgHeight = 160; // Adjust the height of the image in mm
    const xOffset = (pdf.internal.pageSize.getWidth() - imgWidth) / 2;
    const yOffset = (pdf.internal.pageSize.getHeight() - imgHeight) / 2;
    pdf.addImage(imgData, "PNG", xOffset, yOffset, imgWidth, imgHeight);
    pdf.save("qrcode.pdf");
  };

  return (
    <Container>
      <div style={{ width: "320px", height: "320px" }}>
        <img ref={qrRef} alt="QR Code" style={{ width: "100%", height: "100%" }} />
      </div>
      <Button onClick={downloadQRCodeAsPDF}>Generate QR Code</Button>
    </Container>
  );
}
