import type { UserShowedData } from "@/types/staff";
const User = (props: UserShowedData) => {
  return (
    <div className="mt-12 h-52 w-80 rounded-2xl border-2 border-white bg-indigo-900 font-medium text-white shadow-inner shadow-white backdrop-blur-2xl">
      <section className="mb-1 flex w-full flex-col p-4">
        <div className="mb-6 w-fit rounded-lg bg-white px-2 py-1 text-xs font-bold text-indigo-950">
          เช็คอินเสร็จสิ้น / Checked-in successfully
        </div>
        <div className="px-3 text-2xl font-bold">
          ID: {props.id} <br /> {props.first_name} {props.last_name}
        </div>
      </section>
      <section className="flex h-14 w-full flex-col rounded-b-2xl bg-pink-550 px-4 py-1 text-sm leading-4">
        Chula Open House <br /> 2024
        <p className="text-xs">20-21 January 2024</p>
      </section>
    </div>
  );
};

export default User;
