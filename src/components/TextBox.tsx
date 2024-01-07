import type React from "react";

interface Props {
  placeHolder?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  isSelectable?: boolean;
}
const TextBox = ({ placeHolder, setValue, isSelectable = true }: Props) => {
  return (
    <input
      type="text"
      disabled={!isSelectable}
      placeholder={placeHolder}
      onChange={(e) => setValue(e.target.value)}
      className="h-full w-full rounded-2xl border-none bg-white p-3 text-xs font-medium text-pink-550 placeholder:text-pink-400"
    />
  );
};

export default TextBox;
