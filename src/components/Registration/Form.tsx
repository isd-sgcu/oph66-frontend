import { useEffect, useState } from "react";

import CheckBox from "../CheckBox";
import ConfirmModule from "./ConfirmModule";
import ErrorBox from "./ErrorBox";
import HealthConditionBox from "./HealthConditionBox";
import InterestedFacultyBox from "./InterestedFacultyBox";
import PersonalInfoBox from "./PersonalInfoBox";
import PersonalStatusBox from "./PersonalStatusBox";
import PlannedFacultyBox from "./PlannedFacultyBox";
import RoundOfAdmissionBox from "./RoundOfAdmissionBox";
import SourceOfNewsBox from "./SourceOfNewsBox";

import type { FacultyInterested } from "@/types/form";

interface DTO {
  allergies: string;
  birth_date: string;
  country: string;
  desired_round: string;
  educational_level: string;
  first_name: string;
  interested_faculties: {
    department_code: string;
    faculty_code: string;
    order: number;
    section_code: string;
  }[];
  join_cu_reason: string;
  last_name: string;
  medical_condition: string;
  news_sources: string[];
  province: string;
  status: string;
  visiting_faculties: {
    department_code: string;
    faculty_code: string;
    order: number;
    section_code: string;
  }[];
}

const Form = () => {
  const [token, setToken] = useState<string>("");
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
  const [allergies, setAllergies] = useState<string>();
  const [healthConditions, setHealthConditions] = useState<string>();
  const [sourceOfNews, setSourceOfNews] = useState<string[]>([] as string[]);
  const [roundOfAdmission, setRoundOfAdmission] = useState<string>();
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
      !allergies || !healthConditions,
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

    const post = async () => {
      const data: DTO = {
        allergies: allergies || "",
        birth_date: `${birthYear}-${birthMonth}-${birthDay}`,
        country,
        desired_round: roundOfAdmission || "",
        educational_level: studentStatus || "",
        first_name: firstName,
        interested_faculties: facultiesInterested.map((faculty) => ({
          department_code: faculty.department,
          faculty_code: faculty.faculty,
          order: Number(faculty.number),
          section_code: faculty.section,
        })),
        join_cu_reason: reasonForApplying,
        last_name: lastName,
        medical_condition: healthConditions || "",
        news_sources: sourceOfNews,
        province,
        status: status || "",
        visiting_faculties: facultiesPlannedToVisit.map((faculty) => ({
          department_code: faculty.department,
          faculty_code: faculty.faculty,
          order: Number(faculty.number),
          section_code: faculty.section,
        })),
      };

      const res = await fetch(
        import.meta.env.PUBLIC_API_BASE_URL + "/auth/register",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (res.ok) {
        setIsShowConfirm(false);
        window.location.href = "/";
      } else {
        const error = await res.json();
        alert(error?.message);
        window.location.href = "/";
      }
    };

    post();
  };

  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts?.pop()?.split(";").shift();
    };

    const token = getCookie("token");
    if (!token) {
      alert("กรุณาเข้าสู่ระบบ");
      window.location.href = "/login";
      return;
    }
    setToken(token);
  }, []);

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
      <HealthConditionBox
        setAllergies={setAllergies}
        setHealthConditions={setHealthConditions}
        allergies={allergies}
        healthConditions={healthConditions}
        isShowError={isShowError[2]}
      />
      <SourceOfNewsBox
        setSourceOfNews={setSourceOfNews}
        isShowError={isShowError[3]}
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
      <div className="flex max-w-xl flex-col gap-2">
        <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-1">
          <CheckBox
            name="agreement"
            value="agreed"
            id="agreement"
            setValue={setAgreedToTerms}
            isShowError={isShowError[4]}
          />
          <label className="text-sm md:text-base">
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
            isShowError={isShowError[5]}
          />
          <label className="text-sm md:text-base">
            ยอมรับให้คณะผู้จัดงานขออนุญาตบันทึกภาพ วิดีโอ
            และถ่ายทอดสดกิจกรรมผ่านช่องทางออนไลน์
          </label>
        </div>
      </div>
      {isShowError.includes(true) && <ErrorBox />}
      {isShowConfirm && <ConfirmModule setIsShowConfirm={setIsShowConfirm} />}
      <button
        className="rounded-2xl border-2 border-white px-5 py-2 text-xl font-bold shadow-inner shadow-white backdrop-blur-2xl"
        onClick={validateData}
        type="button"
      >
        ลงทะเบียน / Register
      </button>
    </form>
  );
};
export default Form;
