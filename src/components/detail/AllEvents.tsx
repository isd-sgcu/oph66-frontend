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
let ppp = ""
const AllEvents: React.FC = () => {
  let previousDate = "00/00/00";
  let count = 0;
  let temp = 0;
  {sortedBytime.map(schedule => {
    const currentDate = new Date(schedule.starts_at).toLocaleDateString('en-GB');
    if(previousDate !== currentDate) {
      ppp += `${previousDate}: ${count}, `
      previousDate = currentDate;
      count = temp;
    }
    temp = temp+1
    //sche

  })}
  return (
    <div>
      {ppp}
    </div>
  );
};
export default AllEvents;