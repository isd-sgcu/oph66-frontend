import { type EventBoxProps } from "./EventBox";

// USE FOR TEST ONLY //

export const FACULTIES: { [key: number]: string } = {
  1: "Engineer",
  2: "Science",
  3: "Faculty of Arts",
};
export const EVENTS: EventBoxProps[] = [
  {
    eventName: "Session talk",
    walkIn: true,
    maxEnrollment: 20,
    thaiFaculty: "วิศวกรรมศาสตร์",
    engFaculty: "Engineering",
    time: 120,
    location: "Sample City",
    thai: true,
  },
  {
    eventName: "Test2",
    walkIn: false,
    maxEnrollment: 100,
    thaiFaculty: "จุฬา",
    engFaculty: "Cu",
    time: 30,
    location: "Sample City",
    thai: false,
  },
  {
    eventName: "Story of SAR (SAR-tory of SAR)",
    walkIn: true,
    maxEnrollment: 300,
    thaiFaculty: "คณะอักษรศาสตร์",
    engFaculty: "Faculty of Arts",
    time: 600,
    location:
      "อาคารมหาจักรีสิรินธร ห้องอเนกประสงค์ ชั้น 9 / Maha Chakri Sirindhorn Building, 9th floor, Multipurpose room,",
    thai: true,
  },
  {
    eventName: "Test4",
    walkIn: true,
    maxEnrollment: 100,
    thaiFaculty: "จุฬา",
    engFaculty: "Cu",
    time: 150,
    location: "Sample City",
    thai: true,
  },
];
