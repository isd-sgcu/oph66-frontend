const SignInButton = () => {
  const handleClick = () => {
    window.location.href = `${import.meta.env.PUBLIC_API_BASE_URL}/auth/login`;
  };

  return (
    <button
      className="flex w-auto items-center justify-center gap-2 rounded-2xl border-2 px-5 py-3 text-center shadow-inner shadow-white sm:w-80 sm:py-2"
      onClick={handleClick}
    >
      <div className="flex items-center justify-center rounded-full bg-white p-1 text-center">
        <i className="icon-[logos--google-icon] text-xl"></i>
      </div>

      <p className="text-xl font-bold sm:text-2xl">Sign in with Google</p>
    </button>
  );
};

export default SignInButton;
