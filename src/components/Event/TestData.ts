import { type EventBoxProps } from "./EventBox";

// USE FOR TEST ONLY //

export const Faculties: { [key: number]: string } = {
  1: "Engineer",
  2: "Science",
  3: "Faculty of Arts",
};
export const Events: EventBoxProps[] = [
  {
    EventName: "Session talk",
    Walkin: true,
    MaxEnrollment: 20,
    ThaiFaculty: "Engineer",
    EngFaculty: "Engineer",
    Time: 120,
    Location: "Sample City",
    Thai: true,
  },
  {
    EventName: "Test2",
    Walkin: false,
    MaxEnrollment: 100,
    ThaiFaculty: "จุฬา",
    EngFaculty: "Cu",
    Time: 30,
    Location: "Sample City",
    Thai: false,
  },
  {
    EventName: "Story of SAR (SAR-tory of SAR)",
    Walkin: true,
    MaxEnrollment: 300,
    ThaiFaculty: "คณะอักษรศาสตร์",
    EngFaculty: "Faculty of Arts",
    Time: 600,
    Location:
      "อาคารมหาจักรีสิรินธร ห้องอเนกประสงค์ ชั้น 9 / Maha Chakri Sirindhorn Building, 9th floor, Multipurpose room,",
    Thai: true,
  },
  {
    EventName: "Test4",
    Walkin: true,
    MaxEnrollment: 100,
    ThaiFaculty: "จุฬา",
    EngFaculty: "Cu",
    Time: 150,
    Location: "Sample City",
    Thai: true,
  },
];
