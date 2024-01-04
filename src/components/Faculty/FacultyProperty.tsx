export interface SectionProp {
  code: string;
  name_th: string;
  name_en: string;
}

export interface DepartmentProp {
  code: string;
  name_th: string;
  name_en: string;
  sections: SectionProp[];
}

export interface FacultyProp {
  code: string;
  name_th: string;
  name_en: string;
  participate_oph: boolean;
  instagram: string;
  facebook: string;
  tiktok: string;
  departments: DepartmentProp[];
}
