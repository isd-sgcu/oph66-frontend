import type React from "react";

interface Props {
  setIsShowConfirm: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfirmModule: React.FC<Props> = ({ setIsShowConfirm }) => {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black/20 px-4 backdrop-blur-lg">
      <div className="flex h-72 min-h-fit w-80 max-w-full flex-col items-center justify-between rounded-2xl bg-white px-6 py-8 text-center text-pink-550">
        <div className="flex w-full flex-col gap-1">
          <p className="text-2xl font-bold">ยืนยันข้อมูลถูกต้อง</p>
          <p>I hereby confirm that all information provided is correct.</p>
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
