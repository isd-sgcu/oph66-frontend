import { motion } from "framer-motion";

import type { Department as DepartmentType } from "@/types/faculty";

interface Props {
  departments: DepartmentType[];
}

const variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const sectionVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const Department: React.FC<Props> = ({ departments }) => {
  return (
    <motion.ul
      className="mx-auto mt-16 flex w-full max-w-xl flex-col gap-4"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="initial"
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      {departments.map((department) => (
        <motion.li
          className="flex flex-col gap-2.5"
          variants={sectionVariants}
          key={department.id}
        >
          <div className="flex w-full flex-col items-center justify-center rounded-2xl border-2 border-white bg-white px-4 py-2 text-center text-pink-500">
            <p className="text-xl font-bold">{department.nameTH}</p>
            <p className="font-bold">{department.nameEN}</p>
          </div>
          <ul className="mx-auto flex w-4/5 flex-col gap-2.5">
            {department.sections.map((section) => (
              <motion.li
                className="mx-auto flex w-full flex-col items-center justify-center rounded-2xl border-2 border-white bg-gradient-to-t from-pink-550/50 to-pink-550/15 px-3 py-2 text-center shadow-inner shadow-white backdrop-blur-2xl"
                variants={sectionVariants}
                key={section.id}
              >
                <p className="font-medium">{section.nameTH}</p>
                <p className="font-medium">{section.nameEN}</p>
              </motion.li>
            ))}
          </ul>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Department;
