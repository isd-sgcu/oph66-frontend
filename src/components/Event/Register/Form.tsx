import React, { useState } from "react";

import ErrorBox from "@/components/Registration/ErrorBox";
import EventConfirmModule from "./ConfirmModule";
import SourceOfNewsBox from "./SourceOfNewsBox";

interface Props {
  date: string;
  time: string;
  name: string;
  faculty: { th: string; en: string };
}

const Form: React.FC<Props> = ({ date, time, name, faculty }) => {
  const [sourceOfNews, setSourceOfNews] = useState<string[]>([]);
  const [isShowError, setIsShowError] = useState<boolean>(false);
  const [isShowConfirm, setIsShowConfirm] = useState<boolean>(false);

  const validateData = () => {
    if (sourceOfNews.length === 0) {
      setIsShowError(true);
    } else {
      setIsShowError(false);
      setIsShowConfirm(true);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      id="form"
      className="flex w-full flex-col items-center gap-12"
      onSubmit={handleSubmit}
    >
      <SourceOfNewsBox
        setSourceOfNews={setSourceOfNews}
        isShowError={isShowError}
      />

      {isShowError && <ErrorBox />}
      {isShowConfirm && (
        <EventConfirmModule
          date={date}
          name={name}
          faculty={faculty}
          time={time}
          setIsShowConfirm={setIsShowConfirm}
        />
      )}
      <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
        <button
          className="flex items-center justify-center gap-2 px-2 py-1 text-center hover:underline hover:underline-offset-4"
          onClick={() => window.history.back()}
        >
          <i className="icon-[mdi--arrow-back-circle] text-white"></i>
          <p className="text-base text-white">กลับ / Back</p>
        </button>
        <button
          type="button"
          className="rounded-2xl border-2 border-white bg-transparent px-4 py-2 font-bold text-white shadow-inner shadow-white backdrop-blur-2xl"
          onClick={validateData}
        >
          ลงทะเบียน / Register
        </button>
      </div>
    </form>
  );
};
export default Form;
