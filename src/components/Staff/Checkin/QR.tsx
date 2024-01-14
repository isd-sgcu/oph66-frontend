import type { CheckInDataDTO, UserShowedData } from "@/types/staff";
import { Result } from "@zxing/library";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import Failed from "./Failed";
import User from "./User";
const QR = () => {
  const [isScanned, setIsScanned] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [data, setData] = useState<string | null>(null);
  const [scanndedData, setScannedData] = useState<UserShowedData | null>(null);
  const [textValue, setTextValue] = useState<string>("");
  useEffect(() => {
    if (data && !isScanned) {
      setIsScanned(true);
      checkIn(data);
      setData(null);
    }
  }, [data]);
  const handleScanResult = (token: Result, error: Error) => {
    if (token) {
      setData(token.getText);
      setShowModal(true);
    }
    if (error) {
      console.info(error);
    }
  };
  const checkIn = async (token: string) => {
    try {
      // check-in qr code
      const res = await fetch(
        import.meta.env.PUBLIC_API_BASE_URL + "/staff/checkin/" + token,
        { method: "POST" }
      );
      setShowModal(true);
      if (res.ok) {
        const user = res.json() as unknown as CheckInDataDTO;
        setScannedData({ ...user.user, id: token });
      } else {
        setScannedData(null);
      }
    } catch {
      console.log("Error! There was an error.");
    }
    setTextValue("");
  };
  return (
    <div className="flex w-full flex-col items-center text-white">
      <section>
        <QrReader
          className="h-56 w-56 rounded-2xl bg-indigo-950"
          onResult={handleScanResult}
          constraints={{ facingMode: "environment" }}
        />
        <motion.div
          className="h-full w-full"
          animate={{ opacity: [0.25, 0.5, 1, 0.5, 0.25] }}
          transition={{ duration: 1, repeat: Infinity }}
        ></motion.div>
      </section>
      <div className="my-6 flex flex-col items-center">
        <p className="text-xl font-bold">แสกน QR Code เพื่อเช็คอิน</p>
        <p className="font-medium">Scan QR Code to check-in</p>
      </div>
      <div className="mt-6 w-4/5 max-w-2xl">
        <div className="w-full text-sm">เลข ID / ID Number</div>
        <textarea
          className="h-12 w-full rounded-2xl p-3 text-black"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        ></textarea>
      </div>
      <button
        className="mt-8 rounded-2xl border-2 border-white px-3 py-2 text-xl font-bold shadow-inner shadow-white backdrop-blur-2xl"
        onClick={() => checkIn(textValue)}
      >
        เช็คอิน / Check-in
      </button>
      {showModal &&
        (scanndedData ? (
          <User
            id={scanndedData ? scanndedData.id : "00000"}
            first_name={scanndedData ? scanndedData.first_name : "John"}
            last_name={scanndedData ? scanndedData.last_name : "Doe"}
            allergies={scanndedData ? scanndedData.allergies : ""}
            medical_condition={
              scanndedData ? scanndedData.medical_condition : ""
            }
          />
        ) : (
          <Failed />
        ))}
    </div>
  );
};

export default QR;
