import { type EventProp} from "./Event";
const daySchedule = ({ schedules }: { schedules: EventProp[] }) => {
  return (
    <div>
      {schedules.map((schedule, index) => (
        <div key={index}>
          <div className="block">Date: {new Date(schedule.starts_at).toLocaleDateString('en-GB')}</div>
          {/* Add other schedule details as needed */}
        </div>
      ))}
    </div>
  );
};

export default daySchedule;