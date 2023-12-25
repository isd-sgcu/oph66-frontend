const Day = () => {
  const newStartDate = new Date();
  const newEndDate = new Date(2024, 0, 20);
  const one_day = 1000 * 60 * 60 * 24;
  const result = Math.ceil(
    (newEndDate.getTime() - newStartDate.getTime()) / one_day
  );
  return (
    <div className="mt-10 h-28 w-44 md:mt-14 md:h-auto md:w-auto">
      <img src="/Union.svg" />
      <div className="absolute -translate-y-40 translate-x-10 rotate-2 font-libre text-2xl font-normal md:-translate-y-64 md:translate-x-[5.3rem] md:text-4xl">
        {result != 0 ? (
          <div>
            <div className="flex w-44 -translate-x-12 justify-center md:-translate-x-8">
              <h1 className="mb-6 rotate-3 font-ibm text-[6rem] md:mb-12 md:text-[10rem]">
                {result}
              </h1>
            </div>

            <h1>DAYS</h1>
            <h1 className="underline underline-offset-8">LEFT</h1>
          </div>
        ) : (
          <div>
            <p className="-translate-x-5 text-6xl md:-translate-x-10 md:text-8xl">
              วันนี้
            </p>
            <h1 className="mb-2 -translate-x-2 underline underline-offset-8 md:mb-6">
              TODAY
            </h1>
            <h1 className="-translate-x-6 text-lg md:text-2xl">
              Come Visit Us!
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};
export default Day;
