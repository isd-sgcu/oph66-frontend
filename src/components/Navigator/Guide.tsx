import { useEffect, useState, type FC } from "react";

import { PLACES } from "@/data/map";

interface Props {
  images: {
    default: ImageMetadata;
  }[];
}

const Guide: FC<Props> = ({ images }) => {
  const [from, setFrom] = useState<number>(-1);
  const [to, setTo] = useState<number>(-1);
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    if (from === -1 || to === -1 || from === to) return;
    const f = from === 20 ? 15 : from + 1;
    const t = to === 20 ? 15 : to + 1;
    const data = images.find((image) =>
      image.default.src.includes(`/${f} ไป ${t}`)
    );
    setImage(data ? data.default.src : "");
  }, [from, to]);

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
            onChange={(e) => setFrom(parseInt(e.currentTarget.value))}
            value={from}
          >
            <option value={-1}>เลือก / Select</option>
            {PLACES.map((place, index) => (
              <option key={place} value={index}>
                {place}
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
            onChange={(e) => setTo(parseInt(e.currentTarget.value))}
          >
            <option value={-1}>เลือก / Select</option>
            {PLACES.map((place, index) => (
              <option key={place} value={index}>
                {place}
              </option>
            ))}
          </select>
          <i className="icon-[mdi--chevron-down] pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-3xl text-pink-500 "></i>
        </div>
      </div>
      <div className="relative h-full w-full flex-col rounded-2xl border-2 border-white bg-gradient-to-t from-pink-550/50 pb-8 pt-4 text-white shadow-inner shadow-white">
        <div className="flex justify-between gap-8 px-6 py-4">
          <div className="flex flex-1 flex-col items-start gap-2 text-left">
            <p className="line-clamp-2 w-full text-2xl font-bold">
              {from === -1 ? "เลือก / Select" : PLACES[from]}
            </p>
          </div>
          <i className="icon-[mdi--arrow-right-circle] bg-white text-4xl"></i>
          <div className="flex flex-1 flex-col items-end gap-2 text-right">
            <p className="line-clamp-2 w-full text-2xl font-bold">
              {to === -1 ? "เลือก / Select" : PLACES[to]}
            </p>
          </div>
        </div>
      </div>
      {from !== -1 && to !== -1 && from !== to && <img src={image} alt="" />}
    </section>
  );
};

export default Guide;
