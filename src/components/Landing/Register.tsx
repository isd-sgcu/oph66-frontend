import type React from "react";

interface Props {
  token?: string;
  fullName?: string;
}

const Register: React.FC<Props> = ({ token, fullName }) => {
  if (token)
    return (
      <div className="flex flex-col px-11 text-center font-bold md:text-left">
        <span className="font-libre">Welcome!</span>
        <span>{fullName}</span>
        <a
          href="/auth/logout"
          className="mt-5 flex w-full justify-center rounded-2xl border-2 bg-transparent bg-gradient-to-t from-pink-400/50 to-white/5 px-5 py-2 font-bold shadow-inner shadow-white backdrop-blur-2xl duration-200 hover:py-3"
        >
          ออกจากระบบ / Logout
        </a>
      </div>
    );
  else
    return (
      <a
        href="/register"
        className="flex w-64 justify-center rounded-2xl border-2 bg-transparent bg-gradient-to-t from-pink-400/50 to-white/5 px-5 py-2 font-bold shadow-inner shadow-white backdrop-blur-2xl duration-200 hover:py-3 md:ml-10"
      >
        ลงทะเบียน / Register
      </a>
    );
};
export default Register;
