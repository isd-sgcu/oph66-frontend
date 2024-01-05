import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

import union from "@/assets/union.svg";

interface CounterProps {
  from: number;
  to: number;
}

const Counter: React.FC<CounterProps> = ({ from, to }) => {
  const nodeRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration: 2,
      ease: "easeInOut",
      type: "spring",
      stiffness: 40,
      damping: 20,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return (
    <h1
      ref={nodeRef}
      className="mb-6 -translate-y-4 rotate-3 font-libre text-[6rem] md:mb-12 md:-translate-y-8 md:text-[10rem]"
    ></h1>
  );
};

const Day = () => {
  const newStartDate = new Date();
  const newEndDate = new Date(2024, 0, 20);
  const one_day = 1000 * 60 * 60 * 24;
  const result = Math.ceil(
    (newEndDate.getTime() - newStartDate.getTime()) / one_day
  );

  return (
    <div className="w-44 text-center md:w-auto">
      <img src={union.src} alt="" />
      <div className="absolute -translate-x-4 -translate-y-40 rotate-2 font-libre text-2xl font-normal md:-translate-y-64 md:translate-x-12 md:text-4xl">
        <div className="flex w-44 justify-center">
          <Counter from={99} to={result} />
        </div>

        <h1>DAYS</h1>
        <h1 className="underline underline-offset-8">LEFT</h1>
      </div>
    </div>
  );
};
export default Day;
