import clsx from "clsx";
import type React from "react";

import CheckBox from "../CheckBox";
interface Props {
  setSourceOfNews: React.Dispatch<React.SetStateAction<string[]>>;
  isShowError: boolean;
}
const SourceOfNewsBox = ({ setSourceOfNews, isShowError }: Props) => {
  return (
    <div
      className={clsx(
        "flex h-fit w-full max-w-xl flex-col gap-2 rounded-2xl border-2 p-5 text-sm font-medium text-white shadow-inner shadow-white backdrop-blur-2xl",
        isShowError ? "border-[#F55572] ring-4 ring-[#F55572]" : "border-white"
      )}
    >
      <p>
        ทราบข่าวการจัดงานจากช่องทางใด (ตอบได้มากกว่า 1 ข้อ) / How did you hear
        about the event? (Check all that apply)*
      </p>
      <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center">
        <CheckBox
          value="facebook"
          name="sourceOfNews"
          id="facebookSource"
          setValue={setSourceOfNews}
        />
        <label htmlFor="facebookSource">Facebook Page: CU Openhouse</label>
      </div>
      <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center">
        <CheckBox
          value="instragram"
          name="sourceOfNews"
          id="instragramSource"
          setValue={setSourceOfNews}
        />
        <label htmlFor="instragramSource">Instagram: @cuopenhouse</label>
      </div>
      <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center">
        <CheckBox
          value="faculties"
          name="sourceOfNews"
          id="facultiesSource"
          setValue={setSourceOfNews}
        />
        <label htmlFor="facultiesSource">
          ช่องทางของคณะต่าง ๆ / Faculties’ official pages
        </label>
      </div>
      <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center">
        <CheckBox
          value="chulaStudent"
          name="sourceOfNews"
          id="chulaStudentsSource"
          setValue={setSourceOfNews}
        />
        <label htmlFor="chulaStudentsSource">นิสิตจุฬาฯ / Chula students</label>
      </div>
      <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center">
        <CheckBox
          value="friends"
          name="sourceOfNews"
          id="friendsSource"
          setValue={setSourceOfNews}
        />
        <label htmlFor="friendsSource">เพื่อน / Friends</label>
      </div>
      <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center">
        <CheckBox
          value="parents"
          name="sourceOfNews"
          id="parentsSource"
          setValue={setSourceOfNews}
        />
        <label htmlFor="parentsSource">ผู้ปกครอง / Parents</label>
      </div>
      <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center">
        <CheckBox
          value="school"
          name="sourceOfNews"
          id="schoolSource"
          setValue={setSourceOfNews}
        />
        <label htmlFor="schoolSource">โรงเรียน / School</label>
      </div>
      <p className="absolute -bottom-2 right-0 translate-y-full text-xs text-white">
        จำเป็นต้องกรอก / Must be filled*
      </p>
    </div>
  );
};

export default SourceOfNewsBox;
