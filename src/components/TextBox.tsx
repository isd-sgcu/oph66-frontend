import type React from "react";

interface Props {
  placeHolder?: string;
  setValue:
    | React.Dispatch<React.SetStateAction<string>>
    | React.Dispatch<React.SetStateAction<string | undefined>>;
  value: string | undefined;
  isSelectable?: boolean;
}
const TextBox: React.FC<Props> = ({
  placeHolder,
  setValue,
  isSelectable = true,
}) => {
  return (
    <input
      type="text"
      disabled={!isSelectable}
      placeholder={placeHolder}
      onChange={(e) => setValue(e.target.value)}
      className="h-full w-full rounded-2xl border-none bg-white p-3 text-xs font-medium text-pink-550 placeholder:text-pink-400 md:text-sm"
    />
  );
};

export default TextBox;
