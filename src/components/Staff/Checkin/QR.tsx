import QrScanner from "qr-scanner";
import { useEffect, useRef, useState } from "react";

import { useToast } from "@/components/ui/use-toast";
import Failed from "./Failed";
import User from "./User";

import type { CheckInDataDTO, UserShowedData } from "@/types/staff";

interface Props {
  token: string;
}

const QR = ({ token }: Props): JSX.Element => {
  const { toast } = useToast();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [data, setData] = useState<UserShowedData>();
  const [textValue, setTextValue] = useState<string>("");
  const isScanning = useRef<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const checkIn = async (userId: string) => {
    if (!isScanning.current) return;
    isScanning.current = false;
    if (!userId || isNaN(Number(userId))) {
      toast({
        title: "Invalid ID",
        variant: "destructive",
        description: "ID must be a number",
      });
      return;
    }
    if (userId.length > 5) userId = userId.slice(2, 7);
    setTextValue(userId);
    const res = await fetch(
      import.meta.env.PUBLIC_API_BASE_URL + "/staff/checkin/" + userId,
      { method: "POST", headers: { Authorization: `Bearer ${token}` } }
    );
    setShowModal(true);

    if (!res.ok) {
      const error = await res.json();
      if (error.title === "invalid-token") {
        toast({
          title: "Unauthorized staff",
          variant: "destructive",
          description: "Your staff token is invalid",
        });
      } else if (error.title === "forbidden") {
        toast({
          title: "Forbidden",
          variant: "destructive",
          description: `UserId (${userId}) is invalid`,
        });
      } else if (error.title === "not-found") {
        toast({
          title: "User Not found",
          variant: "destructive",
          description: `UserId (${userId}) is not found`,
        });
      } else {
        toast({
          title: "Something went wrong",
          variant: "destructive",
          description: error.title,
        });
      }
      setTextValue("");
      return;
    }

    const user: CheckInDataDTO = await res.json();
    if (!user.user) {
      toast({
        title: "Something went wrong",
        variant: "destructive",
        description: "User not found",
      });
      return;
    }
    if (user.already_checkin) {
      toast({
        title: "⚠️ Already check-in",
        description: "This user already check-in",
      });
    }

    setData({ ...user.user, id: userId });
  };

  useEffect(() => {
    if (!videoRef.current) return;
    const qrScanner = new QrScanner(
      videoRef.current,
      (result) => checkIn(result.data),
      {
        highlightScanRegion: true,
        highlightCodeOutline: true,
        returnDetailedScanResult: true,
      }
    );
    qrScanner.start();
    return () => {
      qrScanner.destroy();
    };
  }, []);

  return (
    <div className="flex w-full flex-col items-center px-4 pb-8 text-white">
      <div className="relative flex aspect-square w-full max-w-xl overflow-hidden rounded-2xl bg-indigo-950">
        {!isScanning.current && (
          <button
            className="absolute z-10 flex aspect-square w-full items-center justify-center rounded-2xl bg-indigo-950"
            onClick={() => {
              isScanning.current = true;
              setShowModal(false);
              setTextValue("");
            }}
          >
            <p className="text-center text-2xl font-bold">
              กดเพื่อเริ่มสแกน <br /> Tap to start scanning
            </p>
          </button>
        )}
        <video ref={videoRef} className="h-full w-full object-cover"></video>
      </div>
      {showModal &&
        (data ? (
          <User
            id={data.id}
            first_name={data.first_name}
            last_name={data.last_name}
            allergies={data.allergies}
            medical_condition={data.medical_condition}
          />
        ) : (
          <Failed />
        ))}
      {isScanning.current && (
        <div className="mt-6 flex flex-col items-center">
          <p className="text-xl font-bold">แสกน QR Code เพื่อเช็คอิน</p>
          <p className="font-medium">Scan QR Code to check-in</p>
        </div>
      )}
      <div className="mt-6 w-4/5 max-w-2xl">
        <div className="w-full text-sm">เลข ID / ID Number</div>
        <input
          className="h-12 w-full rounded-2xl p-3 font-medium text-pink-550 placeholder:text-pink-400"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="กรอกเลข ID ที่นี่ / Enter ID here"
        />
      </div>
      <button
        className="mt-8 rounded-2xl border-2 border-white px-3 py-2 text-xl font-bold shadow-inner shadow-white backdrop-blur-2xl"
        onClick={() => checkIn(textValue)}
      >
        เช็คอิน / Check-in
      </button>
    </div>
  );
};

export default QR;
