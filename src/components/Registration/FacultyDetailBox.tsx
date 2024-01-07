import { useEffect, useState } from "react";

import { FACULTIES } from "@/data/faculties.ts";
import type { FacultyInterested } from "@/types/form.ts";
import DropDown from "../DropDown.tsx";

interface Props {
  onlyFaculty?: boolean;
  number: string;
  setValues: React.Dispatch<React.SetStateAction<FacultyInterested[]>>;
  faculties: FacultyInterested[];
}
const FacultyDetailBox = ({
  onlyFaculty = true,
  number,
  setValues,
  faculties,
}: Props) => {
  const setFacultyDetail = (s: string) => {
    setValues((prevArray) =>
      prevArray.map((e) => (e.number === number ? { ...e, faculty: s } : e))
    );
  };
  const setDepartmentDetail = (s: string) => {
    setValues((prevArray) =>
      prevArray.map((e) => (e.number === number ? { ...e, department: s } : e))
    );
  };
  const setSectionDetail = (s: string) => {
    setValues((prevArray) =>
      prevArray.map((e) => (e.number === number ? { ...e, section: s } : e))
    );
  };

  const [departmentOptions, setDepartmentOptions] = useState<string[]>(
    [] as string[]
  );
  const [sectionOptions, setSectionOptions] = useState<string[]>(
    [] as string[]
  );

  useEffect(() => {
    if (!faculties || !faculties[parseInt(number) - 1].faculty) return;

    setDepartmentOptions(
      FACULTIES.find(
        (e) =>
          e.nameTH + " / " + e.nameEN ===
          faculties[parseInt(number) - 1].faculty
      )?.departments.map((e) => e.nameTH + " / " + e.nameEN) ?? []
    );

    if (!faculties || !faculties[parseInt(number) - 1].department) return;

    setSectionOptions(
      FACULTIES.find(
        (e) =>
          e.nameTH + " / " + e.nameEN ===
          faculties[parseInt(number) - 1].faculty
      )
        ?.departments.find(
          (e) =>
            e.nameTH + " / " + e.nameEN ===
            faculties[parseInt(number) - 1].department
        )
        ?.sections.map((e) => e.nameTH + " / " + e.nameEN) ?? []
    );
  }, [faculties]);

  return (
    <div className="flex h-fit w-full flex-col items-center gap-2 rounded-2xl border-2 border-white p-6 px-5 text-sm font-medium md:flex-row md:items-start md:gap-8 md:text-base">
      <p className="mx-auto text-3xl font-bold">{number}</p>
      <div className="flex flex-col gap-4">
        <div className="flex h-fit flex-col">
          <label>คณะ / Faculty</label>
          <DropDown
            defaultVal="คณะ / Faculty"
            options={FACULTIES.map((e) => e.nameTH + " / " + e.nameEN)}
            setValue={setFacultyDetail}
            value={faculties ? faculties[parseInt(number) - 1].faculty : ""}
          />
        </div>

        {!onlyFaculty &&
          faculties &&
          faculties[parseInt(number) - 1].faculty &&
          departmentOptions.length > 0 && (
            <div className="flex h-fit flex-col">
              <label>สาขา / Department</label>
              <DropDown
                defaultVal="สาขา / Department"
                options={
                  faculties
                    ? FACULTIES.find(
                        (e) =>
                          e.nameTH + " / " + e.nameEN ===
                          faculties[parseInt(number) - 1].faculty
                      )?.departments.map((e) => e.nameTH + " / " + e.nameEN) ??
                      []
                    : []
                }
                setValue={setDepartmentDetail}
                value={
                  faculties ? faculties[parseInt(number) - 1].department : ""
                }
              />
            </div>
          )}
        {!onlyFaculty &&
          faculties &&
          faculties[parseInt(number) - 1].department &&
          sectionOptions.length > 0 && (
            <div className="flex h-fit flex-col">
              <label>สาขา / Department</label>
              <div className="w-full">
                <DropDown
                  defaultVal="สาขา / Department"
                  options={
                    faculties
                      ? FACULTIES.find(
                          (e) =>
                            e.nameTH + " / " + e.nameEN ===
                            faculties[parseInt(number) - 1].faculty
                        )
                          ?.departments.find(
                            (e) =>
                              e.nameTH + " / " + e.nameEN ===
                              faculties[parseInt(number) - 1].department
                          )
                          ?.sections.map((e) => e.nameTH + " / " + e.nameEN) ??
                        []
                      : []
                  }
                  setValue={setSectionDetail}
                  value={
                    faculties ? faculties[parseInt(number) - 1].section : ""
                  }
                />
              </div>
            </div>
          )}
      </div>
    </div>
  );
};
export default FacultyDetailBox;
