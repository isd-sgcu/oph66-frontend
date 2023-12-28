import clsx from "clsx";
import { useEffect, useState } from "react";

const NavBar = () => {
  const MOBILESIZE = 1024;
  const [isMenuVisible, setMenuVisible] = useState<boolean>(false);
  const handleMobileMenuButtonClick = () => {
    setMenuVisible(!isMenuVisible);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MOBILESIZE) {
        setMenuVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <nav className="sticky top-0 z-20 flex w-full flex-col items-center justify-between bg-pink-550 text-white backdrop-blur-sm">
      <div className="flew-row flex h-12 w-full items-center justify-between">
        <span className="px-8 font-libre text-2xl">Chula Open House 2024</span>
        <span className="hidden gap-8 px-8 text-sm lg:flex">
          <a href="/">Home</a>
          <a href="/">Navigator</a>
          <a href="/event">Event</a>
          <a href="/">Faculties</a>
          <a href="">FAQS</a>
          <a href="/idcard">Profile</a>
        </span>
        <button
          className={clsx(
            "flex h-full flex-col items-center justify-center gap-1 self-stretch rounded-tl-md px-4 lg:hidden ",
            isMenuVisible ? "bg-indigo-900" : "bg-pink-550"
          )}
          onClick={handleMobileMenuButtonClick}
        >
          <div className="h-0.5 w-5 bg-white"></div>
          <div className="h-0.5 w-5 bg-white"></div>
          <div className="h-0.5 w-5 bg-white"></div>
        </button>
      </div>
      {isMenuVisible && (
        <div className="flew-row flex h-full w-full items-center justify-between bg-indigo-900 px-3 py-3 lg:hidden">
          <a href="/">Home</a>
          <a href="/">Navigator</a>
          <a href="/event">Event</a>
          <a href="/">Faculties</a>
          <a href="">FAQS</a>
          <a href="/idcard">Profile</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
