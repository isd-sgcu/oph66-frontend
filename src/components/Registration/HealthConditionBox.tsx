import clsx from "clsx";
import type React from "react";

import RadioBox from "@/components/RadioBox";
import TextBox from "@/components/TextBox";

interface Props {
  setAllergies: React.Dispatch<React.SetStateAction<string | undefined>>;
  setHealthConditions: React.Dispatch<React.SetStateAction<string | undefined>>;
  allergies: string | undefined;
  healthConditions: string | undefined;
  isShowError: boolean;
}

const HealthConditionBox: React.FC<Props> = ({
  setAllergies,
  setHealthConditions,
  allergies,
  healthConditions,
  isShowError,
}) => {
  return (
    <div
      className={clsx(
        "flex h-fit w-full max-w-xl flex-col gap-4 rounded-2xl border-2 p-5 text-sm font-medium text-white shadow-inner shadow-white backdrop-blur-2xl md:gap-8 md:text-base",
        isShowError ? "border-[#F55572] ring-4 ring-[#F55572]" : "border-white"
      )}
    >
      <div className="flex flex-col gap-2">
        <p>อาหารและยาที่แพ้ / Do you have any allergies?*</p>
        <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-1">
          <RadioBox
            name="isAllergies"
            value="No"
            setValue={setAllergies}
            isBeingChecked={allergies === "No"}
          />
          <label>ไม่มี / No</label>
        </div>
        <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-1">
          <RadioBox
            name="isAllergies"
            value="Yes"
            setValue={setAllergies}
            isBeingChecked={
              typeof allergies !== "undefined" && allergies !== "No"
            }
          />
          <label>มี / Yes</label>
        </div>
        {typeof allergies !== "undefined" && allergies !== "No" && (
          <div className="ml-6 h-8 w-1/2">
            <TextBox
              value={allergies}
              placeHolder="โปรดระบุ / Please specify"
              setValue={setAllergies}
              isSelectable={
                typeof allergies !== "undefined" && allergies !== "No"
              }
            />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <p>โรคประจำตัว / Do you have any chronic health conditions?*</p>
        <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-1">
          <RadioBox
            name="isHealthConditions"
            value="No"
            setValue={setHealthConditions}
            isBeingChecked={healthConditions === "No"}
          />
          <label>ไม่มี / No</label>
        </div>
        <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-1">
          <RadioBox
            name="isHealthConditions"
            value="Yes"
            setValue={setHealthConditions}
            isBeingChecked={
              typeof healthConditions !== "undefined" &&
              healthConditions !== "No"
            }
          />
          <label>มี / Yes</label>
        </div>
        {typeof healthConditions !== "undefined" &&
          healthConditions !== "No" && (
            <div className="ml-6 h-8 w-1/2">
              <TextBox
                value={healthConditions}
                setValue={setHealthConditions}
                isSelectable={
                  typeof healthConditions !== "undefined" &&
                  healthConditions !== "No"
                }
                placeHolder="โปรดระบุ / Please specify"
              />
            </div>
          )}
      </div>
      <p className="absolute -bottom-2 right-0 translate-y-full text-xs text-white">
        จำเป็นต้องกรอก / Must be filled*
      </p>
    </div>
  );
};

export default HealthConditionBox;
