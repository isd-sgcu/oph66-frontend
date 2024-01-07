import { useEffect, useState } from "react";

interface Data {
  key: string;
  enabled: boolean;
  extra_info: {
    url: string;
  };
}

const Live = () => {
  const [live, setLive] = useState<Data>();

  useEffect(() => {
    const getLive = async () => {
      const res = await fetch(import.meta.env.PUBLIC_API_BASE_URL + "/live");
      const data: Data = await res.json();
      data.extra_info.url = data.extra_info.url
        .replace("style=", 'style="display:block;width:100%;aspect-ratio:16/9;')
        .replace('height="', "")
        .replace('width="', "");

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
        <div className="mr-2 flex h-8 w-16 justify-center rounded-full border-2 border-white bg-pink-600">
          <p className="text-lg">Live</p>
        </div>
        <p>ชื่อรายการ</p>
      </div>
      <div
        className="relative mx-auto w-full overflow-hidden rounded-2xl border-2 border-white"
        dangerouslySetInnerHTML={{
          __html: live.extra_info.url,
        }}
      ></div>
    </section>
  );
};

export default Live;
