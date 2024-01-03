interface Props {
  placeHolder: string;
  name: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isSelectable: boolean;
}
const TextBox = ({ name, placeHolder, setValue, isSelectable }: Props) => {
  const handleOnChange = (events) => {
    setValue(events.target.value);
  };
  return (
    <input
      name={name}
      type="text"
      disabled={!isSelectable}
      placeholder={placeHolder}
      onChange={handleOnChange}
      className="h-full w-full rounded-2xl border-none bg-white p-3 text-xs text-black placeholder-pink-400"
    />
  );
};

export default TextBox;
