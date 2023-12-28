import { useState } from "react";
import EventBox, { type EventBoxProps } from "./EventBox";
import { FACULTIES } from "./TestData";

const DEFAULT_CHOSEN_FACULTY_VALUE = "คณะ / Faculty";

interface EventContainerProps {
  events: EventBoxProps[];
}

const EventContainer: React.FC<EventContainerProps> = ({ events }) => {
  const [selectedFaculty, setSelectedFaculty] = useState<string>(
    DEFAULT_CHOSEN_FACULTY_VALUE
  );
  const [currEvents, setCurrEvents] = useState<EventBoxProps[]>(events);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchQuery = e.target.value;
    setSearchQuery(newSearchQuery);

    const filteredEvents = events.filter((event) =>
      event.eventName.toLowerCase().includes(newSearchQuery.toLowerCase())
    );

    const finalFilteredEvents =
      selectedFaculty !== DEFAULT_CHOSEN_FACULTY_VALUE
        ? filteredEvents.filter((event) => event.engFaculty === selectedFaculty)
        : filteredEvents;

    setCurrEvents(finalFilteredEvents);
  };

  const handleFacultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedFaculty(selectedValue);

    const filteredEvents =
      selectedValue === DEFAULT_CHOSEN_FACULTY_VALUE
        ? events
        : events.filter((event) => event.engFaculty === selectedValue);

    const finalFilteredEvents =
      searchQuery !== ""
        ? filteredEvents.filter((event) =>
            event.eventName.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : filteredEvents;
    setCurrEvents(finalFilteredEvents);
  };

  return (
    <>
      <div className="flex flex-col justify-center gap-8 lg:flex-row">
        <div className="flex">
          <button className="flex h-full w-12 items-center justify-center rounded-l-2xl bg-white p-2">
            <i className="icon-[mdi--magnify] text-3xl text-pink-500"></i>
          </button>
          <input
            type="search"
            name="eventName"
            id="eventName"
            className="w-72 rounded-r-2xl border-2 border-white bg-transparent px-4 text-white shadow-inner shadow-white placeholder:text-white"
            placeholder="ค้นหา/search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <select
          name="Faculty"
          id="Faculty"
          className="rounded-2xl px-4 py-2 text-pink-500 lg:ml-4 lg:px-28"
          onChange={handleFacultyChange}
          value={selectedFaculty}
        >
          <option value={DEFAULT_CHOSEN_FACULTY_VALUE}>
            {DEFAULT_CHOSEN_FACULTY_VALUE}
          </option>
          {Object.entries(FACULTIES).map(([id, name]) => (
            <option key={id} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 items-start justify-start gap-6 text-start lg:grid-cols-3">
        {currEvents.map((d, index) => (
          <EventBox key={index} {...d} />
        ))}
      </div>
    </>
  );
};

export default EventContainer;
