import { DAYS, MONTHS, YEARS } from "@/data/form/datetime";
import { COUNTRIES, PROVINCES } from "@/data/form/location";
import clsx from "clsx";
import DropDown from "../DropDown";
import RadioBox from "../RadioBox";
import TextBox from "../TextBox";

interface Props {
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  setBirthDay: React.Dispatch<React.SetStateAction<string>>;
  setBirthMonth: React.Dispatch<React.SetStateAction<string>>;
  setBirthYear: React.Dispatch<React.SetStateAction<string>>;
  setResidence: React.Dispatch<React.SetStateAction<string>>;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  setProvince: React.Dispatch<React.SetStateAction<string>>;
  isShowError: boolean;
  residence: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  province: string;
  country: string;
  firstName: string;
  lastName: string;
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
  residence,
  birthDay,
  birthMonth,
  birthYear,
  province,
  country,
  firstName,
  lastName,
}: Props) => {
  return (
    <div
      className={clsx(
        "flex h-fit w-full max-w-xl flex-col gap-2 rounded-2xl border-2 p-5 text-sm font-medium text-white shadow-inner shadow-white backdrop-blur-2xl md:gap-8 md:text-base",
        isShowError ? "border-[#F55572] ring-4 ring-[#F55572]" : "border-white"
      )}
    >
      <div className="flex w-full flex-col">
        <label>ชื่อ (และชื่อกลาง) / First name (and middle name)*</label>
        <TextBox
          placeHolder="ไม่ต้องใส่คำนำหน้า / without titles"
          setValue={setFirstName}
          value={firstName}
        />
      </div>
      <div className="flex w-full flex-col">
        <label>นามสกุล / Last name*</label>
        <TextBox
          setValue={setLastName}
          value={lastName}
          placeHolder="นามสกุล / Last Name"
        />
      </div>
      <div className="flex w-full flex-col">
        <label>วัน เดือน ปีเกิด / Birth date</label>
        <div className="flex w-full items-center justify-between gap-3">
          <DropDown
            defaultVal="วันที่ / Date"
            options={DAYS}
            setValue={setBirthDay}
            value={birthDay}
          />
          <DropDown
            defaultVal="เดือน / Month"
            options={MONTHS}
            setValue={setBirthMonth}
            value={birthMonth}
          />
          <DropDown
            defaultVal="ปี / Year"
            options={YEARS}
            setValue={setBirthYear}
            value={birthYear}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label>ที่อยู่ / Residence*</label>
        <div className="grid grid-rows-2 gap-2 md:gap-4">
          <div className="grid grid-cols-2">
            <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-1">
              <RadioBox
                name="residence"
                value="Thailand"
                setValue={setResidence}
                isBeingChecked={residence === "Thailand"}
              />
              <label>ในประเทศไทย / Thailand</label>
            </div>
            <DropDown
              defaultVal="จังหวัด / Province"
              options={PROVINCES}
              setValue={setProvince}
              value={province}
              isSelectable={residence === "Thailand"}
            />
          </div>
          <div className="grid grid-cols-2">
            <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-1">
              <RadioBox
                name="residence"
                value="Other countries"
                setValue={setResidence}
                isBeingChecked={residence === "Other countries"}
              />
              <label>ต่างประเทศ / Other countries</label>
            </div>
            <DropDown
              defaultVal="ประเทศ / Country"
              options={COUNTRIES}
              value={country}
              setValue={setCountry}
              isSelectable={residence === "Other countries"}
            />
          </div>
        </div>
      </div>
      <p className="absolute -bottom-2 right-0 translate-y-full text-xs text-white">
        จำเป็นต้องกรอก / Must be filled*
      </p>
    </div>
  );
};
export default PersonalInfoBox;
