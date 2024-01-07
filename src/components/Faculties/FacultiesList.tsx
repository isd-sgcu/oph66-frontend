import { motion } from "framer-motion";
import { useState } from "react";

import { FACULTIES } from "@/data/faculties";
import Card from "./Card.tsx";
import Selector from "./Selector.tsx";

const options = FACULTIES.map((faculty) => {
  return {
    id: parseInt(faculty.id),
    name: faculty.nameTH + " / " + faculty.nameEN,
  };
});

const FacultiesList = () => {
  const [facultySelected, setFacultySelected] = useState<number>(0);

  return (
    <>
      <Selector
        facultySelected={facultySelected}
        setFacultySelected={setFacultySelected}
        options={options}
      />
      <motion.div
        className="mt-12 grid w-full max-w-md grid-cols-1 gap-4 md:max-w-5xl md:grid-cols-2"
        layout
        transition={{
          layout: {
            type: "spring",
            stiffness: 150,
            damping: 20,
            duration: 0.1,
          },
        }}
      >
        {FACULTIES.filter(
          (faculty) =>
            facultySelected === 0 || parseInt(faculty.id) === facultySelected
        ).map((faculty) => {
          return <Card key={faculty.id} {...faculty} />;
        })}
      </motion.div>
    </>
  );
};
export default FacultiesList;
