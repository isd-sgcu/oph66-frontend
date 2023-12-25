import clsx from "clsx";
import { useState } from "react";
interface Props {
  name: string;
  value: string;
  id: string;
}

const CheckBox = ({ name, value, id }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleClickButton = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="relative mr-2 flex h-5 w-5">
      <div className="absolute z-10 mr-2 h-5 w-5 rounded-full bg-white"></div>
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
          "inner-circle absolute left-1/2 top-1/2 z-20 m-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-pink-500",
          !isChecked && "hidden"
        )}
      ></div>
    </div>
  );
};
export default CheckBox;
