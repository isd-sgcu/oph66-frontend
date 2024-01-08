import QR from "qrcode";
import React, { useEffect, useRef } from "react";

interface Props {
  userId: string;
}

const QRCode: React.FC<Props> = ({ userId }) => {
  const ref = useRef<HTMLCanvasElement>(null);

  const generateQRCode = async () => {
    const canvas = ref.current;
    if (canvas) {
      QR.toCanvas(canvas, userId, {
        errorCorrectionLevel: "H",
        margin: 1,
        width: 112,
        color: {
          dark: "#0000",
          light: "#fff",
        },
      });
    }
  };

  useEffect(() => {
    generateQRCode();
  }, []);

  return <canvas ref={ref} className="aspect-square w-28"></canvas>;
};

export default QRCode;
