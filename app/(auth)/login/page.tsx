import FormLogin from "@/components/auth/formLogin";

export default function Login() {
  return (
    <div className="p-6 space-y-4">
      <div className="text-2xl font-bold text-white">
        Sign in to Your Account
      </div>
      <FormLogin />
    </div>
  );
}
