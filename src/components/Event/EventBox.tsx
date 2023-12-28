export interface EventBoxProps {
  eventName: string;
  walkIn: boolean;
  maxEnrollment: number;
  thaiFaculty: string;
  engFaculty: string;
  time: number;
  location: string;
  thai: boolean;
}
const EnrollBox: React.FC<{
  walkIn: boolean;
  maxEnrollment: number;
}> = ({ walkIn, maxEnrollment }) => (
  <div className="flex flex-col items-start gap-3 text-white">
    <div className="rounded-full bg-pink-500 px-2 py-1">
      <p className="text-xs">
        จำนวนที่นั่งต่อรอบ / Capacity per session : {maxEnrollment}
      </p>
    </div>
    {walkIn && (
      <div className="flex rounded-full border-2 border-white px-2 py-1">
        <p className="text-xs">Walk-in registration only</p>
      </div>
    )}
  </div>
);

const EventBox: React.FC<EventBoxProps> = ({
  eventName,
  walkIn,
  maxEnrollment,
  thaiFaculty,
  engFaculty,
  time,
  location,
  thai,
}) => {
  const sessionTime = ` ${time > 60 ? time / 60 : time} ${
    time > 60
      ? "ชั่วโมง ต่อรอบ / hours per session"
      : "นาที ต่อรอบ/ mins per session"
  }`;
  return (
    <div className="w-72 rounded-2xl border-2 border-white bg-pink-500 shadow-inner shadow-white ring-4 ring-white ring-opacity-10">
      <a href="/">
        <div className="flex flex-col gap-2 rounded-t-2xl bg-gradient-to-r from-indigo-900 to-pink-550 p-4 shadow-inner shadow-white">
          <p className="text-xl font-bold uppercase text-white">{eventName}</p>
          <EnrollBox walkIn={walkIn} maxEnrollment={maxEnrollment} />
        </div>
        <div className="flex flex-col gap-3 p-4 text-white">
          <div className="leading-none">
            <p className="text-md font-bold">{thaiFaculty}</p>
            <p className="text-sm">{engFaculty}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <i className="icon-[mdi--alarm] text-2xl text-white"></i>
              <p className="text-xs">{sessionTime}</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="icon-[mdi--location] text-2xl text-white"></i>
              <p className="text-xs">{location}</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="icon-[mdi--message-group] text-2xl text-white"></i>
              <p className="text-xs">
                {thai
                  ? "ภาษาไทย / Held in Thai"
                  : "ภาษาอังกฤษ / Held in English"}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
export default EventBox;
