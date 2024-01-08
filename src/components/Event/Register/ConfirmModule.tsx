import type React from "react";

interface Props {
  date: string;
  time: string;
  name: string;
  faculty: { th: string; en: string };
  setIsShowConfirm: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfirmModule: React.FC<Props> = ({
  date,
  time,
  name,
  faculty: { th, en },
  setIsShowConfirm,
}) => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/20 px-4 backdrop-blur-2xl">
      <div className="flex w-96 max-w-full flex-col items-center justify-between gap-4 rounded-2xl bg-white px-6 py-8 text-center text-pink-550 md:gap-8">
        <div className="flex w-full flex-col gap-1">
          <h1 className="text-2xl font-bold">ยืนยันการเข้าร่วมกิจกรรม</h1>
          <h2>You will be attending</h2>
        </div>
        <div className="flex w-full flex-col justify-between gap-2 rounded-2xl border-2 border-pink-550 p-4 text-left text-sm font-medium text-pink-550">
          <h2 className="text-lg font-bold">{name}</h2>
          <div className="flex flex-col">
            <h3 className="font-medium">{th}</h3>
            <h4 className="text-sm font-medium">{en}</h4>
          </div>
          <div className="grid grid-cols-[24px_minmax(0,1fr)] gap-2">
            <i className="icon-[mdi--calendar-blank-outline] text-2xl"></i>
            <p>{date}</p>
          </div>
          <div className="grid grid-cols-[24px_minmax(0,1fr)] gap-2">
            <i className="icon-[mdi--alarm-clock] text-2xl"></i>
            <p>{time}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button
            className="flex w-full items-center justify-center gap-2"
            onClick={() => setIsShowConfirm(false)}
          >
            <div className="icon-[mdi--arrow-back-circle] text-2xl"></div>
            <p className="text-base">กลับ / Back</p>
          </button>
          <button
            className="rounded-2xl border-2 border-pink-550 p-3 text-2xl font-bold"
            type="submit"
          >
            ยืนยัน / Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModule;
