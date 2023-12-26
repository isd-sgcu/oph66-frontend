import EventBox from "./EventBox";

export default function EventContainer() {
  return (
    <div className=" text-white">
      <p className="text-center text-4xl">Events</p>
      <p className="text-center text-xl underline">กิจกรรมต่าง ๆ ในงาน</p>
      <div className="grid grid-cols-3 gap-6">
        <EventBox />
        <EventBox />
        <EventBox />
        <EventBox />
      </div>
    </div>
  );
}
