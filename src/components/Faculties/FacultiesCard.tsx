import Card, { type CardProp } from "./Card.tsx";
const cards: CardProp[] = [
  {
    nameThai: "คณะละครสัตว์",
    nameEnglish: "Circus",
    instagram: "GG",
    link: "www.google.com",
    isActive: true,
  },
  {
    nameThai: "คณะหมูกรอบ",
    nameEnglish: "Pork",
    instagram: "Piggy",
    link: "www.google.com",
    isActive: false,
  },
  {
    nameThai: "คณะะะะ",
    nameEnglish: "Kana",
    link: "www.google.com",
    isActive: false,
  },
  {
    nameThai: "คณะะะะ",
    nameEnglish: "Kana",
    link: "www.google.com",
    isActive: true,
  },
  {
    nameThai: "คณะะะะ",
    nameEnglish: "Kana",
    link: "www.google.com",
    isActive: true,
  },
  {
    nameThai: "คณะะะะ",
    nameEnglish: "Kana",
    link: "www.google.com",
    isActive: false,
  },
];
const FacultiesCard = () => {
  return (
    <div className="my-12 grid w-full max-w-md grid-cols-1 md:max-w-5xl md:grid-cols-2">
      {cards.map((e) => {
        return (
          <Card
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
