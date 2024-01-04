import type { DepartmentProp } from "./FacultyProperty";
const departmentCard = ({ department }: { department: DepartmentProp }) => {
  if (department.code === "-") {
    return <div></div>;
  } else {
    return (
      <div className="mx-0 mt-4 block h-fit w-full rounded-2xl border-2 border-white bg-white px-4 pb-2.5 pt-2.5">
        <div className="font-['IBM Plex Sans Thai'] flex h-fit w-full justify-center text-center text-base font-bold text-black">
          {department.name_th}
        </div>
        <div className="font-['IBM Plex Sans Thai'] flex h-fit w-full justify-center text-center text-base font-bold text-black">
          {department.name_en}
        </div>
      </div>
    );
  }
};

export default departmentCard;
