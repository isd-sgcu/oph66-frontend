import { useState } from "react";
import ErrorBox from "../ErrorBox";
import EventConfirmModule from "./EventConfirmModule";
import HealthConditionBox from "./HealthConditionBox";
import SourceOfNewsBox from "./SourceOfNewsBox";

const Form = ({ eventDate, eventName, eventFaculty, eventTime }) => {
  const [allergies, setAllergies] = useState("");
  const [chronicHealthConditions, setChronicHealthConditions] = useState("");
  const [sourceOfNews, setSourceOfNews] = useState([]);
  const [isShowError, setIsShowError] = useState(false);
  const [isShowConfirm, setIsShowConfirm] = useState(false);

  const validateData = () => {
    if (!allergies || !chronicHealthConditions || sourceOfNews.length === 0) {
      setIsShowError(true);
    } else {
      console.log("info is ready");
      setIsShowConfirm(true);
    }
  };
  return (
    <form id="form" className="flex flex-col items-center">
      <SourceOfNewsBox
        setSourceOfNews={setSourceOfNews}
        isShowError={isShowError}
      />
      <HealthConditionBox
        setAllergies={setAllergies}
        setChronicHealthConditions={setChronicHealthConditions}
        allergies={allergies}
        chronicHealthConditions={chronicHealthConditions}
        isShowError={isShowError}
      />

      {isShowError && <ErrorBox />}
      {isShowConfirm && (
        <EventConfirmModule
          eventDate={eventDate}
          eventName={eventName}
          eventFaculty={eventFaculty}
          eventTime={eventTime}
        />
      )}
      <div className="flex">
        <div className="icon-[mdi--arrow-back-circle] mb-3 mr-2 mt-1 text-white"></div>
        <p className="text-base text-white">กลับ / Back</p>
      </div>
      <button
        type="submit"
        className="place-self-center rounded-md border border-white bg-transparent px-4 py-2 font-bold text-white"
        onClick={(e) => {
          e.preventDefault();
          validateData();
        }}
      >
        ลงทะเบียน / Register
      </button>
    </form>
  );
};
export default Form;
