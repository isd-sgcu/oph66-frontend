import clsx from "clsx";
import download from "downloadjs";
import { toPng } from "html-to-image";
import { useEffect, useRef, useState } from "react";

import QRCode from "./QRCode";

import chula3 from "@/assets/chula-3.svg";
import bg from "@/assets/idcard-bg.svg";

interface Props {
  fullName: string;
  userId: string;
  faculties: {
    firstThai: string;
    firstEng: string;
    secondThai: string;
    secondEng: string;
    thirdThai: string;
    thirdEng: string;
  };
}

const IDCard: React.FC<Props> = ({
  fullName,
  userId,
  faculties: {
    firstThai,
    firstEng,
    secondThai,
    secondEng,
    thirdThai,
    thirdEng,
  },
}) => {
  const ref = useRef<HTMLElement>(null);
  const [image, setImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleDownload = () => {
    if (image) download(image, "id-card.png");
  };

  const handleRefresh = () => {
    if (!ref.current) return;

    setImage("");

    ref.current.style.display = "flex";
    toPng(ref.current, {
      pixelRatio: 3,
      cacheBust: true,
      filter: (element) => {
        return element.id !== "overlay";
      },
    }).then((dataUrl) => {
      if (!ref.current) return;
      setImage(dataUrl);
      window.localStorage.setItem("idcard", dataUrl);
      ref.current.style.display = "none";
    });
  };

  useEffect(() => {
    const getImage = async () => {
      const idcard = window.localStorage.getItem("idcard");
      const fullname = window.localStorage.getItem("fullname");
      if (idcard && fullname && fullname === fullName) {
        setImage(idcard);
        setIsLoading(false);
        if (ref.current) ref.current.style.display = "none";
        return;
      }
      if (ref.current) {
        const dataUrl = await toPng(ref.current, {
          pixelRatio: 3,
          cacheBust: true,
          filter: (element) => {
            return element.id !== "overlay";
          },
        });
        setImage(dataUrl);
        ref.current.style.display = "none";
        window.localStorage.setItem("idcard", dataUrl);
        window.localStorage.setItem("fullname", fullName);
      }
    };

    getImage();
  }, []);

  return (
    <div className="flex w-full flex-col">
      {isLoading && (
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-lg font-medium text-white">Generating ID Card</p>
        </div>
      )}
      <div className={clsx("relative w-full max-w-sm", !image && "hidden")}>
        <img src={image} alt="" />
      </div>
      <section
        style={{ backgroundImage: `url(${bg.src})` }}
        className="relative flex aspect-[0.65625] w-96 flex-col bg-cover bg-center bg-no-repeat pb-20"
        ref={ref}
        onLoad={() => setIsLoading(false)}
      >
        <section
          id="overlay"
          className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-2 bg-black text-white"
        >
          <i className="icon-[line-md--loading-twotone-loop] text-2xl text-white"></i>
          <p className="text-2xl font-bold">Resizing ID Card</p>
          <p className="text-lg font-medium">Please wait...</p>
        </section>
        <div className="flex h-48 w-full flex-col pl-8 pt-7">
          <img className="h-24 w-52" src={chula3.src} alt="" />
          <p className="text-2xl font-bold">{fullName}</p>
          <p className="font-medium">ID: {userId}</p>
        </div>
        <div className="flex w-full flex-col px-8 pt-2">
          <div className="flex w-fit items-center break-words rounded-2xl bg-white px-4 py-1 font-medium text-pink-500">
            คณะที่สนใจที่สุด / Faculties interested
          </div>
          <div className="mt-3 grid w-fit grid-cols-[16px_1fr] font-medium">
            <span className="col-span-1">1.</span>
            <span className="col-span-1">{firstThai}</span>
            <span className="col-start-2">{firstEng}</span>
            <span className="col-span-1">{secondThai ? "2." : <br />}</span>
            <span className="col-span-1">{secondThai || <br />}</span>
            <span className="col-start-2">{secondEng || <br />}</span>
            <span className="col-span-1">{thirdThai ? "3." : <br />}</span>
            <span className="col-span-1">{thirdThai || <br />}</span>
            <span className="col-start-2">{thirdEng || <br />}</span>
          </div>
          <div className="mt-auto flex justify-between">
            <div className="flex flex-col gap-2 place-self-end">
              <span className="font-libre font-bold">
                Chula
                <br />
                Open House
                <br />
                2024
              </span>
              <span className="text-xs font-medium">20-21 January 2024</span>
            </div>
            <QRCode userId={userId} />
          </div>
        </div>
      </section>
      <div className="mt-8 flex flex-col items-center justify-center text-center md:w-96">
        <div className="flex w-full flex-col gap-5">
          <p className="text-sm font-medium md:text-base">
            *ID Card นี้จะต้องแสดงให้กับ Staff ของงาน
            <br />
            ก่อนเข้าร่วมกิจกรรมของทุกคณะ
          </p>
          <button
            className={clsx(
              "flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-white px-5 py-1 text-lg font-bold shadow-inner shadow-white backdrop-blur-2xl md:px-7 md:py-3 md:text-2xl",
              !image && "hidden"
            )}
            onClick={handleDownload}
          >
            บันทึกภาพ / Save image
            <i className="text-2xlmd:text-3xl icon-[mdi--arrow-down-circle]"></i>
          </button>
          <button
            className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-white px-5 py-1 text-lg font-bold shadow-inner shadow-white backdrop-blur-2xl md:px-7 md:py-3 md:text-2xl"
            onClick={handleRefresh}
          >
            <i className="text-2xlmd:text-3xl icon-[mdi--reload]"></i>
            รีเฟรช / Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default IDCard;
