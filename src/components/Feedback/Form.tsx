import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import { QUESTIONS } from "@/data/feedback";

interface Props {
  language: "en" | "th";
  token: string;
}

const Form = ({ language, token }: Props): JSX.Element => {
  const { toast } = useToast();
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const centralRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<boolean[]>(QUESTIONS.map(() => false));
  const [answers, setAnswers] = useState<string[]>(
    Array.from({ length: QUESTIONS.length }, () => "")
  );
  const [isAttendCentralEvent, setIsAttendCentralEvent] =
    useState<boolean>(true);
  const [comment, setComment] = useState<string>("");

  const setValue = (value: string, index: number) => {
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[index] = value;
      return newAnswers;
    });
  };

  const validate = () => {
    let isValid = true;
    const newErrors = [...errors];
    for (let i = 0; i < 6; i++) {
      if (answers[i] === "") {
        newErrors[i] = true;
        isValid = false;
      } else {
        newErrors[i] = false;
      }
    }
    if (isAttendCentralEvent) {
      for (let i = 6; i < answers.length; i++) {
        if (answers[i] === "") {
          newErrors[i] = true;
          isValid = false;
        } else {
          newErrors[i] = false;
        }
      }
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      toast({
        title:
          language === "th"
            ? "กรุณาตอบคำถามทั้งหมด"
            : "Please answer all questions",
        variant: "destructive",
      });
      for (let i = 0; i < errors.length; i++) {
        if (errors[i]) {
          refs.current[i]?.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
          break;
        }
      }
      return;
    } else if (comment.length > 600) {
      toast({
        title:
          language === "th"
            ? "ความคิดเห็นเพิ่มเติมต้องไม่เกิน 600 ตัวอักษร"
            : "Additional comments must not exceed 600 characters",
        variant: "destructive",
      });
      return;
    }

    const data = {
      q1: answers[0],
      q2: answers[1],
      q3: answers[2],
      q4: answers[3],
      q5: answers[4],
      q6: answers[5] === "" ? "did-not-attend" : answers[5],
      q7: answers[6] === "" ? "did-not-attend" : answers[6],
      q8: answers[7] === "" ? "did-not-attend" : answers[7],
      q9: answers[8] === "" ? "did-not-attend" : answers[8],
      q10: answers[9] === "" ? "did-not-attend" : answers[9],
      q11: answers[10] === "" ? "did-not-attend" : answers[10],
      q12: answers[11] === "" ? "did-not-attend" : answers[11],
      q13: answers[12] === "" ? "did-not-attend" : answers[12],
      q14: answers[13] === "" ? "did-not-attend" : answers[13],
      q15: answers[14] === "" ? "did-not-attend" : answers[14],
      q16: answers[15] === "" ? "did-not-attend" : answers[15],
      q17: answers[16] === "" ? "did-not-attend" : answers[16],
      q18: answers[17] === "" ? "did-not-attend" : answers[17],
      q19: answers[18] === "" ? "did-not-attend" : answers[18],
      comment,
    };

    const res = await fetch(`${import.meta.env.PUBLIC_API_BASE_URL}/feedback`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      toast({
        title: language === "th" ? "เกิดข้อผิดพลาด" : "An error occurred",
        variant: "destructive",
      });
      return;
    }

    window.location.href = "/feedback/submitted";
  };

  useEffect(() => {
    centralRef.current?.style.setProperty(
      "display",
      isAttendCentralEvent ? "flex" : "none"
    );
  }, [isAttendCentralEvent]);

  return (
    <form className="flex flex-col gap-7 px-2" onSubmit={handleSubmit}>
      <section className="flex h-fit w-full max-w-xl flex-col gap-4 rounded-2xl border-2 bg-gradient-to-b from-pink-550/80 to-pink-500/80 px-4 py-5 font-medium text-white shadow-inner shadow-white backdrop-blur-2xl md:text-lg">
        <h1 className="text-left text-2xl font-bold">
          {language === "th" ? "ภาพรวมงาน" : "Event Overview"}
        </h1>
        {QUESTIONS.slice(0, 6).map((question) => (
          <div
            id={`question-${question.order}`}
            key={question.order.toString()}
            ref={(el) => (refs.current[question.order - 1] = el)}
            className={clsx(
              "flex flex-col gap-4",
              errors[question.order - 1] &&
                "rounded-2xl p-2 outline-dashed outline-4 outline-indigo-950"
            )}
          >
            <p>{question[language]}</p>
            <div className="flex flex-row items-center justify-center gap-4">
              <p className="w-full min-w-0 break-all text-right text-sm md:text-base">
                {language === "th" ? "มากที่สุด" : "Very satisfied"}
              </p>
              <ul className="flex w-full flex-1 items-start gap-4">
                {["5", "4", "3", "2", "1"].map((value) => {
                  return (
                    <li
                      className="flex flex-col items-center justify-center gap-2"
                      key={`question-${question.order}-${value}`}
                    >
                      <div className="relative flex aspect-square w-5 items-center justify-center">
                        <input
                          type="radio"
                          id={`question-${question.order}-${value}`}
                          name={`question-${question.order}`}
                          value={value}
                          className="absolute aspect-square w-full appearance-none"
                          onClick={(e) => {
                            e.preventDefault();
                            setValue(value, question.order - 1);
                          }}
                        />
                        <label
                          htmlFor={`question-${question.order}-${value}`}
                          className="pointer-events-none absolute aspect-square w-full rounded-full bg-white"
                        >
                          <div
                            className={clsx(
                              "pointer-events-none absolute left-1/2 top-1/2 aspect-square w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500",
                              answers[question.order - 1] !== value && "hidden"
                            )}
                          ></div>
                        </label>
                      </div>
                      <label htmlFor={`question-${question.order}-${value}`}>
                        {value}
                      </label>
                    </li>
                  );
                })}
              </ul>
              <p className="w-full min-w-0 break-all text-left text-sm md:text-base">
                {language === "th" ? "น้อยที่สุด" : "Very dissatisfied"}
              </p>
            </div>
          </div>
        ))}
      </section>
      <div className="flex h-fit w-full max-w-xl gap-4 rounded-2xl border-2 bg-gradient-to-b from-pink-550/80 to-pink-500/80 px-4 py-5 font-medium text-white shadow-inner shadow-white backdrop-blur-2xl md:text-lg">
        <Switch
          checked={isAttendCentralEvent}
          onCheckedChange={setIsAttendCentralEvent}
        />
        <label htmlFor="attend-central-event">
          ท่านได้เข้าร่วมกิจกรรมของส่วนกลาง / You have attended activities at
          Sala Phra Kiew
        </label>
      </div>
      <section
        className="flex h-fit w-full max-w-xl flex-col gap-4 rounded-2xl border-2 bg-gradient-to-b from-pink-550/80 to-pink-500/80 px-4 py-5 font-medium text-white shadow-inner shadow-white backdrop-blur-2xl md:text-lg"
        ref={centralRef}
      >
        <h1 className="text-left text-2xl font-bold">
          {language === "th" ? "งานส่วนกลาง" : "Activities at Sala Phra Kiew"}
        </h1>
        {QUESTIONS.slice(6).map((question) => (
          <div
            id={`question-${question.order}`}
            key={question.order.toString()}
            ref={(el) => (refs.current[question.order - 1] = el)}
            className={clsx(
              "flex flex-col gap-4",
              errors[question.order - 1] &&
                "rounded-2xl p-2 outline-dashed outline-4 outline-indigo-950"
            )}
          >
            <p>{question[language]}</p>
            <div className="flex flex-row items-center justify-center gap-4">
              <p className="w-full min-w-0 break-all text-right text-sm md:text-base">
                {language === "th" ? "มากที่สุด" : "Very satisfied"}
              </p>
              <ul className="flex w-full flex-1 items-start gap-4">
                {["5", "4", "3", "2", "1"].map((value) => {
                  return (
                    <li
                      className="flex flex-col items-center justify-center gap-2"
                      key={`question-${question.order}-${value}`}
                    >
                      <div className="relative flex aspect-square w-5 items-center justify-center">
                        <input
                          type="radio"
                          id={`question-${question.order}-${value}`}
                          name={`question-${question.order}`}
                          value={value}
                          className="absolute aspect-square w-full appearance-none"
                          onClick={(e) => {
                            e.preventDefault();
                            setValue(value, question.order - 1);
                          }}
                        />
                        <label
                          htmlFor={`question-${question.order}-${value}`}
                          className="pointer-events-none absolute aspect-square w-full rounded-full bg-white"
                        >
                          <div
                            className={clsx(
                              "pointer-events-none absolute left-1/2 top-1/2 aspect-square w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500",
                              answers[question.order - 1] !== value && "hidden"
                            )}
                          ></div>
                        </label>
                      </div>
                      <label htmlFor={`question-${question.order}-${value}`}>
                        {value}
                      </label>
                    </li>
                  );
                })}
              </ul>
              <p className="w-full min-w-0 break-all text-left text-sm md:text-base">
                {language === "th" ? "น้อยที่สุด" : "Very dissatisfied"}
              </p>
            </div>
          </div>
        ))}
      </section>
      <section className="flex h-fit w-full max-w-xl flex-col gap-2 rounded-2xl border-2 bg-gradient-to-b from-pink-550/80 to-pink-500/80 px-4 py-5 font-medium text-white shadow-inner shadow-white backdrop-blur-2xl md:text-lg">
        <label htmlFor="additional-comments">
          {language === "th" ? "ความคิดเห็นเพิ่มเติม" : "Additional comments"}
        </label>
        <textarea
          id="additional-comments"
          className="h-32 w-full rounded-2xl bg-white p-2 text-pink-550 placeholder:text-pink-400"
          placeholder="ไม่เกิน 600 ตัวอักษร / Not more than 600 characters"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </section>
      <button
        type="submit"
        className="mx-auto flex h-fit w-fit rounded-2xl border-2 bg-transparent px-5 py-2 text-xl font-bold text-white shadow-inner shadow-white backdrop-blur-2xl"
      >
        ส่ง / Submit
      </button>
    </form>
  );
};

export default Form;
