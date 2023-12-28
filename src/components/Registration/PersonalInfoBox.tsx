import clsx from "clsx";
import { useState } from "react";
import DropDown from "../DropDown";
import RadioBox from "../RadioBox";
import TextBox from "../TextBox";

interface Props {
  setFirstName: () => void;
  setLastName: () => void;
  setBirthDay: () => void;
  setBirthMonth: () => void;
  setBirthYear: () => void;
  setResidence: () => void;
  setCountry: () => void;
  setProvince: () => void;
  isShowError: boolean;
}

const PersonalInfoBox = ({
  setFirstName,
  setLastName,
  setBirthDay,
  setBirthMonth,
  setBirthYear,
  setResidence,
  setCountry,
  setProvince,
  isShowError,
}: Props) => {
  const [residenceLocal, setResidenceLocal] = useState("");
  const setResidenceForBoth = async (s: string) => {
    await setResidence(s);
    await setResidenceLocal(s);
  };
  const months: string[] = [
    "มกราคม / January",
    "กุมภาพันธ์ / February",
    "มีนาคม / March",
    "เมษายน / April",
    "พฤษภาคม / May",
    "มิถุนายน / June",
    "กรกฎาคม / July",
    "สิงหาคม / August",
    "กันยายน / September",
    "ตุลาคม / October",
    "พฤศจิกายน / November",
    "ธันวาคม / December",
  ];
  const years: string[] = ["2547 / 2004"];
  const provinces: string[] = ["กรุงเทพมหานคร / Bangkok"];
  const countries: string[] = ["ญี่ปุ่น / Japan"];
  const days: string[] = Array.from({ length: 31 }, (_, index) =>
    (index + 1).toString()
  );

  return (
    <div className="mb-12 flex w-screen flex-shrink-0 flex-col items-center p-0">
      <div className="m-0 flex w-4/5 max-w-xl flex-col items-center p-0">
        <div
          className={clsx(
            "mb-1 h-fit w-full rounded-2xl border-4 border-solid p-9 shadow-inner backdrop-blur-2xl",
            isShowError ? "border-[#F55572]" : "border-white"
          )}
        >
          <label className="text-base font-medium text-white">
            ชื่อ (และชื่อกลาง) / First name (and middle name)*
          </label>
          <div className="mb-4">
            <TextBox
              placeHolder="ไม่ต้องใส่คำนำหน้า / without titles"
              name="firstName"
              setValue={setFirstName}
              isSelectable={true}
            />
          </div>
          <label className="text-base font-medium text-white">
            นามสกุล / Last name*
          </label>
          <div className="mb-12">
            <TextBox
              name="lastName"
              placeHolder=""
              setValue={setLastName}
              isSelectable={true}
            />
          </div>
          <label className="text-base font-medium text-white">
            วัน เดือน ปีเกิด / Birth date
          </label>
          <div className="mb-16 flex w-full justify-between space-x-3">
            <div className="h-12 w-1/3">
              <DropDown
                defaultVal="วันที่ / Date"
                options={days}
                name="dayOfBirth"
                setValue={setBirthDay}
                isSelectable={true}
              />
            </div>
            <div className="h-12 w-1/3">
              <DropDown
                defaultVal="เดือน / Month"
                options={months}
                name="monthOfBirth"
                setValue={setBirthMonth}
                isSelectable={true}
              />
            </div>
            <div className="h-12 w-1/3">
              <DropDown
                defaultVal="ปี / Year"
                options={years}
                name="yearOfBirth"
                setValue={setBirthYear}
                isSelectable={true}
              />
            </div>
          </div>
          <label className="text-base font-medium text-white">
            ที่อยู่ / Residence*
          </label>
          <div className="mb-6 mt-2 flex flex-row justify-between">
            <div className="flex w-1/2">
              <RadioBox
                name="residence"
                defaultVal="ในประเทศไทย / Thailand"
                value="Thailand"
                setValue={setResidenceForBoth}
                isSelectable={true}
                isBeingChecked={residenceLocal === "Thailand"}
              />
              <label className="text-medium text-base text-white">
                ในประเทศไทย / Thailand
              </label>
            </div>
            <div className="h-12 w-1/2">
              <DropDown
                defaultVal="จังหวัด / Province"
                name="province"
                options={provinces}
                setValue={setProvince}
                isSelectable={residenceLocal === "Thailand"}
              />
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex w-1/2">
              <RadioBox
                defaultVal="ต่างประเทศ / Other countries"
                name="residence"
                value="Other countries"
                setValue={setResidenceForBoth}
                isSelectable={true}
                isBeingChecked={residenceLocal === "Other countries"}
              />
              <label className="text-medium text-base text-white">
                ต่างประเทศ / Other countries
              </label>
            </div>
            <div className="h-12 w-1/2">
              <DropDown
                defaultVal="ประเทศ / Country"
                name="country"
                options={countries}
                setValue={setCountry}
                isSelectable={residenceLocal === "Other countries"}
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
