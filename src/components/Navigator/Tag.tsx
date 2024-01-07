import clsx from "clsx";
import React, { useState } from "react";

type Props = {
  tag: string;
  icon: string;
  iconDiv?: string;
  handleTagClick?: React.Dispatch<React.SetStateAction<string>>;
};

const Tag = ({
  tag,
  icon,
  iconDiv = "bg-black",
  handleTagClick = () => {},
}: Props) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleClick = () => {
    setIsSelected((prev) => !prev);
    handleTagClick(tag);
  };

  return (
    <button className="flex gap-2" onClick={handleClick}>
      <div
        className={clsx(
          iconDiv,
          "flex h-6 w-6 items-center justify-center rounded-full p-1"
        )}
      >
        <i className={clsx(icon, "text-white")}></i>
      </div>
      <div
        className={clsx(
          isSelected ? "bg-white  text-pink-600" : "bg-transparent text-white",
          "flex h-6 w-full min-w-max items-center justify-center rounded-2xl border border-white px-2 py-1 text-center text-xs font-semibold"
        )}
      >
        {tag}
      </div>
    </button>
  );
};

export default Tag;
