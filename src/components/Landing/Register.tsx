import { useState } from "react";

const Register = () => {
  //const { useAuth } = useAuth();
  const [user, setUser] = useState("");
  return user.length == 0 ? (
    <a
      href="/register"
      className="ml-10 flex w-64 justify-center rounded-2xl border-2 p-2 px-5 py-2 font-bold"
    >
      ลงทะเบียน / Register
    </a>
  ) : (
    <div className="ml-7 p-2 px-5 py-2 font-libre text-2xl font-bold">
      <p>Welcome!</p>
      <p>{user}</p>
    </div>
  );
};
export default Register;
