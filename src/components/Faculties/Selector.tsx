import { AnimatePresence, motion } from "framer-motion";
import type { FC } from "react";

interface Props {
  facultySelected: number;
  setFacultySelected: React.Dispatch<React.SetStateAction<number>>;
  options: { id: number; name: string }[];
}

const Selector: FC<Props> = ({
  facultySelected,
  setFacultySelected,
  options,
}) => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setFacultySelected(parseInt(e.target.value));
  };

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFacultySelected(0);
  };

  return (
    <motion.section
      className="relative flex h-12 w-full max-w-md justify-center gap-4 pl-4"
      initial={{
        paddingRight: "1rem",
      }}
      animate={{
        paddingRight: facultySelected === 0 ? "1rem" : "3rem",
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.1,
        ease: "easeInOut",
      }}
    >
      <label className="text-xl font-bold leading-none text-white">
        เลือก
        <br />
        Select:
      </label>
      <select
        className="relative h-full w-full flex-1 appearance-none rounded-2xl bg-white pl-4 pr-8 font-medium text-pink-400"
        onChange={handleSelect}
        value={facultySelected}
      >
        <option value="0">คณะ / Faculty</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      <motion.i
        className="icon-[mdi--chevron-down] pointer-events-none absolute right-0 top-1/2 text-3xl text-pink-500"
        initial={{
          translateX: "-100%",
          translateY: "-50%",
        }}
        animate={{
          translateX: facultySelected === 0 ? "-100%" : "-200%",
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
          duration: 0.1,
          ease: "easeInOut",
        }}
      ></motion.i>
      <AnimatePresence>
        {facultySelected !== 0 && (
          <motion.button
            className="group absolute right-0 flex items-center justify-center p-2 text-center"
            key="clear"
            onClick={handleClear}
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <i className="icon-[mdi--trash] text-3xl text-white group-hover:icon-[mdi--delete-empty]"></i>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Selector;
