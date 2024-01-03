import clsx from "clsx";

interface Props {
  name: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isSelectable: boolean;
  isBeingChecked: boolean;
}
const RadioBox = ({
  name,
  value,
  setValue,
  isSelectable,
  isBeingChecked,
}: Props) => {
  const handleRadioClick = (events) => {
    if (events.target.checked) {
      setValue(events.target.value);
    }
  };
  return (
    <div className="relative mr-2 flex h-5 w-5">
      <input
        type="radio"
        name={name}
        disabled={!isSelectable}
        value={value}
        className="absolute z-30 inline-block h-5 w-5 appearance-none rounded-full"
        onClick={handleRadioClick}
      />
      <div className="absolute z-10 mr-2 h-5 w-5 rounded-full bg-white"></div>
      <div
        className={clsx(
          "inner-circle absolute left-1/2 top-1/2 z-20 m-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-pink-500",
          !isBeingChecked && "hidden"
        )}
      ></div>
    </div>
  );
};

export default RadioBox;
