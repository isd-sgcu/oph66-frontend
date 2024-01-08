import type React from "react";

import bg from "@/assets/background.svg";

interface Props {
  withJigsaw?: boolean;
}

const Background: React.FC<Props> = ({ withJigsaw = true }) => {
  return (
    // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
    <div className="absolute left-1/2 top-0 -z-50 h-full w-full -translate-x-1/2 overflow-clip bg-pink-400">
      <div className="absolute left-1/2 top-0 aspect-[1.8] w-full min-w-[720px] -translate-x-1/2 radial-gradient-hero"></div>
      {withJigsaw && (
        <div
          style={{
            background: `url(${bg.src}) repeat-y 0 0`,
            backgroundSize: "270vw",
          }}
          className="absolute left-0 top-96 h-full w-[270vw] -translate-x-1/3 -rotate-2"
        ></div>
      )}
    </div>
  );
};

export default Background;
