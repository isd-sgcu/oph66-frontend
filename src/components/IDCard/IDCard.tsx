import clsx from "clsx";
import download from "downloadjs";
import { toPng } from "html-to-image";
import { useEffect, useRef, useState } from "react";

import QRCode from "./QRCode.tsx";

import chula3 from "@/assets/chula-3.svg";
import bg from "@/assets/idCard_bg.svg";

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

const IDCard = (props: Props) => {
  const ref = useRef<HTMLElement>(null);
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleDownload = () => {
    if (image) download(image, "id-card.png");
  };

  useEffect(() => {
    const getImage = async () => {
      const idCard = window.localStorage.getItem("idCard");
      if (idCard) {
        setImage(idCard);
        setIsLoading(false);
        ref.current.style.display = "none";
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
        window.localStorage.setItem("idCard", dataUrl);
        ref.current.style.display = "none";
      }
    };

    getImage();
  }, []);

  return (
    <>
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
          <p className="text-2xl font-bold">{props.fullName}</p>
          <p className="font-medium">ID: {props.userId}</p>
        </div>
        <div className="flex w-full flex-col px-8 pt-2">
          <div className="flex w-fit items-center break-words rounded-2xl bg-white px-4 py-1 font-medium text-pink-500">
            คณะที่สนใจที่สุด / Faculties interested
          </div>
          <div className="mt-3 grid w-fit grid-cols-[16px_1fr] font-medium">
            <span className="col-span-1">1.</span>
            <span className="col-span-1">{props.faculties.firstThai}</span>
            <span className="col-start-2">{props.faculties.firstEng}</span>
            <span className="col-span-1">2.</span>
            <span className="col-span-1">{props.faculties.secondThai}</span>
            <span className="col-start-2">{props.faculties.secondEng}</span>
            <span className="col-span-1">3.</span>
            <span className="col-span-1">{props.faculties.thirdThai}</span>
            <span className="col-start-2">{props.faculties.thirdEng}</span>
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
            <QRCode userId={props.userId} />
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center text-center md:w-96">
        <div className="flex w-full flex-col gap-5">
          <button
            className={clsx(
              "flex w-full items-center justify-center gap-2 rounded-2xl border-4 border-white px-5 py-1 text-lg font-bold shadow-inner shadow-white md:px-7 md:py-3 md:text-2xl",
              !image && "hidden"
            )}
            onClick={handleDownload}
          >
            บันทึกภาพ / Save image
            <i className="text-2xlmd:text-3xl icon-[mdi--arrow-down-circle]"></i>
          </button>
          <p className="text-xs font-medium md:text-base">
            *ID Card นี้จะต้องแสดงให้กับ Staff ของงาน
            <br />
            ก่อนเข้าร่วมกิจกรรมของทุกคณะ
          </p>
        </div>
      </div>
      <a
        href="/"
        className="flex items-center justify-center gap-1 px-4 py-2 text-center text-sm font-medium md:text-base"
      >
        <i className="icon-[mdi--arrow-left-circle] text-xl md:text-2xl"></i>
        กลับหน้าแรก / Back to home page
      </a>
    </>
  );
};

export default IDCard;
