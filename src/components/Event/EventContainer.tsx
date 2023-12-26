import { useState } from "react";
import EventBox, { type EventBoxProps } from "./EventBox";

const Faculties = {
  1: "Engineer",
  2: "Science",
  3: "Arts",
};

const EventContainer = ({ Events }: { Events: EventBoxProps[] }) => {
  const [selectedFaculty, setSelectedFaculty] = useState<string | null>(null);
  const [currEvents, setCurrEvents] = useState<EventBoxProps[]>(Events);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchQuery = e.target.value;
    setSearchQuery(newSearchQuery);

    const filteredEvents = Events.filter((event) =>
      event.EventName.toLowerCase().includes(newSearchQuery.toLowerCase())
    );

    const finalFilteredEvents =
      selectedFaculty && selectedFaculty !== "คณะ / Faculty"
        ? filteredEvents.filter(
            (event) => event.EngFaculty === Faculties[selectedFaculty]
          )
        : filteredEvents;

    setCurrEvents(finalFilteredEvents);
  };

  const handleFacultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedFaculty(selectedValue);

    // Filter events based on selected faculty
    const filteredEvents =
      selectedValue === "คณะ / Faculty"
        ? Events
        : Events.filter(
            (event) => event.EngFaculty === Faculties[selectedValue]
          );

    const finalFilteredEvents =
      searchQuery !== ""
        ? filteredEvents.filter((event) =>
            event.EventName.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : filteredEvents;

    setCurrEvents(finalFilteredEvents);
  };

  return (
    <div className="flex flex-col gap-2 text-center text-white">
      <p className="text-4xl">Events</p>
      <p className="text-xl underline">กิจกรรมต่าง ๆ ในงาน</p>
      <div className="mb-8 flex justify-center">
        <label
          className="flex h-full w-12 items-center justify-center rounded-l-2xl bg-white p-2"
          htmlFor="eventName"
        >
          <i className="icon-[mdi--magnify] text-3xl text-pink-500"></i>
        </label>
        <input
          type="search"
          name="eventName"
          id="eventName"
          className="w-96 rounded-r-2xl border-2 border-white bg-transparent px-4 text-white"
          placeholder="ค้นหา/search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <select
          name="Faculty"
          id="Faculty"
          className="ml-4 w-72 appearance-none rounded-lg px-4 text-pink-500"
          onChange={handleFacultyChange}
          value={selectedFaculty || ""}
        >
          <option value="คณะ / Faculty">คณะ / Faculty</option>
          {Object.entries(Faculties).map(([id, name]) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-6 text-start lg:grid-cols-3">
        {currEvents.map((d, index) => (
          <EventBox key={index} {...d} />
        ))}
      </div>
    </div>
  );
};

export default EventContainer;
