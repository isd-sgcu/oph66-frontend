import { useState } from "react";
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [residence, setResidence] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [status, setStatus] = useState("");
  const [studentStatus, setStudentStatus] = useState("");
  const [sourceOfNews, setSourceOfNews] = useState([]);
  const [roundOfAdmission, setRoundOfAdmission] = useState("");
  const [reasonForApplying, setReasonForApplying] = useState("");
  const [facultiesInterested, setFacultiesInterested] = useState([
    { faculty: "", department: "", section: "", number: "1" },
    { faculty: "", department: "", section: "", number: "2" },
    { faculty: "", department: "", section: "", number: "3" },
  ]);
  const [facultiesPlannedToVisit, setFacultiesPlannedToVisit] = useState([
    { faculty: "", number: "1" },
    { faculty: "", number: "2" },
    { faculty: "", number: "3" },
  ]);
  const [agreedToTerms, setAgreedToTerms] = useState([]);
  const [isShowError, setIsShowError] = useState(false);
  const [isShowConfirm, setIsShowConfirm] = useState(false);

  const validateData = () => {
    console.log(
      roundOfAdmission,
      facultiesInterested,
      reasonForApplying,
      facultiesPlannedToVisit
    );
    console.log(sourceOfNews);
    if (
      !firstName ||
      !lastName ||
      !birthDay ||
      !birthMonth ||
      !birthYear ||
      !residence ||
      !(province || country) ||
      !status ||
      (status === "student" && !studentStatus) ||
      sourceOfNews.length === 0 ||
      agreedToTerms.length === 0
    ) {
      setIsShowError(true);
    } else {
      console.log("info is ready");
      setIsShowConfirm(true);
    }
  };
  return (
    <form id="form" className="flex flex-col items-center">
      <PersonalInfoBox
        setFirstName={setFirstName}
        setLastName={setLastName}
        setBirthDay={setBirthDay}
        setBirthMonth={setBirthMonth}
        setBirthYear={setBirthYear}
        setResidence={setResidence}
        setCountry={setCountry}
        setProvince={setProvince}
        isShowError={isShowError}
      />
      <PersonalStatusBox
        setStatus={setStatus}
        setStudentStatus={setStudentStatus}
        isShowError={isShowError}
      />
      <SourceOfNewsBox
        setSourceOfNews={setSourceOfNews}
        arrayOfChecks={sourceOfNews}
        isShowError={isShowError}
      />
      <RoundOfAdmissionBox
        setRoundOfAdmission={setRoundOfAdmission}
        setReasonForApplying={setReasonForApplying}
      />
      <InterestedFacultyBox setFacultiesInterested={setFacultiesInterested} />
      <PlannedFacultyBox
        setFacultiesPlannedToVisit={setFacultiesPlannedToVisit}
      />
      <div className="mb-16 flex">
        <CheckBox
          name="agreement"
          value="agreed"
          id="agreement"
          setValue={setAgreedToTerms}
          oldValue={agreedToTerms}
          isShowError={isShowError}
        />
        <label className="text-base">
          ยอมรับ
          <span className="font-bold underline">
            นโยบายความเป็นส่วนตัวและข้อตกลงการใช้งาน
          </span>
        </label>
      </div>
      {isShowError && <ErrorBox />}
      {isShowConfirm && <ConfirmModule />}
      <button
        type="submit"
        className="place-self-center rounded-md border border-white bg-transparent px-4 py-2 font-bold"
        onClick={(e) => {
          e.preventDefault();
          validateData();
        }}
      >
        ลงทะเบียน / Register
      </button>
    </form>
  );
};
export default Form;
