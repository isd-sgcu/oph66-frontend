export interface FacultyInterested {
  faculty: string;
  department: string;
  section: string;
  number: string;
}

export interface User {
  first_name: string;
  last_name: string;
  birth_date: string; // YYYY-MM-DD
  country: string;
  province: string; // for country = Thailand
  status: string;
  educational_level: string; // for status = student
  news_source: string[];
  desired_rounds: string;
  join_cu_reason: string;
  interested_faculties: [
    {
      order: number;
      department_code: string;
      faculty_code: string;
      section_code: string;
    },
  ];
  planned_to_visited_faculties: [
    {
      order: number;
      department_code: string;
      faculty_code: string;
      section_code: string;
    },
  ];
}
