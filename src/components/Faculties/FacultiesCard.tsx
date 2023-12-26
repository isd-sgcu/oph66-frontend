import Card, { type CardProp } from "./Card.tsx";
const cards: CardProp[] = [
  {
    nameThai: "คณะละครสัตว์",
    nameEnglish: "Circus",
    instagram: "GG",
    link: "www.google.com",
  },
  {
    nameThai: "คณะหมูกรอบ",
    nameEnglish: "Pork",
    instagram: "Piggy",
    link: "www.google.com",
  },
  {
    nameThai: "คณะะะะ",
    nameEnglish: "Kana",
    link: "www.google.com",
  },
  {
    nameThai: "คณะะะะ",
    nameEnglish: "Kana",
    link: "www.google.com",
  },
  {
    nameThai: "คณะะะะ",
    nameEnglish: "Kana",
    link: "www.google.com",
  },
  {
    nameThai: "คณะะะะ",
    nameEnglish: "Kana",
    link: "www.google.com",
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
          />
        );
      })}
    </div>
  );
};
export default FacultiesCard;
