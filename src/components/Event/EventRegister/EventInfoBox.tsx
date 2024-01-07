interface Props {
  eventDate: string;
  eventTime: string;
  eventLocation: string;
}

const EventInfoBox = ({ eventDate, eventTime, eventLocation }: Props) => {
  return (
    <div className="mb-16 flex h-36 w-96 flex-col justify-between rounded-2xl border-2 border-solid border-white p-4">
      <div className="flex text-white">
        <div className="icon-[mdi--calendar-blank-outline] mr-3 mt-1 p-0"></div>
        <p className="text-base font-medium">{eventDate}</p>
      </div>
      <div className="flex text-white">
        <div className="icon-[mdi--alarm-clock] mr-3 mt-1"></div>
        <p className="text-base font-medium">{eventTime}</p>
      </div>
      <div className="flex text-white">
        <div className="icon-[mdi--location] mr-3 h-10 w-10 pt-0"></div>
        <p className="text-base font-medium">{eventLocation}</p>
      </div>
    </div>
  );
};
export default EventInfoBox;
