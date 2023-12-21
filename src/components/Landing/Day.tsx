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
        {result != 0 ? (
          <div>
            <div className="flex w-44 -translate-x-8 justify-center">
              <h1 className="mb-20 rotate-3 font-ibm text-[10rem]">{result}</h1>
            </div>

            <h1>DAYS</h1>
            <h1 className="underline underline-offset-8">LEFT</h1>
          </div>
        ) : (
          <div>
            <p className="-translate-x-10 text-8xl">วันนี้</p>
            <h1 className="mb-6 -translate-x-2 underline underline-offset-8">
              TODAY
            </h1>
            <h1 className="-translate-x-6 text-2xl">Come Visit Us!</h1>
          </div>
        )}
      </div>
    </div>
  );
};
export default Day;
