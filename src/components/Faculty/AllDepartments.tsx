import React from "react";
import Faculties from "src/components/Faculty/FacultyData.tsx";
import departmentCard from "./DepartmentCard";
import type {
  DepartmentProp,
  FacultyProp,
  SectionProp,
} from "./FacultyProperty";
import sectionCard from "./SectionCard";

// Assume facultyData contains your data structure with faculties, departments, and sections
// const facultyData: FacultyProp[] = Faculties/* your data here */;
const targetFacultyCode = "27"; // Replace with the code of the desired faculty

const AllDepartments: React.FC = () => {
  const faculty = Faculties.find(
    (tempFaculty: FacultyProp) => tempFaculty.code === targetFacultyCode
  );

  if (!faculty) {
    return <div>Faculty not found</div>;
  }

  return (
    <div className="h-fit w-full">
      <div className="h-fit w-full">
        {faculty.departments.map((department: DepartmentProp) => (
          <div key={department.code}>
            <div>{departmentCard({ department })}</div>
            <div>
              {department.sections.map((section: SectionProp) => (
                <div key={section.code}>{sectionCard({ section })}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDepartments;
