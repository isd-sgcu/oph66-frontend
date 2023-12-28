import DropDown from "../DropDown";
interface Props {
  dropDownLabel: string;
  name: string;
  options: string[];
  setValue: () => void;
}

const DropDownWithLabel = ({
  dropDownLabel,
  name,
  options,
  setValue,
}: Props) => {
  return (
    <div className="flex h-fit flex-col space-y-1">
      <label className="text-base text-white">{dropDownLabel}</label>
      <div className="h-12 w-full">
        <DropDown
          defaultVal={dropDownLabel}
          name={name}
          options={options}
          setValue={setValue}
          isSelectable={true}
        />
      </div>
    </div>
  );
};
export default DropDownWithLabel;
