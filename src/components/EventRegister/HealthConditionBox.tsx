import clsx from "clsx";
import RadioBox from "../RadioBox";
import TextBox from "../TextBox";
const HealthConditionBox = ({
  setAllergies,
  setChronicHealthConditions,
  allergies,
  chronicHealthConditions,
  isShowError,
}) => {
  return (
    <div className="mb-12 flex w-screen flex-shrink-0 flex-col items-center p-0">
      <div className="m-0 flex w-4/5 max-w-xl flex-col items-center p-0">
        <div
          className={clsx(
            "mb-1 h-fit w-full rounded-2xl border-4 border-solid p-9 shadow-inner backdrop-blur-2xl",
            isShowError ? "border-[#F55572]" : "border-white"
          )}
        >
          <p className="text-medium mb-2 text-base text-white">
            อาหารและยาที่แพ้ / Do you have any allergies?*
          </p>
          <div className="mb-10 flex flex-col space-y-1">
            <div className="flex flex-row">
              <RadioBox
                name="isAllergies"
                value="No"
                setValue={setAllergies}
                isBeingChecked={allergies === "No"}
                isSelectable={true}
              />
              <label className="text-medium text-base text-white">
                ไม่มี / No
              </label>
            </div>
            <div className="flex flex-row">
              <RadioBox
                name="isAllergies"
                value="Yes"
                setValue={setAllergies}
                isBeingChecked={allergies !== "No" && allergies !== ""}
                isSelectable={true}
              />
              <label className="text-medium text-base text-white">
                มี / Yes
              </label>
            </div>
            <div className="ml-6 h-12 w-72">
              <TextBox
                name="allergies"
                setValue={setAllergies}
                placeHolder=""
                isSelectable={allergies !== "No" && allergies !== ""}
              />
            </div>
          </div>
          <p className="text-medium mb-2 text-base text-white">
            โรคประจำตัว / Do you have any chronic health conditions?*
          </p>
          <div className="flex flex-col space-y-1">
            <div className="flex flex-row">
              <RadioBox
                name="isHealthConditions"
                value="No"
                setValue={setChronicHealthConditions}
                isBeingChecked={chronicHealthConditions === "No"}
                isSelectable={true}
              />
              <label className="text-medium text-base text-white">
                ไม่มี / No
              </label>
            </div>
            <div className="flex flex-row">
              <RadioBox
                name="isHealthConditions"
                value="Yes"
                setValue={setChronicHealthConditions}
                isBeingChecked={
                  chronicHealthConditions !== "No" &&
                  chronicHealthConditions !== ""
                }
                isSelectable={true}
              />
              <label className="text-medium text-base text-white">
                มี / Yes
              </label>
            </div>
            <div className="ml-6 h-12 w-72">
              <TextBox
                name="healthConditions"
                setValue={setChronicHealthConditions}
                isSelectable={
                  chronicHealthConditions !== "No" &&
                  chronicHealthConditions !== ""
                }
                placeHolder=""
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

export default HealthConditionBox;
