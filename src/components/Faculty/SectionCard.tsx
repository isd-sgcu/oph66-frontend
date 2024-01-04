import type { SectionProp } from "./FacultyProperty";
const sectionCard = ({ section }: { section: SectionProp }) => {
  if (section.code === "-") {
    return <div></div>;
  } else {
    return (
      <div className="mx-9 mt-2.5 block h-fit w-full rounded-2xl border-2 border-white bg-gradient-to-t from-pink-600 via-pink-500 to-white">
        <div className="font-['IBM Plex Sans Thai'] flex h-fit w-full justify-center text-center text-base font-medium text-white">
          {section.name_th}
        </div>
        <div className="font-['IBM Plex Sans Thai'] flex h-fit w-max justify-center text-center text-base font-medium text-white">
          {section.name_en}
        </div>
      </div>
    );
  }
};

export default sectionCard;
