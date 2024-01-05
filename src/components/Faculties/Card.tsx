export interface CardProps {
  nameThai: string;
  nameEnglish: string;
  instagram?: string;
  facebook?: string;
  isActive: boolean;
  link: string;
}
const Card: React.FC<CardProps> = ({
  nameThai,
  nameEnglish,
  instagram,
  facebook,
  isActive,
  link,
}) => {
  return (
    <div className="mx-4 my-2 flex h-60 min-h-full max-w-[29rem] flex-col justify-between rounded-2xl border-2 border-white bg-transparent bg-gradient-to-t from-pink-400/50 to-white/5 text-base font-medium text-white shadow-inner shadow-white">
      <div className="flex w-full flex-col p-6">
        <p className="text-2xl font-bold">{nameThai}</p>
        <p className="pb-2 pt-1">{nameEnglish}</p>
        <div className="mb-2 inline-block w-fit rounded-2xl bg-white px-3 py-1 text-sm text-pink-550">
          {!isActive && "ไม่ได้"}จัดงาน OPH ในวันที่ 20-21 ม.ค.
        </div>
        <div className="flex items-center py-1">
          <p className="icon-[mdi--instagram] mr-1 h-6 w-6"></p>
          <p>{instagram ?? "-"}</p>
        </div>
        <div className="flex items-center pt-1">
          <p className="icon-[mdi--facebook] mr-1 h-6 w-6"></p>
          <p>{facebook ?? "-"}</p>
        </div>
      </div>
      <a
        href={link}
        className="flex h-11 w-full items-center justify-between rounded-b-2xl bg-indigo-900 bg-gradient-to-r from-indigo-900 to-pink-550 px-6"
      >
        <p>รายละเอียด / Details</p>
        <i className="icon-[mdi--navigate-next] h-10 w-10"></i>
      </a>
    </div>
  );
};
export default Card;
