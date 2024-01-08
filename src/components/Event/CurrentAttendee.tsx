import { useEffect, useState } from "react";

import type { Event } from "@/types/event";

interface Props {
  eventId: string;
  scheduleId: number;
  maxCapacity: number;
}

const CurrentAttendee: React.FC<Props> = ({
  eventId,
  scheduleId,
  maxCapacity,
}) => {
  const [currentAttendee, setCurrentAttendee] = useState<number>(0);

  useEffect(() => {
    const getData = async (id: string) => {
      const res = await fetch(
        import.meta.env.PUBLIC_API_BASE_URL + `/events/${id}`
      );
      const data = await res.json();
      return data.event as Event;
    };

    getData(eventId).then((event) => {
      const schedule = event.schedules.find(
        (schedule) => schedule.id === scheduleId
      );
      if (schedule) setCurrentAttendee(schedule.current_attendee);
    });
  }, [eventId]);

  return (
    <div className="flex w-full max-w-20 items-center justify-center text-nowrap rounded-2xl border border-pink-550 py-1 text-center">
      {currentAttendee} / {maxCapacity === 999 ? "∞" : maxCapacity}
    </div>
  );
};

export default CurrentAttendee;
