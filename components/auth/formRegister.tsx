"use client";

import Link from "next/link";
import { signUpCredentials } from "@/lib/actions";
import { useFormState } from "react-dom";
import { RegisterButton } from "@/components/buttons";

export default function FormRegister() {
  const [state, formAction] = useFormState(signUpCredentials, null);

  return (
    <form action={formAction} className="space-y-6">
      {state?.message && (
        <div
          className="p-4 mb-4 text-sm text-red-600 rounded-lg bg-red-900/50"
          role="alert"
        >
          <span className="font-medium">{state?.message}</span>
        </div>
      )}
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-white"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          className="bg-slate-800 border border-slate-600 text-white rounded-lg w-full p-2.5 outline-none focus:ring-1 focus:ring-white/50"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">
            {state?.error?.name}
          </span>
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-white"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          className="bg-slate-800 border border-slate-600 text-white rounded-lg w-full p-2.5 outline-none focus:ring-1 focus:ring-white/50"
          placeholder="john.doe@mail.com"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">
            {state?.error?.email}
          </span>
        </div>
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-white"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          className="bg-slate-800 border border-slate-600 text-white rounded-lg w-full p-2.5 outline-none focus:ring-1 focus:ring-white/50"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">
            {state?.error?.password}
          </span>
        </div>
      </div>
      <div>
        <label
          htmlFor="confirmPassword"
          className="block mb-2 text-sm font-medium text-white"
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          className="bg-slate-800 border border-slate-600 text-white rounded-lg w-full p-2.5 outline-none focus:ring-1 focus:ring-white/50"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">
            {state?.error?.confirmPassword}
          </span>
        </div>
      </div>
      <RegisterButton />
      <p className="text-sm font-light text-gray-500">
        Already Have An Account?{" "}
        <Link href={"/login"}>
          <span className="font-medium pl-1 text-blue-600 hover:text-blue-700">
            Sign In
          </span>
        </Link>
      </p>
    </form>
  );
}
