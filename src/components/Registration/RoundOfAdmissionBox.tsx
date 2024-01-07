import { useEffect, useState } from "react";
import RadioBox from "../RadioBox";
import TextBox from "../TextBox";

interface Props {
  setRoundOfAdmission: React.Dispatch<React.SetStateAction<string | undefined>>;
  setReasonForApplying: React.Dispatch<React.SetStateAction<string>>;
  roundOfAdmission: string | undefined;
}

const RoundOfAdmissionBox = ({
  setRoundOfAdmission,
  setReasonForApplying,
  roundOfAdmission,
}: Props) => {
  const [otherWritable, setOtherWritable] = useState<boolean>(false);
  useEffect(() => {
    setOtherWritable(
      typeof roundOfAdmission !== "undefined" &&
        roundOfAdmission !== "1" &&
        roundOfAdmission !== "2" &&
        roundOfAdmission !== "3"
    );
  }, [roundOfAdmission]);

  return (
    <div className="flex h-fit w-full max-w-xl flex-col gap-2 rounded-2xl border-2 p-5 text-sm font-medium  shadow-inner shadow-white backdrop-blur-2xl">
      <p>อยากเข้าจุฬาฯ รอบไหน / Desired round of admission</p>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center">
          <RadioBox
            name="roundOfAdmission"
            value="1"
            setValue={setRoundOfAdmission}
            isBeingChecked={roundOfAdmission === "1"}
          />
          <label>รอบ 1 / Round 1</label>
        </div>
        <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center">
          <RadioBox
            name="roundOfAdmission"
            value="2"
            setValue={setRoundOfAdmission}
            isBeingChecked={roundOfAdmission === "2"}
          />
          <label>รอบ 2 / Round 2</label>
        </div>
        <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center">
          <RadioBox
            name="roundOfAdmission"
            value="3"
            setValue={setRoundOfAdmission}
            isBeingChecked={roundOfAdmission === "3"}
          />
          <label>รอบ 3 / Round 3</label>
        </div>
        <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center">
          <RadioBox
            name="roundOfAdmission"
            value="other"
            setValue={setRoundOfAdmission}
            isBeingChecked={otherWritable}
          />
          <label>อื่น ๆ / Other</label>
        </div>
        {otherWritable && (
          <div className="ml-6 h-8 w-1/2">
            <TextBox
              value={roundOfAdmission}
              placeHolder="โปรดระบุ / Please specify"
              setValue={setRoundOfAdmission}
              isSelectable={otherWritable}
            />
          </div>
        )}
      </div>
      <p>ทำไมอยากเข้าจุฬาฯ / Reason for applying to Chula</p>
      <textarea
        className="flex h-20 w-full rounded-2xl p-2 text-xs text-pink-550 placeholder:text-pink-400"
        onChange={(e) => setReasonForApplying(e.target.value)}
        placeholder="โปรดระบุ / Please specify"
      />
    </div>
  );
};
export default RoundOfAdmissionBox;
