import { useState } from "react";

import type { FacultyInterested } from "@/types/form";
import CheckBox from "../CheckBox";
import ConfirmModule from "./ConfirmModule";
import ErrorBox from "./ErrorBox";
import InterestedFacultyBox from "./InterestedFacultyBox";
import PersonalInfoBox from "./PersonalInfoBox";
import PersonalStatusBox from "./PersonalStatusBox";
import PlannedFacultyBox from "./PlannedFacultyBox";
import RoundOfAdmissionBox from "./RoundOfAdmissionBox";
import SourceOfNewsBox from "./SourceOfNewsBox";

const Form = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [birthDay, setBirthDay] = useState<string>("");
  const [birthMonth, setBirthMonth] = useState<string>("");
  const [birthYear, setBirthYear] = useState<string>("");
  const [residence, setResidence] = useState<string>("");
  const [province, setProvince] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [status, setStatus] = useState<string>();
  const [studentStatus, setStudentStatus] = useState<string>();
  const [sourceOfNews, setSourceOfNews] = useState<string[]>([] as string[]);
  const [roundOfAdmission, setRoundOfAdmission] = useState<string>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [reasonForApplying, setReasonForApplying] = useState<string>("");
  const [facultiesInterested, setFacultiesInterested] = useState<
    FacultyInterested[]
  >([
    { faculty: "", department: "", section: "", number: "1" },
    { faculty: "", department: "", section: "", number: "2" },
    { faculty: "", department: "", section: "", number: "3" },
  ]);
  const [facultiesPlannedToVisit, setFacultiesPlannedToVisit] = useState<
    FacultyInterested[]
  >([
    { faculty: "", department: "", section: "", number: "1" },
    { faculty: "", department: "", section: "", number: "2" },
    { faculty: "", department: "", section: "", number: "3" },
  ]);
  const [agreedToTerms, setAgreedToTerms] = useState<string[]>([] as string[]);
  const [isShowError, setIsShowError] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [isShowConfirm, setIsShowConfirm] = useState<boolean>(false);

  const validateData = () => {
    const error = [
      !firstName ||
        !lastName ||
        !birthDay ||
        !birthMonth ||
        !birthYear ||
        !residence ||
        !(province || country),
      !status || (status === "student" && !studentStatus),
      sourceOfNews.length === 0,
      !agreedToTerms.includes("agreed"),
      !agreedToTerms.includes("agreedPhoto"),
    ];

    setIsShowError(error);

    if (error.includes(true)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setIsShowConfirm(true);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex w-full flex-col items-center gap-12 px-4"
      onSubmit={handleSubmit}
    >
      <PersonalInfoBox
        setFirstName={setFirstName}
        setLastName={setLastName}
        setBirthDay={setBirthDay}
        setBirthMonth={setBirthMonth}
        setBirthYear={setBirthYear}
        setResidence={setResidence}
        setCountry={setCountry}
        setProvince={setProvince}
        isShowError={isShowError[0]}
        residence={residence}
        birthDay={birthDay}
        birthMonth={birthMonth}
        birthYear={birthYear}
        province={province}
        country={country}
        firstName={firstName}
        lastName={lastName}
      />
      <PersonalStatusBox
        setStatus={setStatus}
        setStudentStatus={setStudentStatus}
        isShowError={isShowError[1]}
        status={status}
        studentStatus={studentStatus}
      />
      <SourceOfNewsBox
        setSourceOfNews={setSourceOfNews}
        isShowError={isShowError[2]}
      />
      <RoundOfAdmissionBox
        setRoundOfAdmission={setRoundOfAdmission}
        setReasonForApplying={setReasonForApplying}
        roundOfAdmission={roundOfAdmission}
      />
      <InterestedFacultyBox
        setFacultiesInterested={setFacultiesInterested}
        facultiesInterested={facultiesInterested}
      />
      <PlannedFacultyBox
        setFacultiesPlannedToVisit={setFacultiesPlannedToVisit}
        facultiesPlannedToVisit={facultiesPlannedToVisit}
      />
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-1">
          <CheckBox
            name="agreement"
            value="agreed"
            id="agreement"
            setValue={setAgreedToTerms}
            isShowError={isShowError[3]}
          />
          <label className="text-base">
            ยอมรับ
            <a
              href="https://docs.google.com/document/d/1Juw2skFkg1lD8lV7NguLJylBKWMCxnicwbJJ0PKyDRI/edit?usp=sharing"
              className="font-bold underline"
              target="_blank"
              rel="noreferrer noopener"
            >
              นโยบายความเป็นส่วนตัวและข้อตกลงการใช้งาน
            </a>
          </label>
        </div>
        <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-1">
          <CheckBox
            name="agreementPhoto"
            value="agreedPhoto"
            id="agreementPhoto"
            setValue={setAgreedToTerms}
            isShowError={isShowError[4]}
          />
          <label className="text-base">
            ยอมรับให้คณะผู้จัดงานขออนุญาตบันทึกภาพ วิดีโอ
            และถ่ายทอดสดกิจกรรมผ่านช่องทางออนไลน์
          </label>
        </div>
      </div>
      {isShowError.includes(true) && <ErrorBox />}
      {isShowConfirm && <ConfirmModule setIsShowConfirm={setIsShowConfirm} />}
      <button
        className="rounded-2xl border-2 border-white px-5 py-2 text-xl font-bold shadow-inner shadow-white"
        onClick={validateData}
        type="button"
      >
        ลงทะเบียน / Register
      </button>
    </form>
  );
};
export default Form;
