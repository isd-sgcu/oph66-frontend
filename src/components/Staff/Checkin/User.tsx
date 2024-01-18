import type { UserShowedData } from "@/types/staff";
const User = ({
  id,
  first_name,
  last_name,
  allergies,
  medical_condition,
}: UserShowedData): JSX.Element => {
  return (
    <div className="mt-12 flex h-max min-h-52 w-72 flex-col justify-between gap-1 rounded-2xl border-2 border-white bg-indigo-900 font-medium text-white shadow-inner shadow-white backdrop-blur-2xl">
      <section className="flex w-full flex-col p-4">
        <div className="mb-4 w-fit rounded-lg bg-white px-2 py-1 text-xs font-bold text-indigo-950">
          เช็คอินเสร็จสิ้น / Checked-in successfully
        </div>
        <p className="px-3 font-bold">ID: {id} </p>
        <p className="px-3 text-2xl">
          {first_name} {last_name}
        </p>
        {allergies && <p className="mt-4 px-3 text-sm">แพ้: {allergies}</p>}
        {medical_condition && (
          <p className="px-3 text-sm">โรคประจำตัว: {medical_condition}</p>
        )}
      </section>
      <section className="flex h-14 w-full flex-col gap-1 rounded-b-2xl bg-pink-550 px-4 py-2 font-libre text-sm leading-4">
        Chula Open House 2024
        <p className="text-xs">20-21 January 2024</p>
      </section>
    </div>
  );
};

export default User;
