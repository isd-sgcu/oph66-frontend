interface Props {
  placeHolder?: string;
  setValue: (value: string) => void;
  isSelectable?: boolean;
}
const TextBox = ({ placeHolder, setValue, isSelectable = true }: Props) => {
  return (
    <input
      type="text"
      disabled={!isSelectable}
      placeholder={placeHolder}
      onChange={(e) => setValue(e.target.value)}
      className="h-full w-full rounded-2xl border-none bg-white p-3 text-xs text-pink-550 placeholder:text-pink-400"
    />
  );
};

export default TextBox;
