import RadioBox from "../RadioBox";
import TextBox from "../TextBox";

interface Props {
  setRoundOfAdmission: (s: string) => void;
  setReasonForApplying: (s: string) => void;
  roundOfAdmission: string;
}

const RoundOfAdmissionBox = ({
  setRoundOfAdmission,
  setReasonForApplying,
  roundOfAdmission,
}: Props) => {
  return (
    <div className="mb-12 flex w-screen flex-shrink-0 flex-col items-center p-0">
      <div className="m-0 flex w-4/5 max-w-xl flex-col items-center p-0">
        <div className="mb-1 h-fit w-full rounded-2xl border-4 border-solid border-white p-9 shadow-inner backdrop-blur-2xl">
          <p className="text-medium mb-2 text-base text-white">
            อยากเข้าจุฬาฯ รอบไหน / Desired round of admission
          </p>
          <div className="mb-10 flex flex-col space-y-1">
            <div className="flex flex-row">
              <RadioBox
                name="roundOfAdmission"
                value="1"
                setValue={setRoundOfAdmission}
                isSelectable={true}
                isBeingChecked={roundOfAdmission === "1"}
              />
              <label className="text-medium text-base text-white">
                รอบ 1 / Round 1
              </label>
            </div>
            <div className="flex flex-row">
              <RadioBox
                name="roundOfAdmission"
                value="2"
                setValue={setRoundOfAdmission}
                isSelectable={true}
                isBeingChecked={roundOfAdmission === "2"}
              />
              <label className="text-medium text-base text-white">
                รอบ 2 / Round 2
              </label>
            </div>
            <div className="flex flex-row">
              <RadioBox
                name="roundOfAdmission"
                value="3"
                setValue={setRoundOfAdmission}
                isSelectable={true}
                isBeingChecked={roundOfAdmission === "3"}
              />
              <label className="text-medium text-base text-white">
                รอบ 3 / Round 3
              </label>
            </div>
            <div className="flex flex-row">
              <RadioBox
                name="roundOfAdmission"
                value="other"
                setValue={setRoundOfAdmission}
                isSelectable={true}
                isBeingChecked={
                  roundOfAdmission !== "" &&
                  roundOfAdmission !== "1" &&
                  roundOfAdmission !== "2" &&
                  roundOfAdmission !== "3"
                }
              />
              <label className="text-medium text-base text-white">
                อื่น ๆ / Other
              </label>
            </div>
            <div className="ml-6 h-8 w-1/2">
              <TextBox
                name="otherRoundOfAdmission"
                setValue={setRoundOfAdmission}
                isSelectable={
                  roundOfAdmission !== "" &&
                  roundOfAdmission !== "1" &&
                  roundOfAdmission !== "2" &&
                  roundOfAdmission !== "3"
                }
              />
            </div>
          </div>
          <p className="text-medium mb-3 text-base text-white">
            ทำไมอยากเข้าจุฬาฯ / Reason for applying to Chula
          </p>
          <div className="h-20 w-full">
            <TextBox
              name="reasonForApplying"
              setValue={setReasonForApplying}
              isSelectable={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RoundOfAdmissionBox;
