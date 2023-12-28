import clsx from "clsx";
import { useEffect, useState } from "react";
import RadioBox from "../RadioBox";
import TextBox from "../TextBox";

interface Props {
  setStatus: () => void;
  setStudentStatus: () => void;
  isShowError: boolean;
}
const PersonalInfoBox = ({
  setStatus,
  setStudentStatus,
  isShowError,
}: Props) => {
  const [statusLocal, setStatusLocal] = useState("");
  const [studentStatusLocal, setStudentStatusLocal] = useState("");
  const [otherStudentWritable, setOtherStudentWritable] = useState(false);
  const [otherWritable, setOtherWritable] = useState(false);
  const setStatusForBoth = (s: string) => {
    setStatus(s);
    setStatusLocal(s);
  };
  const setStudentStatusForBoth = (s: string) => {
    setStudentStatus(s);
    setStudentStatusLocal(s);
  };

  useEffect(() => {
    if (statusLocal !== "student") {
      setStudentStatusLocal("");
    }
    if (
      statusLocal !== "student" &&
      statusLocal !== "reapplying" &&
      statusLocal !== "homeSchool" &&
      statusLocal !== "parent" &&
      statusLocal !== ""
    ) {
      setOtherWritable(true);
    } else {
      setOtherWritable(false);
    }
    if (
      studentStatusLocal != "middleSchool" &&
      studentStatusLocal !== "highSchool" &&
      studentStatusLocal !== "vocCert" &&
      studentStatusLocal !== ""
    ) {
      setOtherStudentWritable(true);
    } else {
      setOtherStudentWritable(false);
    }
    console.log("statusLocal = " + statusLocal);
    console.log("studentStatusLocal = " + studentStatusLocal);
  }, [statusLocal, studentStatusLocal]);

  return (
    <div className="mb-12 flex w-screen flex-shrink-0 flex-col items-center p-0">
      <div className="m-0 flex w-4/5 max-w-xl flex-col items-center p-0">
        <div
          className={clsx(
            "mb-1 h-fit w-full rounded-2xl border-4 border-solid p-9 shadow-inner backdrop-blur-2xl",
            isShowError ? "border-[#F55572]" : "border-white"
          )}
        >
          <label className="text-base text-white">สถานภาพ / Status*</label>
          <div className="mt-3 flex h-fit w-full flex-col space-y-1">
            <div className="flex flex-row">
              <RadioBox
                name="status"
                value="student"
                setValue={setStatusForBoth}
                isSelectable={true}
                isBeingChecked={statusLocal === "student"}
              />
              <label className="text-medium text-white">
                นักเรียน / Student
              </label>
            </div>
            <div className="ml-6 flex flex-col space-y-1">
              <label className="text-base text-white">
                ระดับการศึกษา / Education Level
              </label>
              <div className="flex flex-row">
                <RadioBox
                  name="educationLevel"
                  value="middleSchool"
                  setValue={setStudentStatusForBoth}
                  isSelectable={statusLocal === "student"}
                  isBeingChecked={studentStatusLocal === "middleSchool"}
                />
                <label className="text-base text-white">
                  ม.ต้น / Middle school
                </label>
              </div>
              <div className="flex flex-row">
                <RadioBox
                  name="educationLevel"
                  value="highSchool"
                  setValue={setStudentStatusForBoth}
                  isSelectable={statusLocal === "student"}
                  isBeingChecked={studentStatusLocal === "highSchool"}
                />
                <label className="text-base text-white">
                  ม.ปลาย / High school
                </label>
              </div>
              <div className="flex flex-row">
                <RadioBox
                  name="educationLevel"
                  value="vocCert"
                  setValue={setStudentStatusForBoth}
                  isSelectable={statusLocal === "student"}
                  isBeingChecked={studentStatusLocal === "vocCert"}
                />
                <label className="text-base text-white">
                  ปวช. หรือ ปวศ. / Voc. Cert. or High Voc. Cert.
                </label>
              </div>
              <div className="flex flex-row">
                <RadioBox
                  name="educationLevel"
                  value="other"
                  setValue={setStudentStatusForBoth}
                  isSelectable={statusLocal === "student"}
                  isBeingChecked={otherStudentWritable}
                />
                <label className="text-base text-white">อื่น ๆ / Other</label>
              </div>
              <div className="ml-6 h-8 w-1/2">
                <TextBox
                  name="otherEducationLevel"
                  setValue={setStudentStatusForBoth}
                  isSelectable={otherStudentWritable}
                />
              </div>
            </div>
            <div className="flex flex-row">
              <RadioBox
                name="status"
                value="homeSchool"
                setValue={setStatusForBoth}
                isSelectable={true}
                isBeingChecked={statusLocal === "homeSchool"}
              />
              <label className="text-medium text-white">
                เด็กบ้านเรียน / Home School
              </label>
            </div>
            <div className="flex flex-row">
              <RadioBox
                name="status"
                value="reapplying"
                setValue={setStatusForBoth}
                isSelectable={true}
                isBeingChecked={statusLocal === "reapplying"}
              />
              <label className="text-medium text-white">
                เด็กซิ่ว / Reapplying
              </label>
            </div>
            <div className="flex flex-row">
              <RadioBox
                name="status"
                value="parent"
                setValue={setStatusForBoth}
                isSelectable={true}
                isBeingChecked={statusLocal === "parent"}
              />
              <label className="text-medium text-white">
                ผู้ปกครอง / Parent
              </label>
            </div>
            <div className="flex flex-row">
              <RadioBox
                name="status"
                value="other"
                setValue={setStatusForBoth}
                isSelectable={true}
                isBeingChecked={statusLocal === "other"}
              />
              <label className="text-medium text-white">อื่น ๆ / Other</label>
            </div>
            <div className="ml-6 h-8 w-1/2">
              <TextBox
                name="otherStatus"
                setValue={setStatus}
                isSelectable={otherWritable}
              />
            </div>
          </div>
        </div>
        <p className="place-self-end text-xs text-white">
          จำเป็นต้องกรอก / Must be filled*
        </p>
      </div>
    </div>
  );
};

export default PersonalInfoBox;
