import { useEffect, useState } from "react";

interface Data {
  key: string;
  enabled: boolean;
  extra_info: {
    url: string;
  };
}

const Live = () => {
  function isMobile() {
    const regex =
      /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }

  const [live, setLive] = useState<Data>();

  useEffect(() => {
    const getLive = async () => {
      const res = await fetch(import.meta.env.PUBLIC_API_BASE_URL + "/live");
      const data: Data = await res.json();
      data.extra_info.url = data.extra_info.url.replace(
        "style=",
        "style='display:block;width:100%;aspect-ratio:16/9;"
      );

      return data;
    };

    getLive().then((data) => {
      setLive(data);
    });
  }, []);

  if (!live || !live.enabled) return null;
  return (
    <section className="relative mb-10 flex w-full max-w-5xl flex-col items-center justify-center gap-2">
      <div className="flex h-12 w-full items-center justify-center rounded-2xl border-2 px-5 py-2 font-bold">
        <div className="flex h-fit w-fit justify-center rounded-full border-2 border-white bg-pink-600 px-4 py-1">
          <p className="text-lg">Live {isMobile() && " Now"}</p>
        </div>
      </div>
      {isMobile() ? (
        <a
          href="https://www.facebook.com/cuopenhouse2021"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center rounded-2xl border-2 border-white bg-gradient-to-tr from-pink-550 to-violet-950/10 px-4 py-2 text-center text-lg font-bold shadow-inner shadow-white"
        >
          Join us on our Facebook page!{" "}
          <i className="icon-[mdi--arrow-right] text-2xl"></i>
        </a>
      ) : (
        <div
          className="relative mx-auto w-full overflow-hidden rounded-2xl border-2 border-white"
          dangerouslySetInnerHTML={{
            __html: live.extra_info.url,
          }}
        ></div>
      )}
    </section>
  );
};

export default Live;
