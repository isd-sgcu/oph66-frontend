import { Icon } from "@iconify/react";

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

const EventBox = ({
  EventName,
  Enroll,
  CurrentEnrollment,
  MaxEnrollment,
  ThaiFaculty,
  EngFaculty,
  Date,
  Time,
  Location,
}: EventBoxProps) => {
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
              <Icon
                icon="mingcute:calendar-fill"
                color="white"
                width="24"
                height="24"
              />
              {Date}
            </div>
            <div className="flex gap-2">
              <Icon
                icon="clarity:alarm-clock-solid"
                color="white"
                width="24"
                height="24"
              />
              {Time}
            </div>
            <div className="flex gap-2">
              <Icon icon="mdi:location" color="white" width="24" height="24" />
              {Location}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
export default EventBox;
