import { useState } from "react";

const options = {
  1: "Engineer",
  2: "Science",
  3: "Arts",
};

const Selector = () => {
  const [from, setFrom] = useState(0);

  return (
    <section className="flex w-full max-w-md justify-center">
      <div className="mx-6 w-full">
        <div className="relative flex h-12 items-center gap-4">
          <label className="text-xl font-bold leading-none text-white">
            เลือก
            <br />
            Select:
          </label>
          <select
            className="relative h-full w-full flex-1 appearance-none rounded-2xl bg-white px-4 font-medium text-pink-400"
            onChange={(e) => setFrom(Number(e.currentTarget.value))}
            value={from}
          >
            <option value="0" disabled hidden>
              คณะ / Faculty
            </option>
            {Object.entries(options).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
          <i className="icon-[mdi--chevron-down] pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-3xl text-pink-500"></i>
        </div>
      </div>
    </section>
  );
};

export default Selector;
