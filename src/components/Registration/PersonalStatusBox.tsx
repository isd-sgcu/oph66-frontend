import clsx from "clsx";
import { useEffect, useState } from "react";
import RadioBox from "../RadioBox";
import TextBox from "../TextBox";

interface Props {
  setStatus: () => void;
  setStudentStatus: () => void;
  isShowError: boolean;
  status: string;
  studentStatus: string;
}
const PersonalInfoBox = ({
  setStatus,
  setStudentStatus,
  isShowError,
  status,
  studentStatus,
}: Props) => {
  const [otherStudentWritable, setOtherStudentWritable] = useState(false);
  const [otherWritable, setOtherWritable] = useState(false);

  useEffect(() => {
    if (status !== "student") {
      setStudentStatus("");
    }
    if (
      status !== "student" &&
      status !== "reapplying" &&
      status !== "homeSchool" &&
      status !== "parent" &&
      status !== ""
    ) {
      setOtherWritable(true);
    } else {
      setOtherWritable(false);
    }
    if (
      studentStatus != "middleSchool" &&
      studentStatus !== "highSchool" &&
      studentStatus !== "vocCert" &&
      studentStatus !== ""
    ) {
      setOtherStudentWritable(true);
    } else {
      setOtherStudentWritable(false);
    }
    console.log("status = " + status);
    console.log("studentStatus = " + studentStatus);
  }, [status, studentStatus]);

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
                setValue={setStatus}
                isSelectable={true}
                isBeingChecked={status === "student"}
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
                  setValue={setStudentStatus}
                  isSelectable={status === "student"}
                  isBeingChecked={studentStatus === "middleSchool"}
                />
                <label className="text-base text-white">
                  ม.ต้น / Middle school
                </label>
              </div>
              <div className="flex flex-row">
                <RadioBox
                  name="educationLevel"
                  value="highSchool"
                  setValue={setStudentStatus}
                  isSelectable={status === "student"}
                  isBeingChecked={studentStatus === "highSchool"}
                />
                <label className="text-base text-white">
                  ม.ปลาย / High school
                </label>
              </div>
              <div className="flex flex-row">
                <RadioBox
                  name="educationLevel"
                  value="vocCert"
                  setValue={setStudentStatus}
                  isSelectable={status === "student"}
                  isBeingChecked={studentStatus === "vocCert"}
                />
                <label className="text-base text-white">
                  ปวช. หรือ ปวศ. / Voc. Cert. or High Voc. Cert.
                </label>
              </div>
              <div className="flex flex-row">
                <RadioBox
                  name="educationLevel"
                  value="other"
                  setValue={setStudentStatus}
                  isSelectable={status === "student"}
                  isBeingChecked={otherStudentWritable}
                />
                <label className="text-base text-white">อื่น ๆ / Other</label>
              </div>
              <div className="ml-6 h-8 w-1/2">
                <TextBox
                  name="otherEducationLevel"
                  setValue={setStudentStatus}
                  isSelectable={otherStudentWritable}
                />
              </div>
            </div>
            <div className="flex flex-row">
              <RadioBox
                name="status"
                value="homeSchool"
                setValue={setStatus}
                isSelectable={true}
                isBeingChecked={status === "homeSchool"}
              />
              <label className="text-medium text-white">
                เด็กบ้านเรียน / Home School
              </label>
            </div>
            <div className="flex flex-row">
              <RadioBox
                name="status"
                value="reapplying"
                setValue={setStatus}
                isSelectable={true}
                isBeingChecked={status === "reapplying"}
              />
              <label className="text-medium text-white">
                เด็กซิ่ว / Reapplying
              </label>
            </div>
            <div className="flex flex-row">
              <RadioBox
                name="status"
                value="parent"
                setValue={setStatus}
                isSelectable={true}
                isBeingChecked={status === "parent"}
              />
              <label className="text-medium text-white">
                ผู้ปกครอง / Parent
              </label>
            </div>
            <div className="flex flex-row">
              <RadioBox
                name="status"
                value="other"
                setValue={setStatus}
                isSelectable={true}
                isBeingChecked={status === "other"}
              />
              <label className="text-medium text-white">อื่น ๆ / Other</label>
            </div>
            <div className="ml-6 h-8 w-1/2">
              <TextBox
                name="otherStatus"
                setValue={setStatus}
                placeHolder=""
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
