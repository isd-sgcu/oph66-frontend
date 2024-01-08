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
    <section className="flex w-full max-w-md justify-center">
      <div className="mx-6 flex w-full">
        <div className="relative flex h-12 items-center gap-4">
          <label className="text-xl font-bold leading-none text-white">
            เลือก
            <br />
            Select:
          </label>
          <select
            className="relative h-full w-full flex-1 appearance-none rounded-2xl bg-white px-4 font-medium text-pink-400"
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
          <i className="icon-[mdi--chevron-down] pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-3xl text-pink-500"></i>
          <AnimatePresence>
            {facultySelected !== 0 && (
              <motion.button
                className="group absolute right-0 flex items-center justify-center p-2 text-center"
                onClick={handleClear}
                key="clear"
                initial={{ x: 0 }}
                animate={{ x: "100%" }}
                exit={{ x: 0 }}
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
        </div>
      </div>
    </section>
  );
};

export default Selector;
