import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const links = ["Home", "Navigator", "Events", "Faculties", "FAQs", "Profile"];
const overlayVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const menuVariants = {
  initial: {
    opacity: 0,
    x: "50",
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const buttonLineVariants = [
  {
    initial: {
      rotate: 0,
      y: 0,
      width: "1.5rem",
    },
    animate: {
      rotate: 45,
      y: 7,
      width: "1.3rem",
    },
  },
  {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
    },
  },
  {
    initial: {
      rotate: 0,
      y: 0,
      width: "1.5rem",
    },
    animate: {
      rotate: -45,
      y: -5,
      width: "1.3rem",
    },
  },
];

const Nav = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-20 flex w-full items-center justify-center bg-pink-550 px-5 py-4 text-white">
      <div className="flex w-full max-w-5xl items-center justify-between">
        <span className="font-libre text-xl md:text-2xl">
          Chula Open House 2024
        </span>
        <div className="hidden gap-6 font-semibold md:flex">
          {links.map((link) => {
            const path = link === "Home" ? "/" : "/" + link.toLowerCase();
            const isCurrentPath = path === window.location.pathname;
            return (
              <a
                key={link}
                href={path}
                className={clsx(
                  "capitalize text-white underline-offset-2 hover:underline",
                  isCurrentPath && "underline"
                )}
              >
                {link}
              </a>
            );
          })}
        </div>
        <button
          className={clsx(
            "z-10 flex h-full flex-col gap-1",
            !isOpen && "md:hidden"
          )}
          onClick={handleClick}
        >
          {buttonLineVariants.map((variant, index) => (
            <motion.div
              key={index}
              variants={variant}
              className="h-0.5 w-6 rounded-full bg-white"
              animate={isOpen ? "animate" : "initial"}
            />
          ))}
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-pink-550"
              variants={overlayVariants}
              initial="initial"
              animate="animate"
              exit="initial"
              transition={{
                delayChildren: 0.2,
                staggerChildren: 0.1,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              <div className="flex flex-col gap-8 text-center text-xl font-semibold">
                {links.map((link) => {
                  const path = link === "Home" ? "/" : "/" + link.toLowerCase();
                  const isCurrentPath = path === window.location.pathname;
                  return (
                    <motion.a
                      key={link}
                      href={path}
                      variants={menuVariants}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      }}
                      className={clsx(
                        "capitalize text-white underline-offset-4 hover:underline",
                        isCurrentPath && "pointer-events-none underline"
                      )}
                    >
                      {link}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Nav;
