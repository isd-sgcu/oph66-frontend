import { type EventProp } from "./Event";

const registerButton = ({ maxCap, current }: { maxCap: number; current: number }) => {
  if (current >= maxCap) {
    return (
      <div className="flex h-max gap-[5px]">
        <div className="w-18 h-max rounded-2xl border border-pink-600 items-center justify-center flex">
          <div className="text-center text-pink-600 text-sm font-medium font-['IBM Plex Sans Thai']">
            {maxCap + "/" + maxCap}
          </div>
        </div>
        <div className="w-36 h-max px-2.5 rounded-2xl border border-pink-600 items-center justify-center inline-flex">
          <div className="text-center text-pink-600 text-sm font-medium font-['IBM Plex Sans Thai']">
            ลงทะเบียน / Register
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex h-max gap-[5px]">
        <div className="w-18 h-max rounded-2xl border border-pink-600 items-center justify-center gap-2.5 inline-flex">
          <div className="text-center text-pink-600 text-sm font-medium font-['IBM Plex Sans Thai']">
            {current + "/" + maxCap}
          </div>
        </div>
        <div className="w-36 h-max px-2.5 bg-pink-500 rounded-2xl border border-pink-500 justify-center items-center gap-2.5 inline-flex">
          <div className="w-fit h-max text-white text-sm font-medium font-['IBM Plex Sans Thai']">
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
    <div className="justify-start items-center mt-2 inline-flex gap-3 rounded-2xl py-2.5 pr-2.5 pl-2 h-[47px] border border-pink-600">
      <div className="flex w-fit text-pink-600 text-sm font-medium font-['IBM Plex Sans Thai'] ">
      {endsAt} - {startsAt} 
      </div>
      {registerButton({ maxCap, current: schedule.current_attendee })}
    </div>
  );
};

export default daySchedule;
