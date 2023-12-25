// ---
// import DropDownWithLabel from "./DropDownWithLabel.astro";
// const { number, haveFaculty, haveDepartment, haveSection, name } = Astro.props;
// ---

import DropDownWithLabel from "./DropDownWithLabel.tsx";

// <facultyDetailBox>
//   <div
//     class="mb-8 flex h-fit w-full flex-col items-center rounded-2xl border-2 border-solid border-white p-6 lg:flex-row lg:items-start"
//   >
//     <p class="mr-0 p-1 text-3xl text-white lg:mr-12">{number}</p>
//     <div class="flex w-4/5 flex-shrink-0 flex-col space-y-3">
//       {
//         haveFaculty && (
//           <DropDownWithLabel
//             dropDownLabel="คณะ / Faculty"
//             name={name + "Faculty"}
//           />
//         )
//       }
//       {
//         haveDepartment && (
//           <DropDownWithLabel
//             dropDownLabel="ภาควิชา / Department"
//             name={name + "Department"}
//           />
//         )
//       }
//       {
//         haveSection && (
//           <DropDownWithLabel
//             dropDownLabel="สาขาวิชา / Section"
//             name={name + "Section"}
//           />
//         )
//       }
//     </div>
//   </div>
// </facultyDetailBox>
interface Props {
  haveFaculty: boolean;
  haveDepartment: boolean;
  haveSection: boolean;
  number: string;
  name: string;
}
const FacultyDetailBox = ({
  haveDepartment,
  haveFaculty,
  haveSection,
  name,
  number,
}: Props) => {
  return (
    <div className="mb-8 flex h-fit w-full flex-col items-center rounded-2xl border-2 border-solid border-white p-6 lg:flex-row lg:items-start">
      <p className="mr-0 p-1 text-3xl text-white lg:mr-12">{number}</p>
      <div className="flex w-4/5 flex-shrink-0 flex-col space-y-3">
        {haveFaculty && (
          <DropDownWithLabel
            dropDownLabel="คณะ / Faculty"
            name={name + "Faculty"}
            options={[]}
          />
        )}
        {haveDepartment && (
          <DropDownWithLabel
            dropDownLabel="ภาควิชา / Department"
            name={name + "Department"}
            options={[]}
          />
        )}
        {haveSection && (
          <DropDownWithLabel
            dropDownLabel="สาขาวิชา / Section"
            name={name + "Section"}
            options={[]}
          />
        )}
      </div>
    </div>
  );
};
export default FacultyDetailBox;
