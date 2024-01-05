import { FACULTIES } from "@/data/faculties.ts";
import Card from "./Card.tsx";

const FacultiesCard = () => {
  return (
    <div className="mt-12 grid w-full max-w-md grid-cols-1 gap-4 md:max-w-5xl md:grid-cols-2">
      {FACULTIES.map((e) => {
        return (
          <Card
            key={e.nameEnglish}
            nameThai={e.nameThai}
            nameEnglish={e.nameEnglish}
            instagram={e.instagram}
            facebook={e.facebook}
            link={e.link}
            isActive={e.isActive}
          />
        );
      })}
    </div>
  );
};
export default FacultiesCard;
