import React, { useState } from "react";

import ErrorBox from "@/components/Registration/ErrorBox";
import { useToast } from "@/components/ui/use-toast";
import EventConfirmModule from "./ConfirmModule";
import SourceOfNewsBox from "./SourceOfNewsBox";

interface Props {
  date: string;
  time: string;
  name: string;
  faculty: { th: string; en: string };
  scheduleId: string;
  token: string;
}

interface DTO {
  news_sources: string[];
}

const Form: React.FC<Props> = ({
  date,
  time,
  name,
  faculty,
  scheduleId,
  token,
}) => {
  const { toast } = useToast();
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

    const post = async () => {
      const data: DTO = {
        news_sources: sourceOfNews,
      };

      const res = await fetch(
        `${
          import.meta.env.PUBLIC_API_BASE_URL
        }/schedules/${scheduleId}/register`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (res.ok) {
        window.location.href = window.location.pathname + "/complete";
      } else {
        toast({
          variant: "destructive",
          title: "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง",
          description: await res.text(),
        });
        window.location.href = window.location.pathname.split("/register")[0];
      }
    };

    post();
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
