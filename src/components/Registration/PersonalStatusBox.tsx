import clsx from "clsx";
import React, { useEffect, useState } from "react";

import RadioBox from "../RadioBox";
import TextBox from "../TextBox";
interface Props {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setStudentStatus: React.Dispatch<React.SetStateAction<string>>;
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
  const [otherStudentWritable, setOtherStudentWritable] =
    useState<boolean>(false);
  const [otherWritable, setOtherWritable] = useState<boolean>(false);

  useEffect(() => {
    if (status !== "student") setStudentStatus("");
    setOtherWritable(
      !["student", "reapplying", "homeSchool", "parent"].includes(status)
    );

    setOtherStudentWritable(
      !["middleSchool", "highSchool", "vocCert"].includes(studentStatus)
    );
  }, [status, studentStatus]);

  return (
    <div
      className={clsx(
        "flex h-fit w-full max-w-xl flex-col gap-2 rounded-2xl border-2 p-5 text-sm font-medium text-white shadow-inner shadow-white backdrop-blur-2xl",
        isShowError ? "border-[#F55572] ring-4 ring-[#F55572]" : "border-white"
      )}
    >
      <label>สถานภาพ / Status*</label>
      <div className="flex h-fit w-full flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-1">
            <RadioBox
              name="status"
              value="student"
              setValue={setStatus}
              isBeingChecked={status === "student"}
            />
            <label>นักเรียน / Student</label>
          </div>
          {status === "student" && (
            <div className="ml-6 flex flex-col gap-1">
              <label>ระดับการศึกษา / Education Level</label>
              <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-1">
                <RadioBox
                  name="educationLevel"
                  value="middleSchool"
                  setValue={setStudentStatus}
                  isSelectable={status === "student"}
                  isBeingChecked={studentStatus === "middleSchool"}
                />
                <label>ม.ต้น / Middle school</label>
              </div>
              <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-1">
                <RadioBox
                  name="educationLevel"
                  value="highSchool"
                  setValue={setStudentStatus}
                  isSelectable={status === "student"}
                  isBeingChecked={studentStatus === "highSchool"}
                />
                <label>ม.ปลาย / High school</label>
              </div>
              <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-1">
                <RadioBox
                  name="educationLevel"
                  value="vocCert"
                  setValue={setStudentStatus}
                  isSelectable={status === "student"}
                  isBeingChecked={studentStatus === "vocCert"}
                />
                <label>ปวช. หรือ ปวศ. / Voc. Cert. or High Voc. Cert.</label>
              </div>
              <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-1">
                <RadioBox
                  name="educationLevel"
                  value="other"
                  setValue={setStudentStatus}
                  isSelectable={status === "student"}
                  isBeingChecked={otherStudentWritable}
                />
                <label>อื่น ๆ / Other</label>
              </div>
              {otherStudentWritable && (
                <div className="ml-6 h-8 w-1/2">
                  <TextBox
                    value={studentStatus}
                    placeHolder="โปรดระบุ / Please specify"
                    setValue={setStudentStatus}
                    isSelectable={otherStudentWritable}
                  />
                </div>
              )}
            </div>
          )}
        </div>
        <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-1">
          <RadioBox
            name="status"
            value="homeSchool"
            setValue={setStatus}
            isBeingChecked={status === "homeSchool"}
          />
          <label>เด็กบ้านเรียน / Home School</label>
        </div>
        <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-1">
          <RadioBox
            name="status"
            value="reapplying"
            setValue={setStatus}
            isBeingChecked={status === "reapplying"}
          />
          <label>เด็กซิ่ว / Reapplying</label>
        </div>
        <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-1">
          <RadioBox
            name="status"
            value="parent"
            setValue={setStatus}
            isBeingChecked={status === "parent"}
          />
          <label>ผู้ปกครอง / Parent</label>
        </div>
        <div className="flex flex-col gap-1">
          <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-1">
            <RadioBox
              name="status"
              value="other"
              setValue={setStatus}
              isBeingChecked={otherWritable}
            />
            <label>อื่น ๆ / Other</label>
          </div>
          {otherWritable && (
            <div className="ml-6 h-8 w-1/2">
              <TextBox
                setValue={setStatus}
                isSelectable={otherWritable}
                value={status}
                placeHolder="โปรดระบุ / Please specify"
              />
            </div>
          )}
        </div>
      </div>
      <p className="absolute -bottom-2 right-0 translate-y-full text-xs text-white">
        จำเป็นต้องกรอก / Must be filled*
      </p>
    </div>
  );
};

export default PersonalInfoBox;
