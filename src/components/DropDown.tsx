interface Props {
  options: string[];
  defaultVal: string;
  name: string;
  setValue: () => void;
  isSelectable: boolean;
}

const DropDown = ({
  options = [],
  defaultVal,
  name,
  setValue,
  isSelectable,
}: Props) => {
  return (
    <div className="relative inline-block h-full w-full">
      <div className="pointer-events-none absolute inset-y-0 right-[0.1em] top-[0.1em] flex items-center text-pink-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="8"
          viewBox="0 0 16 8"
          fill="none"
        >
          <path d="M8 8L16 -9.48178e-07H9.48178e-07L8 8Z" fill="#DE87A8" />
        </svg>
      </div>
      <select
        className="m-0 h-full w-full rounded-2xl p-1 text-xs text-pink-400"
        name={name}
        onChange={(e) => setValue(e.target.value)}
        disabled={!isSelectable}
      >
        <option value="-" selected className="text-pink-400">
          {defaultVal}
        </option>
        {options.map((option) => (
          <option value={option} className="text-base text-black" key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default DropDown;
