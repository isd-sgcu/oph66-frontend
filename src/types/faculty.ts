export interface Section {
  id: string;
  nameTH: string;
  nameEN: string;
}

export interface Department {
  id: string;
  nameTH: string;
  nameEN: string;
  sections: Section[];
}

export interface Faculty {
  id: string;
  nameTH: string;
  nameEN: string;
  participateOPH: boolean;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  location?: string;
  activeTime?: string;
  departments: Department[];
}
