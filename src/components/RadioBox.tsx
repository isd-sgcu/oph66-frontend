import clsx from "clsx";

interface Props {
  name: string;
  value: string;
  setValue: (value: string) => void;
  isSelectable?: boolean;
  isBeingChecked: boolean;
}
const RadioBox = ({
  name,
  value,
  setValue,
  isSelectable = true,
  isBeingChecked,
}: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    setValue(value);
  };

  return (
    <div className="relative flex aspect-square w-5 items-center justify-center">
      <input
        type="radio"
        name={name}
        disabled={!isSelectable}
        className="absolute aspect-square w-full appearance-none"
        onClick={handleClick}
      />
      <label
        htmlFor={name}
        className="pointer-events-none absolute aspect-square w-full rounded-full bg-white"
      >
        <div
          className={clsx(
            "pointer-events-none absolute left-1/2 top-1/2 aspect-square w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500",
            !isBeingChecked && "hidden"
          )}
        ></div>
      </label>
    </div>
  );
};

export default RadioBox;
