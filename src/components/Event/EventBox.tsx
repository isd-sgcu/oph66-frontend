export interface EventBoxProps {
  EventName: string;
  Enroll: boolean;
  CurrentEnrollment: number;
  MaxEnrollment: number;
  ThaiFaculty: string;
  EngFaculty: string;
  Date: string;
  Time: string;
  Location: string;
}
const EnrollBox: React.FC<{
  CurrentEnrollment: number;
  MaxEnrollment: number;
}> = ({ CurrentEnrollment, MaxEnrollment }) => (
  <div className="flex flex-row gap-2 text-white">
    <div className="rounded-full bg-pink-500 px-2 py-1 ">
      <p className="text-xs">ต้องลงทะเบียน/ Limited seats</p>
    </div>
    <div className="rounded-full border-2 border-white px-2 py-1">
      <p className="text-xs">
        {CurrentEnrollment} / {MaxEnrollment}
      </p>
    </div>
  </div>
);

const EventBox: React.FC<EventBoxProps> = ({
  EventName,
  Enroll,
  CurrentEnrollment,
  MaxEnrollment,
  ThaiFaculty,
  EngFaculty,
  Date,
  Time,
  Location,
}) => {
  return (
    <div className="box-border w-72 rounded-lg border-2 border-white bg-gradient-to-br from-gray-100 to-pink-400 shadow-md ring-offset-2 ring-offset-white">
      <a href="/">
        <div className="border-1 rounded-md border-black bg-gradient-to-r from-[#393570]  to-[#CA4072] px-4 py-2">
          <p className="font-ibm text-xl font-semibold uppercase text-white">
            {EventName}
          </p>
          {Enroll && <EnrollBox {...{ CurrentEnrollment, MaxEnrollment }} />}
        </div>
        <div className="flex flex-col px-4 py-2 text-start text-white">
          <p>{ThaiFaculty}</p>
          <p className="text-sm">{EngFaculty}</p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <i className="icon-[basil--calendar-solid] relative bottom-1 text-3xl text-white"></i>
              {Date}
            </div>
            <div className="flex gap-2">
              <i className="icon-[clarity--alarm-clock-solid] text-3xl text-white"></i>
              {Time}
            </div>
            <div className="flex gap-2">
              <i className="icon-[mdi--location] text-3xl text-white"></i>
              {Location}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
export default EventBox;
