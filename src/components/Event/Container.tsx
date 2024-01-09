import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Card from "./Card";

import { FACULTIES } from "@/data/faculties";
import type { Event } from "@/types/event";

interface Props {
  events: Event[];
  faculty: string | null;
}

const Container: React.FC<Props> = ({ events, faculty }) => {
  const [selectedFaculty, setSelectedFaculty] = useState<number>(0);
  const [currEvents, setCurrEvents] = useState<Event[]>(events);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (faculty) {
      const facultyCode = FACULTIES.find(
        (facultyObj) => facultyObj.nameEN === faculty
      )?.id;
      if (facultyCode) {
        setSelectedFaculty(parseInt(facultyCode));
        const filteredEvents = events.filter(
          (event) => parseInt(event.faculty.code) === parseInt(facultyCode)
        );
        setCurrEvents(filteredEvents);
      }
    }
  }, [faculty]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchQuery = e.target.value;
    setSearchQuery(newSearchQuery);

    const filteredEvents = events.filter((event) =>
      event.name.en.toLowerCase().includes(newSearchQuery.toLowerCase())
    );

    const finalFilteredEvents =
      selectedFaculty !== 0
        ? filteredEvents.filter(
            (event) => parseInt(event.faculty.code) === selectedFaculty
          )
        : filteredEvents;

    setCurrEvents(finalFilteredEvents);
  };

  const handleFacultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(e.target.value);
    setSelectedFaculty(selectedValue);

    const filteredEvents =
      selectedValue === 0
        ? events
        : events.filter(
            (event) => parseInt(event.faculty.code) === selectedValue
          );

    const finalFilteredEvents =
      searchQuery !== ""
        ? filteredEvents.filter((event) =>
            event.name.en.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : filteredEvents;
    setCurrEvents(finalFilteredEvents);
  };

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedFaculty(0);
    setSearchQuery("");
    setCurrEvents(events);
  };

  return (
    <>
      <div className="flex flex-col justify-center gap-4 px-4 lg:flex-row">
        <motion.div className="mr-2 flex w-full">
          <div className="flex h-full w-12 items-center justify-center rounded-l-2xl bg-white p-2">
            <i className="icon-[mdi--magnify] text-3xl text-pink-500"></i>
          </div>
          <motion.input
            type="text"
            className="w-full flex-1 appearance-none rounded-r-2xl border-2 border-white bg-transparent px-4 text-white shadow-inner shadow-white backdrop-blur-2xl placeholder:text-white"
            placeholder="ค้นหา/search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </motion.div>
        <motion.div
          className="relative flex w-full"
          initial={{
            paddingRight: "0rem",
          }}
          animate={{
            paddingRight:
              selectedFaculty === 0 && searchQuery === "" ? "0rem" : "2rem",
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            duration: 0.1,
            ease: "easeInOut",
          }}
        >
          <select
            name="Faculty"
            id="Faculty"
            className="w-full max-w-xs appearance-none rounded-2xl py-2 pl-4 pr-8 text-pink-500"
            onChange={handleFacultyChange}
            value={selectedFaculty}
          >
            <option value={0}>คณะ/ Faculty</option>
            {FACULTIES.map((faculty) => (
              <option key={faculty.id} value={parseInt(faculty.id)}>
                {faculty.nameTH} / {faculty.nameEN}
              </option>
            ))}
          </select>
          <motion.i
            className="icon-[mdi--chevron-down] pointer-events-none absolute right-0 top-1/2 text-3xl text-pink-500"
            initial={{
              translateX: "0%",
              translateY: "-50%",
            }}
            animate={{
              translateX:
                selectedFaculty === 0 && searchQuery === "" ? "0%" : "-100%",
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
            {(selectedFaculty !== 0 || searchQuery !== "") && (
              <motion.button
                className="group absolute right-0 flex items-center justify-center p-2 text-center"
                key="clear"
                onClick={handleClear}
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: "30%" }}
                exit={{ opacity: 0, x: 0 }}
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
        </motion.div>
      </div>
      <motion.div
        className="grid grid-cols-1 items-start justify-start gap-6 text-start lg:grid-cols-3"
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
        {currEvents.map((event, index) => (
          <Card key={index} {...event} />
        ))}
      </motion.div>
    </>
  );
};

export default Container;
