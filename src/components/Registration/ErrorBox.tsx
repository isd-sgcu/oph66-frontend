import clsx from "clsx";
const ErrorBox = () => {
  return (
    <div
      className={clsx(
        "mb-12 flex w-screen flex-shrink-0 flex-col items-center p-0"
      )}
    >
      <div className="m-0 flex w-1/3 max-w-xl flex-col items-center p-0">
        <div className="flex h-20 w-full flex-col rounded-2xl bg-[#F55572] p-3 text-center shadow-inner backdrop-blur-2xl">
          <p className="font-bold">กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน</p>
          <p className="text-sm">Please fill out all required fields</p>
        </div>
      </div>
    </div>
  );
};
export default ErrorBox;
