import { useState } from "react";
import { QrReader } from "react-qr-reader";

import { Switch } from "@/components/ui/switch";
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
  const [scanndedData, setScannedData] = useState<UserShowedData>();
  const [textValue, setTextValue] = useState<string>("");
  const [isScanning, setIsScanning] = useState<boolean>(true);
  const [isPauseAfterScan, setIsPauseAfterScan] = useState<boolean>(true);

  const checkIn = async (userId: string) => {
    if (!userId || !isScanning) return;
    if (userId.length > 5 && userId.slice(0, 2) === "67")
      userId = userId.slice(2, 7);
    setTextValue(userId);
    setScannedData(undefined);
    const res = await fetch(
      import.meta.env.PUBLIC_API_BASE_URL + "/staff/checkin/" + userId,
      { method: "POST", headers: { Authorization: `Bearer ${token}` } }
    );
    setShowModal(true);

    if (!res.ok) {
      setTextValue("");
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
      return;
    }

    const user: CheckInDataDTO = await res.json();
    if (user.already_checkin) {
      toast({
        title: "Already check-in",
        variant: "destructive",
        description: "This user already check-in",
      });
    }

    if (isPauseAfterScan) {
      setIsScanning(false);
    } else {
      setTextValue("");
      setIsScanning(true);
    }
    setScannedData({ ...user.user, id: userId });
  };

  return (
    <div className="flex w-full flex-col items-center px-4 pb-8 text-white">
      <div className="relative flex aspect-square w-full rounded-2xl bg-indigo-950">
        {!isScanning && (
          <div className="absolute z-10 flex aspect-square w-full items-center justify-center rounded-2xl bg-indigo-950">
            <button
              className="z-20 rounded-2xl border-2 border-white px-4 py-2 text-xl font-bold shadow-inner shadow-white"
              onClick={() => {
                setIsScanning(true);
                setShowModal(false);
                setTextValue("");
              }}
            >
              ไปต่อ / Continue
            </button>
          </div>
        )}
        <QrReader
          className="w-full"
          onResult={(res) => {
            if (res) checkIn(res.getText());
          }}
          constraints={{ facingMode: "environment" }}
        />
      </div>
      {showModal &&
        (scanndedData ? (
          <User
            id={scanndedData.id}
            first_name={scanndedData.first_name}
            last_name={scanndedData.last_name}
            allergies={scanndedData.allergies}
            medical_condition={scanndedData.medical_condition}
          />
        ) : (
          <Failed />
        ))}
      <div className="my-6 flex flex-col items-center">
        <p className="text-xl font-bold">แสกน QR Code เพื่อเช็คอิน</p>
        <p className="font-medium">Scan QR Code to check-in</p>
      </div>
      <div className="mt-6 w-4/5 max-w-2xl">
        <div className="w-full text-sm">เลข ID / ID Number</div>
        <input
          className="h-12 w-full rounded-2xl p-3 font-medium text-pink-550 placeholder:text-pink-400"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="กรอกเลข ID ที่นี่ / Enter ID here"
        ></input>
      </div>
      <button
        className="mt-8 rounded-2xl border-2 border-white px-3 py-2 text-xl font-bold shadow-inner shadow-white backdrop-blur-2xl"
        onClick={() => checkIn(textValue)}
      >
        เช็คอิน / Check-in
      </button>
      <div className="mt-8 flex items-center justify-center gap-2">
        <Switch
          id="pauseAfterScan"
          checked={isPauseAfterScan}
          onCheckedChange={(checked) => setIsPauseAfterScan(checked)}
        />
        <label htmlFor="pauseAfterScan">
          พักหลังจากสแกนสำเร็จ / Pause after scan
        </label>
      </div>
    </div>
  );
};

export default QR;
