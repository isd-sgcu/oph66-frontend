interface Props {
  eventDate: string;
  eventTime: string;
  eventName: string;
  eventFaculty: string;
}

const ConfirmModule = ({
  eventDate,
  eventTime,
  eventName,
  eventFaculty,
}: Props) => {
  return (
    <div className="fixed bottom-32 flex h-fit w-80 flex-col items-center justify-center rounded-2xl bg-white p-4 text-center text-[#CA4072]">
      <div className="w-fit pb-6">
        <p className="text-2xl">ยืนยันการเข้าร่วมกิจกรรม</p>
        <p className="text-base ">You will be attending</p>
      </div>
      <div className="rounded-2xl border-2 border-solid border-[#CA4072] p-2">
        <h2 className="text-xl font-bold">{eventName}</h2>
        <h3 className="text-lg font-medium">{eventFaculty}</h3>
        <div className="flex text-[#CA4072]">
          <div className="icon-[mdi--calendar-blank-outline] mr-3 mt-1 p-0"></div>
          <p className="text-base font-medium">{eventDate}</p>
        </div>
        <div className="flex text-[#CA4072]">
          <div className="icon-[mdi--alarm-clock] mr-3 mt-1"></div>
          <p className="text-base font-medium">{eventTime}</p>
        </div>
      </div>
      <div className="my-4 flex">
        <div className="icon-[mdi--arrow-back-circle] mr-2 mt-1 text-[#CA4072]"></div>
        <p className="text-base">กลับ / Back</p>
      </div>
      <button className="rounded-2xl border-4 border-[#CA4072] p-3 text-2xl">
        ยืนยัน / Confirm
      </button>
    </div>
  );
};
export default ConfirmModule;
