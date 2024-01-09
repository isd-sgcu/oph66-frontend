import React, { useState } from "react";

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

import { FACULTIES } from "@/data/faculties";
import { MONTHS } from "@/data/form/datetime";
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

interface Props {
  token: string;
}

const Form: React.FC<Props> = ({ token }) => {
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
    if (firstName.length > 80) {
      alert(
        "ชื่อต้องไม่เกิน 80 ตัวอักษร / First name must not exceed 80 characters"
      );
      return;
    }
    if (lastName.length > 80) {
      alert(
        "นามสกุลต้องไม่เกิน 80 ตัวอักษร / Last name must not exceed 80 characters"
      );
      return;
    }
    if (reasonForApplying.length > 600) {
      alert(
        "เหตุผลที่อยากเข้าจุฬาต้องไม่เกิน 600 ตัวอักษร / Reason for applying must not exceed 600 characters"
      );
      return;
    }
    if (status && status.length > 80) {
      alert(
        "สถานภาพต้องไม่เกิน 80 ตัวอักษร / Status must not exceed 80 characters"
      );
      return;
    }
    if (studentStatus && studentStatus.length > 80) {
      alert(
        "ระดับการศึกษาต้องไม่เกิน 80 ตัวอักษร / Educational level must not exceed 80 characters"
      );
      return;
    }
    if (roundOfAdmission && roundOfAdmission.length > 40) {
      alert(
        "รอบที่ต้องการเข้าต้องไม่เกิน 40 ตัวอักษร / Desired round must not exceed 40 characters"
      );
      return;
    }
    if (allergies && allergies.length > 120) {
      alert(
        "อาหารและยาที่แพ้ต้องไม่เกิน 120 ตัวอักษร ในกรณีที่ต้องการป้อนข้อมูลมากกว่า 120 ตัวอักษร กรุณาติดต่อเรา / Allergies must not exceed 120 characters. If you want to input more than 120 characters, please contact us."
      );
      return;
    }
    if (healthConditions && healthConditions.length > 120) {
      alert(
        "โรคประจำตัวต้องไม่เกิน 120 ตัวอักษร ในกรณีที่ต้องการป้อนข้อมูลมากกว่า 120 ตัวอักษร กรุณาติดต่อเรา / Medical conditions must not exceed 120 characters. If you want to input more than 120 characters, please contact us."
      );
      return;
    }
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

    const getFacultyData = (faculties: FacultyInterested[]) => {
      return faculties
        .filter((faculty) => faculty.faculty)
        .map(({ department, faculty, number, section }) => {
          const facultyMatch = FACULTIES.find(
            (f) => f.nameTH === faculty.split(" / ")[0]
          );
          const departmentMatch = facultyMatch?.departments.find(
            (d) => d.nameTH === department.split(" / ")[0]
          );
          const sectionMatch = departmentMatch?.sections.find(
            (s) => s.nameTH === section.split(" / ")[0]
          );
          return {
            order: parseInt(number),
            faculty_code: facultyMatch?.id || "",
            department_code: departmentMatch?.id || "-",
            section_code: sectionMatch?.id || "-",
          };
        });
    };

    const post = async () => {
      const data: DTO = {
        first_name: firstName,
        last_name: lastName,
        birth_date: `${birthYear.split(" / ")[1]}-${
          MONTHS.findIndex((m) => m === birthMonth) + 1
        }-${birthDay}`,
        province: residence === "Thailand" ? province : "",
        country: residence === "Thailand" ? "ไทย" : country.split(" / ")[0],
        status: status || "",
        educational_level: studentStatus || "",
        desired_round: roundOfAdmission || "",
        join_cu_reason: reasonForApplying,
        news_sources: sourceOfNews,
        interested_faculties: getFacultyData(facultiesInterested),
        visiting_faculties: getFacultyData(facultiesPlannedToVisit),
        allergies: allergies || "",
        medical_condition: healthConditions || "",
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
        window.location.href = "/";
      } else {
        const error = await res.json();
        if (error.title === "invalid-token") {
          alert("กรุณาเข้าสู่ระบบอีกครั้ง");
          window.location.href = "/login";
          return;
        }
        alert("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง\n" + (await res.text()));
        setIsShowConfirm(false);
      }
    };

    post();
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
