export interface CardProp {
  nameThai: string;
  nameEnglish: string;
  instagram?: string;
  facebook?: string;
  isActive: boolean;
  link: string;
}
const Card = (props: CardProp) => {
  return (
    <div className="mx-4 my-2 h-60 max-w-[29rem] rounded-2xl border-2 border-white bg-transparent bg-gradient-to-t from-pink-400/50 to-white/5 text-base font-medium text-white shadow-inner shadow-white">
      <div className="-mb-3 p-6">
        <p className="text-2xl font-bold">{props.nameThai}</p>
        <p className="pb-2 pt-1">{props.nameEnglish}</p>
        <div className="mb-2 inline-block rounded-2xl bg-white px-3 text-sm text-pink-550">
          {props.isActive
            ? "จัดงาน OPH ในวันที่ 20-21 ม.ค."
            : "ไม่ได้จัดงาน OPH ในวันที่ 20-21 ม.ค."}
        </div>
        <div className="flex items-center py-1">
          <p className="icon-[mdi--instagram] mr-1 h-6 w-6"></p>
          <p>{props.instagram ?? "-"}</p>
        </div>
        <div className="flex items-center pt-1">
          <p className="icon-[mdi--facebook] mr-1 h-6 w-6"></p>
          <p>{props.facebook ?? "-"}</p>
        </div>
      </div>
      <div className="h-11 rounded-b-2xl bg-indigo-900 bg-gradient-to-r from-indigo-900 to-pink-550 px-6">
        <div className="flex items-center justify-between">
          <div>รายละเอียด / Details</div>
          <a
            className="icon-[mdi--navigate-next] h-10 w-10"
            href={props.link}
          ></a>
        </div>
      </div>
    </div>
  );
};
export default Card;
