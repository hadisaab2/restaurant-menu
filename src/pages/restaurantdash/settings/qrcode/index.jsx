import React, { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Button, Container } from "./styles";
export default function QrCode({userInformation}) {
  const qrRef = useRef(null);
  const qrValue = `https://www.menugic.com/${userInformation?.restaurant_name}`;
  const downloadQRCodeAsPDF = () => {
    const input = qrRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10);
      pdf.save("qrcode.pdf");
    });
  };
  return (
    <Container>
      <div ref={qrRef} >
        <QRCodeCanvas value={qrValue} style={{width:"80px",height:"80px"}}/>
      </div>
      <Button onClick={downloadQRCodeAsPDF}>Generate QrCode</Button>
    </Container>
  );
}
