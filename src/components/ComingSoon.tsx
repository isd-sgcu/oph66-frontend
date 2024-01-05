import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};

export function CursorBlinker() {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className="inline-block h-6 w-0.5 translate-y-1 bg-white md:h-8"
    />
  );
}

export default function ComingSoon() {
  const baseText = "Coming Soon...";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 1,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  return (
    <p className="flex h-fit items-baseline font-libre text-xl font-bold md:text-4xl">
      <motion.span>{displayText}</motion.span>
      <CursorBlinker />
    </p>
  );
}
