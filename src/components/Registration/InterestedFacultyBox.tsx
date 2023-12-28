import clsx from "clsx";
import { useState } from "react";
import FacultyDetailBox from "./FacultyDetailBox.tsx";
const InterestedFacultyBox = ({ setFacultiesInterested }) => {
  const [boxCount, setBoxCount] = useState(2);
  const addBox = () => {
    setBoxCount(boxCount + 1);
  };
  return (
    <div className="mb-12 flex w-screen flex-shrink-0 flex-col items-center p-0">
      <div className="m-0 flex w-4/5 max-w-xl flex-col items-center p-0">
        <div className="mb-1 flex h-fit w-full flex-col rounded-2xl border-4 border-solid border-white p-9 shadow-inner backdrop-blur-2xl">
          <p className="text-medium mb-5 place-self-start text-base text-white">
            คณะที่สนใจที่สุด (ไม่เกิน 3 คณะ) / Faculties interested (maximum: 3)
          </p>
          <div className="w-full" id="FacultyDetailBoxes">
            {[...Array(boxCount)].map((_, index) => (
              <FacultyDetailBox
                key={index}
                number={String(index + 1)}
                haveDepartment={true}
                haveFaculty={true}
                haveSection={true}
                name={`interested${index + 1}`}
                setValues={setFacultiesInterested}
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
      </div>
    </div>
  );
};
export default InterestedFacultyBox;
