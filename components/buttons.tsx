"use client";

import { useFormStatus } from "react-dom";

export const RegisterButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full flex items-center justify-center text-white bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-center capitalize hover:bg-blue-800 disabled:bg-blue-400"
      disabled={pending}
    >
      {pending ? (
        <>
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
          Registering...
        </>
      ) : (
        "Register"
      )}
    </button>
  );
};

export const LoginButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full flex items-center justify-center text-white bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-center capitalize hover:bg-blue-800 disabled:bg-blue-400"
      disabled={pending}
    >
      {pending ? (
        <>
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
          Authenticating...
        </>
      ) : (
        "Sign In"
      )}
    </button>
  );
};
