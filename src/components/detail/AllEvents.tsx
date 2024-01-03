import DaySchedule from "./DaySchedule";
import { type EventProp} from "./Event";
const data: EventProp[] = [

    {
      "id": "first-event",
      "name": {
        "th": "อีเวนท์แรก",
        "en": "First Event"
      },
      "faculty": {
        "code": "21",
        "name": {
          "th": "คณะวิศวกรรมศาสตร์",
          "en": ""
        }
      },
      "department": {
        "code": "-",
        "name": {
          "th": "-",
          "en": ""
        }
      },
      "require_registration": true,
      "max_capacity": 250,
      "schedules": [
        {
          "id": 2,
          "current_attendee": 0,
          "ends_at": "2024-01-21T13:00:00+07:00",
          "starts_at": "2024-01-21T15:00:00+07:00",
          "period": "21-afternoon"
        },
        {
          "id": 1,
          "current_attendee": 0,
          "ends_at": "2024-01-20T10:00:00+07:00",
          "starts_at": "2024-01-20T12:00:00+07:00",
          "period": "20-morning"
        },
        {
          "id": 3,
          "current_attendee": 0,
          "ends_at": "2024-01-22T10:00:00+07:00",
          "starts_at": "2024-01-22T12:00:00+07:00",
          "period": "20-morning"
        },
        {
          "id": 4,
          "current_attendee": 400,
          "ends_at": "2024-01-22T12:00:00+07:00",
          "starts_at": "2024-01-22T13:00:00+07:00",
          "period": "20-morning"
        },
        {
          "id": 4,
          "current_attendee": 200,
          "ends_at": "2024-01-22T12:00:00+07:00",
          "starts_at": "2024-01-22T13:00:00+07:00",
          "period": "20-morning"
        },
        {
          "id": 4,
          "current_attendee": 0,
          "ends_at": "2024-01-22T12:00:00+07:00",
          "starts_at": "2024-01-22T13:00:00+07:00",
          "period": "20-morning"
        }

      ],
      "location": {
        "th": "ตึก 3",
        "en": "Engineering Building 3"
      },
      "description": {
        "th": "",
        "en": ""
      }
    }
  ]

const sortedBytime = [...data[0].schedules].sort((a,b) => {
  const startTimeA = new Date(a.starts_at).getTime();
  const startTimeB = new Date(b.starts_at).getTime();
  return startTimeA - startTimeB;
});
let ppp = "xxx"


const AllEvents: React.FC = () => {
  let previousDate = "00/00/00";
  let count = 0;
  let table: JSX.Element[] = [];
  let day: JSX.Element[] = []; // Use an array to accumulate JSX elements

  sortedBytime.forEach((schedule) => {
    const currentDate = new Date(schedule.starts_at).toLocaleDateString('en-GB');


      // day.push(<DaySchedule schedules={sortedBytime} ind={count} maxCap={data[0].max_capacity} />);


    if (previousDate !== currentDate) {
      table.push(<div>{day}</div>);
      day = [];
      day.push(<DaySchedule schedules={sortedBytime} ind={count} maxCap={data[0].max_capacity} />);
      previousDate = currentDate;

    }else{
      day.push(<DaySchedule schedules={sortedBytime} ind={count} maxCap={data[0].max_capacity} />);
    }
    count = count + 1;
  });
console.log(count)
  table.push(<div key={previousDate}>{day}</div>);

  return <div>{table}</div>;
};
export default AllEvents;

// const AllEvents: React.FC = () => {
  
//   let previousDate = new Date(schedules.starts_at).toLocaleDateString('en-GB');
//   const scheduleComponents = sortedBytime.map((schedule, index) => (
//     <DaySchedule schedules={sortedBytime} ind={index} maxCap={data[0].max_capacity} />
//   ));

//   return <div>{scheduleComponents}</div>;
// };

// export default AllEvents;