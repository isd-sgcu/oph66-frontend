import clsx from "clsx";
import { useState } from "react";
interface Props {
  name: string;
  value: string;
  id: string;
  setValue: () => void;
  isShowError: boolean;
}

const CheckBox = ({ name, value, id, setValue, isShowError }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleClickButton = (events) => {
    if (!isChecked) {
      setValue((prevArray) => [...prevArray, events.target.value]);
      console.log(events.target.value);
    } else {
      setValue((prevArray) =>
        prevArray.filter((item) => item !== events.target.value)
      );
      // console.log(events.target.value)
    }
    setIsChecked(!isChecked);
  };
  return (
    <div className="relative flex h-10 w-10">
      <div
        className={clsx(
          "z-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#F55572]",
          isShowError ? "" : "bg-transparent"
        )}
      >
        <div className=" z-10 flex h-5 w-5 items-center justify-center rounded-full bg-white">
          <input
            value={value}
            name={name}
            id={id}
            onClick={handleClickButton}
            type="checkbox"
            className="absolute z-30 inline-block h-5 w-5 appearance-none rounded-full"
          />
          <div
            className={clsx(
              "z-20 h-2 w-2  rounded-full bg-pink-500",
              !isChecked && "hidden"
            )}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default CheckBox;
