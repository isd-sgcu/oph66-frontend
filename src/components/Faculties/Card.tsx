export interface CardProp {
  nameThai: string;
  nameEnglish: string;
  instagram?: string;
  facebook?: string;
  link: string;
}
const Card = (props: CardProp) => {
  return (
    <div className="mx-4 my-2 h-60 max-w-[29rem] rounded-2xl border-2 border-white bg-transparent bg-gradient-to-t from-pink-400/50 to-white/5 text-base font-medium text-white shadow-inner shadow-white">
      <div className="p-6">
        <p className="text-2xl font-bold">{props.nameThai}</p>
        <p className="py-1">{props.nameEnglish}</p>
        <div className="flex items-center py-1">
          <p className="icon-[mdi--instagram] mr-1 h-6 w-6"></p>
          <p>{props.instagram ?? "-"}</p>
        </div>
        <div className="flex items-center pt-1">
          <p className="icon-[mdi--facebook] mr-1 h-6 w-6"></p>
          <p>{props.facebook ?? "-"}</p>
        </div>
      </div>
      <div className="h-16 rounded-b-2xl bg-indigo-900 bg-gradient-to-r from-indigo-900 to-pink-550 px-6 py-2">
        <div className="flex items-center justify-between">
          <div>
            ข้อมูลการติดต่อภาควิชาและสาขา <br />
            Departments and sections
          </div>
          <a
            className="icon-[carbon--next-filled] h-10 w-10"
            href={props.link}
          ></a>
        </div>
      </div>
    </div>
  );
};
export default Card;
