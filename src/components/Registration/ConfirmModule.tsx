const ConfirmModule = () => {
  return (
    <div className="sticky bottom-1/2 flex h-60 w-80 flex-col items-center justify-center rounded-2xl bg-white p-3 text-center text-[#CA4072]">
      <div className="w-fit pb-6">
        <p className="text-2xl">ยืนยันข้อมูลถูกต้อง</p>
        <p className="text-base ">
          I hereby confirm that all information provided is correct.
        </p>
      </div>
      <div className="flex">
        <div className="icon-[mdi--arrow-back-circle] mr-2 mt-1 text-[#CA4072]"></div>
        <p className="text-base">กลับ / Back</p>
      </div>
      <button className="mt-2 rounded-2xl border-4 border-[#CA4072] p-3 text-2xl">
        ยืนยัน / Confirm
      </button>
    </div>
  );
};
export default ConfirmModule;
