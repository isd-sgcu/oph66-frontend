const TextBox = (props: {
  language: boolean;
  textThaiQ: string;
  textEngQ: string;
  textThaiA: string;
  textEngA: string;
}) => {
  return (
    <div className="mx-4 my-8 rounded-2xl border-2 border-white bg-transparent px-10 py-7 text-white shadow-inner shadow-white md:px-20">
      {props.language ? props.textThaiQ : props.textEngQ} <br />
      {props.language ? props.textThaiA : props.textEngA}
    </div>
  );
};
export default TextBox;
