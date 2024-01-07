import clsx from "clsx";
import React, { useState } from "react";
interface Props {
  name: string;
  value: string;
  id: string;
  setValue: React.Dispatch<React.SetStateAction<string[]>>;
  isShowError?: boolean;
}

const CheckBox = ({
  name,
  value,
  id,
  setValue,
  isShowError = false,
}: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleClickButton = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!isChecked) {
      setValue((prev) => [...prev, value]);
    } else {
      setValue((prev) => prev.filter((item) => item !== value));
    }
    setIsChecked(!isChecked);
  };
  return (
    <div
      className={clsx(
        "relative flex aspect-square w-4 items-center justify-center bg-white",
        isShowError && "ring-4 ring-[#F55572]"
      )}
    >
      <input
        value={value}
        name={name}
        id={id}
        onClick={handleClickButton}
        type="checkbox"
        className="absolute aspect-square w-full appearance-none"
      />
      <label
        htmlFor={name}
        className="pointer-events-none absolute aspect-square w-full bg-white"
      >
        <div
          className={clsx(
            "pointer-events-none absolute left-1/2 top-1/2 aspect-square w-2/3 -translate-x-1/2 -translate-y-1/2 bg-pink-500",
            !isChecked && "hidden"
          )}
        ></div>
      </label>
    </div>
  );
};
export default CheckBox;
