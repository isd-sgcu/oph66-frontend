import { motion } from "framer-motion";
import type React from "react";

import type { Event } from "@/types/event";

export const EnrollBox: React.FC<{
  walkIn: boolean;
  maxCapacity: number;
}> = ({ walkIn, maxCapacity }) => (
  <div className="flex flex-col items-start gap-3 text-white">
    <div className="rounded-full bg-pink-500 px-2 py-1">
      <p className="text-xs">
        จำนวนที่นั่งต่อรอบ/ Capacity per session: {maxCapacity}
      </p>
    </div>
    {walkIn && (
      <div className="flex rounded-full border-2 border-white px-2 py-1">
        <p className="text-xs">Walk-in registration only</p>
      </div>
    )}
  </div>
);

const Card: React.FC<Event> = ({
  id,
  name,
  require_registration,
  max_capacity,
  faculty,
  location,
}) => {
  return (
    <motion.a
      className="w-72 rounded-2xl border-2 border-white bg-pink-500 shadow-inner shadow-white ring-4 ring-white/10 backdrop-blur-2xl"
      href={"/events/" + id}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 10,
        duration: 0.3,
      }}
    >
      <div className="flex flex-col gap-2 rounded-t-2xl bg-gradient-to-r from-indigo-900 to-pink-550 p-4 shadow-inner shadow-white backdrop-blur-2xl">
        <p className="text-xl font-bold uppercase text-white">
          {name.en ? name.en : name.th}
        </p>
        <EnrollBox walkIn={!require_registration} maxCapacity={max_capacity} />
      </div>
      <div className="flex flex-col gap-3 p-4 text-white">
        <div className="leading-none">
          <p className="font-bold">{faculty.name.th}</p>
          <p className="text-sm">{faculty.name.en}</p>
        </div>
        <div className="grid grid-cols-[24px_minmax(0,1fr)] gap-2">
          <i className="icon-[mdi--location] text-2xl text-white"></i>
          <p className="text-xs">
            {location.th} / {location.en}
          </p>
        </div>
      </div>
    </motion.a>
  );
};
export default Card;
