import { useState } from "react";

interface Options {
  [key: number]: string;
}

const options: Options = {
  1: "สถาบันนวัตกรรมบูรณาการ แห่งจุฬาลงกรณ์มหาวิทยาลัย (BAScii)",
  2: "สำนักวิชาทรัพยากรการเกษตร (SAR)",
};

const Guide = () => {
  const [from, setFrom] = useState<number>(0);
  const [to, setTo] = useState<number>(0);

  return (
    <section className="flex w-full flex-col items-center gap-9">
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="relative grid h-12 grid-cols-[48px_minmax(0,1fr)] items-center gap-4">
          <label className="text-xl font-bold leading-none text-white">
            จาก
            <br />
            From:
          </label>
          <select
            className="relative h-full w-full flex-1 appearance-none rounded-2xl bg-white px-4 font-medium text-pink-400"
            onChange={(e) => setFrom(Number(e.currentTarget.value))}
            value={from}
          >
            <option value="0" disabled hidden>
              เลือก / Select
            </option>
            {Object.entries(options).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
          <i className="icon-[mdi--chevron-down] pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-3xl text-pink-500"></i>
        </div>
        <div className="relative grid h-12 grid-cols-[48px_minmax(0,1fr)] items-center gap-4">
          <label className="text-xl font-bold leading-none text-white">
            ไปที่
            <br />
            To:
          </label>
          <select
            className="relative h-full w-full flex-1 appearance-none rounded-2xl bg-white px-4 font-medium text-pink-400"
            value={to}
            onChange={(e) => setTo(Number(e.currentTarget.value))}
          >
            <option value="0" disabled hidden>
              เลือก / Select
            </option>
            {Object.entries(options).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
          <i className="icon-[mdi--chevron-down] pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-3xl text-pink-500 "></i>
        </div>
      </div>
      {from !== 0 && to !== 0 && (
        <div className="relative h-44 w-full flex-col rounded-2xl border-2 border-white text-white shadow-inner shadow-white">
          <div className="flex justify-between gap-8 px-6 py-4">
            <div className="flex flex-1 flex-col items-start gap-2 text-left">
              <p className="line-clamp-2 w-full text-2xl font-bold">
                {options[from]}
              </p>
              <div className="flex h-6 w-14 min-w-max items-center justify-center rounded-2xl border border-white bg-transparent px-2 py-1 text-center text-xs font-medium text-white">
                OPH
              </div>
            </div>
            <i className="icon-[mdi--arrow-right-circle] bg-white text-4xl"></i>
            <div className="flex flex-1 flex-col items-end gap-2 text-right">
              <p className="line-clamp-2 w-full text-2xl font-bold">
                {options[to]}
              </p>
              <div className="flex h-6 w-14 min-w-max items-center justify-center rounded-2xl border border-white bg-transparent px-2 py-1 text-center text-xs font-medium text-white">
                OPH
              </div>
            </div>
          </div>
          <button className="absolute bottom-0 flex h-8 w-full items-center justify-center rounded-b-2xl bg-gradient-to-r from-[#393570]/80 to-pink-550/50 text-center font-medium">
            วิธีการเดินทาง
            <i className="icon-[mdi--menu-right] text-4xl"></i>
          </button>
        </div>
      )}
    </section>
  );
};

export default Guide;
