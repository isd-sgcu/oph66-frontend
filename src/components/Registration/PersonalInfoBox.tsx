import { DAYS, MONTHS, YEARS } from "@/data/form/datetime";
import { COUNTRIES, PROVINCES } from "@/data/form/location";
import clsx from "clsx";
import DropDown from "../DropDown";
import RadioBox from "../RadioBox";
import TextBox from "../TextBox";

interface Props {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  setBirthDay: (value: string) => void;
  setBirthMonth: (value: string) => void;
  setBirthYear: (value: string) => void;
  setResidence: (value: string) => void;
  setCountry: (value: string) => void;
  setProvince: (value: string) => void;
  isShowError: boolean;
  residence: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  province: string;
  country: string;
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
}: Props) => {
  return (
    <div
      className={clsx(
        "flex h-fit w-full max-w-xl flex-col gap-3 rounded-2xl border-2 p-5 shadow-inner shadow-white backdrop-blur-2xl",
        isShowError ? "border-[#F55572]" : "border-white"
      )}
    >
      <div className="flex w-full flex-col">
        <label className="text-sm font-medium text-white">
          ชื่อ (และชื่อกลาง) / First name (and middle name)*
        </label>
        <TextBox
          placeHolder="ไม่ต้องใส่คำนำหน้า / without titles"
          setValue={setFirstName}
        />
      </div>
      <div className="flex w-full flex-col">
        <label className="text-sm font-medium text-white">
          นามสกุล / Last name*
        </label>
        <TextBox setValue={setLastName} />
      </div>
      <div className="flex w-full flex-col">
        <label className="text-sm font-medium text-white">
          วัน เดือน ปีเกิด / Birth date
        </label>
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
        <label className="text-sm font-medium text-white">
          ที่อยู่ / Residence*
        </label>
        <div className="grid grid-rows-2 gap-2">
          <div className="grid grid-cols-2">
            <div className="flex items-center gap-1">
              <RadioBox
                name="residence"
                value="Thailand"
                setValue={setResidence}
                isBeingChecked={residence === "Thailand"}
              />
              <label className="text-sm text-white">
                ในประเทศไทย / Thailand
              </label>
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
            <div className="flex items-center gap-1">
              <RadioBox
                name="residence"
                value="Other countries"
                setValue={setResidence}
                isSelectable={true}
                isBeingChecked={residence === "Other countries"}
              />
              <label className="text-sm text-white">
                ต่างประเทศ / Other countries
              </label>
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
      <p className="absolute -bottom-1 right-0 translate-y-full text-xs text-white">
        จำเป็นต้องกรอก / Must be filled*
      </p>
    </div>
  );
};
export default PersonalInfoBox;
