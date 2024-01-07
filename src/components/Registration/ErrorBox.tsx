const ErrorBox = () => {
  return (
    <div className="flex w-full flex-col rounded-2xl bg-[#F55572] px-4 py-2 text-center">
      <p className="font-bold">กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน</p>
      <p className="text-sm font-medium">Please fill out all required fields</p>
    </div>
  );
};
export default ErrorBox;
