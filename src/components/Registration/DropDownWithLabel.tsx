// ---
// import DropDown from "../DropDown.tsx";
// const { dropDownLabel, name } = Astro.props;
// ---

import DropDown from "../DropDown";

// <dropDownWithLabel>
//   <div class="flex h-fit flex-col space-y-1">
//     <label class="text-base text-white">{dropDownLabel}</label>
//     <div class="h-12 w-full">
//       <DropDown defaultVal={dropDownLabel} name={name} />
//     </div>
//   </div>
// </dropDownWithLabel>
interface Props {
  dropDownLabel: string;
  name: string;
  options: string[];
}

const DropDownWithLabel = ({ dropDownLabel, name, options }: Props) => {
  return (
    <div className="flex h-fit flex-col space-y-1">
      <label className="text-base text-white">{dropDownLabel}</label>
      <div className="h-12 w-full">
        <DropDown defaultVal={dropDownLabel} name={name} options={options} />
      </div>
    </div>
  );
};
export default DropDownWithLabel;
