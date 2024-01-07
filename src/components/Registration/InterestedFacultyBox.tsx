import clsx from "clsx";
import { useState } from "react";

import type { FacultyInterested } from "@/types/form.ts";
import FacultyDetailBox from "./FacultyDetailBox.tsx";

interface Props {
  setFacultiesInterested: React.Dispatch<
    React.SetStateAction<FacultyInterested[]>
  >;
  facultiesInterested: FacultyInterested[];
}

const InterestedFacultyBox: React.FC<Props> = ({
  setFacultiesInterested,
  facultiesInterested,
}) => {
  const [boxCount, setBoxCount] = useState<number>(1);
  const addBox = () => {
    setBoxCount(boxCount + 1);
  };

  return (
    <div className="flex h-fit w-full max-w-xl flex-col gap-2 rounded-2xl border-2 p-5 text-sm font-medium  shadow-inner shadow-white backdrop-blur-2xl">
      <p>
        คณะที่สนใจที่สุด (ไม่เกิน 3 คณะ) / Faculties interested (maximum: 3)
      </p>
      <div className="flex w-full flex-col gap-4">
        {[...Array(boxCount)].map((_, index) => (
          <FacultyDetailBox
            key={index}
            number={String(index + 1)}
            setValues={setFacultiesInterested}
            faculties={facultiesInterested}
            onlyFaculty={false}
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
export default InterestedFacultyBox;
