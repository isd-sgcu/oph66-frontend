import { motion } from "framer-motion";

import type { Faculty } from "@/types/faculty";

const Card: React.FC<Faculty> = ({
  nameTH,
  nameEN,
  instagram,
  facebook,
  participateOPH,
  id,
}) => {
  return (
    <motion.a
      href={"/faculties/" + id}
      className="mx-4 my-2 flex h-full max-w-[29rem] flex-col justify-between rounded-2xl border-2 border-white bg-transparent bg-gradient-to-t from-pink-400/50 to-white/5 font-medium text-white shadow-inner shadow-white"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 10,
        duration: 0.3,
      }}
    >
      <div className="flex w-full flex-col p-6">
        <p className="text-2xl font-bold">{nameTH}</p>
        <p className="pb-2 pt-1">{nameEN}</p>
        <div className="mb-2 inline-block w-fit rounded-2xl bg-white px-3 py-1 text-sm text-pink-550">
          {!participateOPH && "ไม่ได้"}จัดงาน OPH ในวันที่ 20-21 ม.ค.
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
      <div className="flex h-11 w-full items-center justify-between rounded-b-2xl bg-gradient-to-tr from-indigo-900 to-pink-550 px-6">
        <p>รายละเอียด / Details</p>
        <i className="icon-[mdi--navigate-next] text-4xl"></i>
      </div>
    </motion.a>
  );
};
export default Card;
