import clsx from "clsx";
import { useState } from "react";
import FacultyDetailBox from "./FacultyDetailBox.tsx";
import type { FacultyInterested } from "./Form.tsx";

interface Props {
  setFacultiesPlannedToVisit: React.Dispatch<
    React.SetStateAction<FacultyInterested[]>
  >;
  facultiesPlannedToVisit: FacultyInterested[];
}

const PlannedFacultyBox = ({
  setFacultiesPlannedToVisit,
  facultiesPlannedToVisit,
}: Props) => {
  const [boxCount, setBoxCount] = useState<number>(1);
  const addBox = () => {
    setBoxCount(boxCount + 1);
  };
  return (
    <div className="flex h-fit w-full max-w-xl flex-col gap-2 rounded-2xl border-2 p-5 text-sm font-medium  shadow-inner shadow-white backdrop-blur-2xl">
      <p>
        คณะที่อยากไปในวันงาน (ไม่เกิน 3 คณะ) / Faculties planned to visit
        (maximum: 3)
      </p>
      <div className="flex w-full flex-col gap-4">
        {[...Array(boxCount)].map((_, index) => (
          <FacultyDetailBox
            key={index}
            number={String(index + 1)}
            setValues={setFacultiesPlannedToVisit}
            faculties={facultiesPlannedToVisit}
            onlyFaculty={true}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={addBox}
        className={clsx(
          "h-6 w-32 place-self-end rounded-2xl bg-white p-1 text-xs text-pink-500",
          boxCount >= 3 && "hidden"
        )}
      >
        เพิ่ม / Add more +
      </button>
    </div>
  );
};
export default PlannedFacultyBox;
