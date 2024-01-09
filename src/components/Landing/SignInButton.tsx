import { useRef } from "react";

const SignInButton = () => {
  const dialog = useRef<HTMLDialogElement>(null);

  const handleClick = () => {
    if (dialog.current) {
      dialog.current.showModal();
    }
  };

  return (
    <>
      <button
        className="flex w-auto items-center justify-center gap-2 rounded-2xl border-2 px-5 py-3 text-center shadow-inner shadow-white backdrop-blur-2xl sm:w-80 sm:py-2"
        onClick={handleClick}
      >
        <div className="flex items-center justify-center rounded-full bg-white p-1 text-center">
          <i className="icon-[logos--google-icon] text-xl"></i>
        </div>
        <p className="text-xl font-bold sm:text-2xl">Sign in with Google</p>
      </button>
      <dialog
        className="rounded-2xl border-2 border-white bg-transparent px-4 py-2 text-center text-white shadow-inner shadow-white backdrop-blur-2xl backdrop:bg-black/20"
        ref={dialog}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="px-4 text-center font-medium">
            หมายเหตุ: โปรดใช้อินเทอร์เน็ตเบราว์เซอร์เช่น Safari หรือ Chrome
            <br />
            หากเข้าถึงเว็บไซต์ผ่าน Line หรือ Instagram อาจเกิดปัญหาได้
            <br />
            <br />
            Note: Please use an internet browser, such as Safari or Chrome.
            <br />
            Accessing through Line or Instagram might cause some issues.
          </p>
          <br />
          <a
            href={`${import.meta.env.PUBLIC_API_BASE_URL}/auth/login`}
            className="flex w-auto items-center justify-center gap-2 rounded-2xl border-2 px-4 py-2 text-center font-bold shadow-inner shadow-white backdrop-blur-2xl sm:w-80"
          >
            ยืนยันการเข้าสู่ระบบ / Confirm Sign in
          </a>
        </div>
      </dialog>
    </>
  );
};

export default SignInButton;
