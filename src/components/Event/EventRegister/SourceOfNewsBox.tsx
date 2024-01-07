import CheckBox from "@/components/CheckBox";
import clsx from "clsx";
interface Props {
  setSourceOfNews: React.Dispatch<React.SetStateAction<never[]>>;
  isShowError: boolean;
}
const SourceOfNewsBox = ({ setSourceOfNews, isShowError }: Props) => {
  return (
    <div className="mb-12 flex w-screen shrink-0 flex-col items-center p-0">
      <div className="m-0 flex w-4/5 max-w-xl flex-col items-center p-0">
        <div
          className={clsx(
            "mb-1 h-fit w-full rounded-2xl border-4 border-solid p-9 shadow-inner backdrop-blur-2xl",
            isShowError ? "border-[#F55572]" : "border-white"
          )}
        >
          <p className="text-medium mb-3 text-base text-white">
            ทราบข่าวการจัดกิจกรรมนี้จากช่องทางใด (ตอบได้มากกว่า 1 ข้อ) / How did
            you hear about the event? (Check all that apply)*
          </p>
          <div className="flex flex-row">
            <CheckBox
              value="facebook"
              name="sourceOfNews"
              id="facebookSource"
              setValue={setSourceOfNews}
              isShowError={false}
            />
            <label className="text-medium mt-1 text-base text-white">
              Facebook Page: CU Openhouse
            </label>
          </div>
          <div className="flex flex-row">
            <CheckBox
              value="instragram"
              name="sourceOfNews"
              id="instragramSource"
              setValue={setSourceOfNews}
              isShowError={false}
            />
            <label className="text-medium mt-1 text-base text-white">
              Instagram: @cuopenhouse
            </label>
          </div>
          <div className="flex flex-row">
            <CheckBox
              value="faculties"
              name="sourceOfNews"
              id="facultiesSource"
              setValue={setSourceOfNews}
              isShowError={false}
            />
            <label className="text-medium mt-1 text-base text-white">
              ช่องทางของคณะต่าง ๆ / Faculties’ official pages
            </label>
          </div>
          <div className="flex flex-row">
            <CheckBox
              value="chulaStudent"
              name="sourceOfNews"
              id="chulaStudentsSource"
              setValue={setSourceOfNews}
              isShowError={false}
            />
            <label className="text-medium mt-1 text-base text-white">
              นิสิตจุฬาฯ / Chula students
            </label>
          </div>
          <div className="flex flex-row">
            <CheckBox
              value="friends"
              name="sourceOfNews"
              id="friendsSource"
              setValue={setSourceOfNews}
              isShowError={false}
            />
            <label className="text-medium mt-1 text-base text-white">
              เพื่อน / Friends
            </label>
          </div>
          <div className="flex flex-row">
            <CheckBox
              value="parents"
              name="sourceOfNews"
              id="parentsSource"
              setValue={setSourceOfNews}
              isShowError={false}
            />
            <label className="text-medium mt-1 text-base text-white">
              ผู้ปกครอง / Parents
            </label>
          </div>
          <div className="flex flex-row">
            <CheckBox
              value="school"
              name="sourceOfNews"
              id="schoolSource"
              setValue={setSourceOfNews}
              isShowError={false}
            />
            <label className="text-medium mt-1 text-base text-white">
              โรงเรียน / School
            </label>
          </div>
        </div>
        <p className="place-self-end text-xs text-white">
          จำเป็นต้องกรอก / Must be filled*
        </p>
      </div>
    </div>
  );
};

export default SourceOfNewsBox;
