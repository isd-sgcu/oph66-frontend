interface Props {
  options: string[];
  defaultVal: string;
  value: string;
  setValue:
    | React.Dispatch<React.SetStateAction<string>>
    | ((s: string) => void);
  isSelectable?: boolean;
}

const DropDown = ({
  options = [],
  defaultVal,
  value,
  setValue,
  isSelectable = true,
}: Props) => {
  return (
    <div className="relative inline-block h-full w-full">
      <i className="icon-[mdi--chevron-down] pointer-events-none absolute right-0 top-1/2 flex -translate-y-1/2 items-center text-xl text-pink-400"></i>
      <select
        className="h-full w-full appearance-none rounded-2xl py-3 pl-2 pr-6 text-xs text-pink-400"
        onChange={(e) => setValue(e.target.value)}
        disabled={!isSelectable}
        value={value}
      >
        <option value="" className="text-pink-400">
          {defaultVal}
        </option>
        {options.map((option) => (
          <option value={option} className="text-pink-550" key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default DropDown;
