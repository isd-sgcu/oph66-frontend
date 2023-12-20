const Day = () => {
  const newStartDate = new Date();
  const newEndDate = new Date(2024, 0, 20);
  const one_day = 1000 * 60 * 60 * 24;
  const result = Math.ceil(
    (newEndDate.getTime() - newStartDate.getTime()) / one_day
  );
  return (
    <div className="mt-14">
      <img src="/Union.svg" />
      <div className="absolute -translate-y-72 translate-x-[5.3rem] rotate-2 font-libre text-4xl font-normal">
        <h1 className="mb-20 -translate-x-8 rotate-3 text-[10rem]">{result}</h1>
        <h1>DAYS</h1>
        <h1 className="underline underline-offset-8">LEFT</h1>
      </div>
    </div>
  );
};
export default Day;
