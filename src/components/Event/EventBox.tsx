export interface EventBoxProps {
  EventName: string;
  Walkin: boolean;
  MaxEnrollment: number;
  ThaiFaculty: string;
  EngFaculty: string;
  Time: number;
  Location: string;
  Thai: boolean;
}
const EnrollBox: React.FC<{
  Walkin: boolean;
  MaxEnrollment: number;
}> = ({ Walkin, MaxEnrollment }) => (
  <div className="mb-2 flex flex-col items-start gap-3 text-white">
    <div className="rounded-full bg-pink-500 px-2 py-1 ">
      <p className="text-xs">
        จำนวนที่นั่งต่อรอบ / Capacity per session : {MaxEnrollment}
      </p>
    </div>
    {Walkin && (
      <div className="flex rounded-full border-2 border-white px-2 py-1">
        <p className="text-xs">Walk-in registration only</p>
      </div>
    )}
  </div>
);

const EventBox: React.FC<EventBoxProps> = ({
  EventName,
  Walkin,
  MaxEnrollment,
  ThaiFaculty,
  EngFaculty,
  Time,
  Location,
  Thai,
}) => {
  const SessionTime = ` ${Time > 60 ? Time / 60 : Time} ${
    Time > 60
      ? "ชั่วโมง ต่อรอบ / hours per session"
      : "นาที ต่อรอบ/ mins per session"
  }`;
  return (
    <div className="box-border w-72 rounded-lg border-2 border-white bg-pink-500 shadow-md ring-2 ring-white ring-opacity-5">
      <a href="/">
        <div className="border-1 rounded-md border-black bg-gradient-to-r from-[#393570]  to-[#CA4072] px-4 py-2">
          <p className="mb-4 ml-1 font-ibm text-xl font-semibold uppercase text-white">
            {EventName}
          </p>
          <EnrollBox {...{ Walkin, MaxEnrollment }} />
        </div>
        <div className="flex flex-col px-4 py-2  text-white">
          <p className="text-md font-bold">{ThaiFaculty}</p>
          <p className="mb-3 text-sm">{EngFaculty}</p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <i className="icon-[clarity--alarm-clock-solid] w-8 flex-shrink-0 text-3xl text-white"></i>
              <p className="text-xs">{SessionTime}</p>
            </div>
            <div className="flex gap-2">
              <i className="icon-[mdi--location] w-8 flex-shrink-0 text-3xl text-white"></i>
              <p className="text-xs">{Location}</p>
            </div>
            <div className="flex  gap-2">
              <i className="icon-[mdi--message-group] relative bottom-1 w-8 flex-shrink-0 text-3xl text-white"></i>
              <p className="text-xs">
                {Thai
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
