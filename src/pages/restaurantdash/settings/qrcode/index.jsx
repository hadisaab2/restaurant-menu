import React, { useEffect, useRef } from "react";
import QRCode from "qrcode";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Button, Container } from "./styles";
import { useGetRestaurantLogoQuery } from "../../../../apis/restaurants/getRestauarant";

export default function QrCode({ userInformation }) {
  const qrRef = useRef(null);
  const canvasRef = useRef(null);
  const qrValue = `https://www.menugic.com/${userInformation?.restaurant_name}`;

  const { isLoading, response } = useGetRestaurantLogoQuery({
    name: userInformation?.restaurant_name,
    onSuccess: () => {},
  });

  useEffect(() => {
    if (!isLoading && response?.data?.logoURL) {
      generateQRCodeWithLogo(qrValue, response.data.logoURL);
    }
  }, [isLoading, response]);

  const generateQRCodeWithLogo = (text, logoUrl) => {
    const canvas = canvasRef.current;
    QRCode.toCanvas(canvas, text, { errorCorrectionLevel: 'H', scale: 10 }, (error) => {
      if (error) {
        console.error("Error generating QR code", error);
        return;
      }
      const ctx = canvas.getContext('2d');
      const image = new Image();
      image.crossOrigin = "Anonymous"; // Handle CORS
      image.src = `https://storage.googleapis.com/ecommerce-bucket-testing/${logoUrl}`;
      console.log("Loading image:", image.src); // Debugging log

      image.onload = () => {
        console.log('Image loaded'); // Debugging log
        const logoSize = 50;
        const x = (canvas.width - logoSize) / 2;
        const y = (canvas.height - logoSize) / 2;
        ctx.drawImage(image, x, y, logoSize, logoSize);
      };

      image.onerror = () => {
        console.error('Failed to load image'); // Error handling
        // Use a default image if the specified image fails to load
        const defaultImage = new Image();
        defaultImage.src = './logo.png'; // Provide the path to a default logo
        defaultImage.onload = () => {
          console.log('Default image loaded'); // Debugging log
          const logoSize = 50;
          const x = (canvas.width - logoSize) / 2;
          const y = (canvas.height - logoSize) / 2;
          ctx.drawImage(defaultImage, x, y, logoSize, logoSize);
        };
      };
    });
  };

  const downloadQRCodeAsPDF = () => {
    const input = qrRef.current;
    html2canvas(input, { scale: 4 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
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
    });
  };

  return (
    <Container>
      <div ref={qrRef} style={{ width: "320px", height: "320px" }}>
        <canvas ref={canvasRef} width="320" height="320"></canvas>
      </div>
      <Button onClick={downloadQRCodeAsPDF}>Generate QR Code</Button>
    </Container>
  );
}
