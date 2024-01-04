import { type EventProp } from "./Event";

const registerButton = ({ maxCap, current }: { maxCap: number; current: number }) => {
  if (current >= maxCap) {
    return (
      <div className="flex h-full">
        <div className="w-[71px] lg:w-8 h-full mr-[5px] lg:mr-[47px] rounded-2xl border border-pink-600 items-center justify-center flex">
          <div className="text-center text-pink-600 text-sm lg:text-base mt-2 font-medium font-['IBM Plex Sans Thai']">
            {maxCap + "/" + maxCap}
          </div>
        </div>
        <div className="w-36 h-full rounded-2xl border border-pink-600 items-center justify-center inline-flex">
          <div className="text-center text-pink-600 text-sm font-medium font-['IBM Plex Sans Thai']">
            ลงทะเบียน / Register
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex h-full">
        <div className="w-[71px] lg:w-8 h-full mr-[5px] lg:mr-[47px] rounded-2xl border border-pink-600 items-center justify-center flex">
          <div className="text-center text-pink-600 text-sm lg:text-base font-medium font-['IBM Plex Sans Thai']">
            {current + "/" + maxCap}
          </div>
        </div>
        <div className="w-36 h-full bg-pink-500 rounded-2xl border border-pink-500 justify-center items-center inline-flex">
          <div className="text-white text-sm font-medium font-['IBM Plex Sans Thai']">
            ลงทะเบียน / Register
          </div>
        </div>
      </div>
    );
  }
};

const formatTime = (dateTimeString: string): string => {
  const options = { hour: '2-digit', minute: '2-digit',hour12: false  };
  return new Date(dateTimeString).toLocaleTimeString('en-US', options);
};

const daySchedule = ({ schedules, ind, maxCap }: { schedules: EventProp["schedules"]; ind: number; maxCap: number }) => {
  
  const schedule = schedules[ind];
  const startsAt = formatTime(schedule.starts_at);
  const endsAt = formatTime(schedule.ends_at);

  return (
    <div className="flex justify-start items-center mt-2 rounded-2xl py-2.5 lg:py-4 pr-2.5 lg:pr-3 pl-2 lg:pl-4 h-[47px] lg:h-14 border border-pink-600">
      <div className="flex w-full whitespace-nowrap mr-[5px] lg:mr-7 text-pink-600 text-sm lg:text-base font-medium font-['IBM Plex Sans Thai'] ">
        {endsAt} - {startsAt} 
      </div>
      {registerButton({ maxCap, current: schedule.current_attendee })}
    </div>
  );
  
};

export default daySchedule;
