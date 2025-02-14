import FormLogin from "@/components/auth/formLogin";
import { GithubButton, GoogleButton } from "@/components/auth/socialButton";

export default function Login() {
  return (
    <div className="p-6 space-y-4">
      <div className="text-2xl font-bold text-white">
        Sign in to Your Account
      </div>
      <FormLogin />
      <div className="my-4 flex items-center before:flex-1 before:border-t before:border-slate-600 after:flex-1 after:border-t after:border-slate-600">
        <p className="mx-4 mb-0 text-center font-semibold text-gray-500 text-sm">
          Or
        </p>
      </div>
      <GoogleButton />
      <GithubButton />
    </div>
  );
}
