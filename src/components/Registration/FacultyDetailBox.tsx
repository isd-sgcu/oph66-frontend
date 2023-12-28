import DropDownWithLabel from "./DropDownWithLabel.tsx";
interface Props {
  haveFaculty: boolean;
  haveDepartment: boolean;
  haveSection: boolean;
  number: string;
  name: string;
  setValues: () => void;
}
const FacultyDetailBox = ({
  haveDepartment,
  haveFaculty,
  haveSection,
  name,
  number,
  setValues,
}: Props) => {
  const setFacultyDetail = (value: string) => {
    setValues((prevArray) =>
      prevArray.map((e) => (e.number === number ? { ...e, faculty: value } : e))
    );
  };
  const setDepartmentDetail = (value: string) => {
    setValues((prevArray) =>
      prevArray.map((e) =>
        e.number === number ? { ...e, department: value } : e
      )
    );
  };
  const setSectionDetail = (value: string) => {
    setValues((prevArray) =>
      prevArray.map((e) => (e.number === number ? { ...e, section: value } : e))
    );
  };
  return (
    <div className="mb-8 flex h-fit w-full flex-col items-center rounded-2xl border-4 border-solid border-white p-6 lg:flex-row lg:items-start">
      <p className="mr-0 p-1 text-3xl text-white lg:mr-12">{number}</p>
      <div className="flex w-4/5 flex-shrink-0 flex-col space-y-3">
        {haveFaculty && (
          <DropDownWithLabel
            dropDownLabel="คณะ / Faculty"
            name={name + "Faculty"}
            options={[]}
            setValue={setFacultyDetail}
          />
        )}
        {haveDepartment && (
          <DropDownWithLabel
            dropDownLabel="ภาควิชา / Department"
            name={name + "Department"}
            options={[]}
            setValue={setDepartmentDetail}
          />
        )}
        {haveSection && (
          <DropDownWithLabel
            dropDownLabel="สาขาวิชา / Section"
            name={name + "Section"}
            options={[]}
            setValue={setSectionDetail}
          />
        )}
      </div>
    </div>
  );
};
export default FacultyDetailBox;
