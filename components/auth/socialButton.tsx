import { IoLogoGoogle, IoLogoGithub } from "react-icons/io5";
import { signIn } from "@/auth";

export const GoogleButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/dashboard" });
      }}
    >
      <button
        type="submit"
        className="flex items-center justify-center gap-1 py-2.5 rounded-lg capitalize text-white font-medium bg-blue-700 hover:bg-blue-800 transition-all hover:text-white/50 w-full"
      >
        <IoLogoGoogle />
        Sign In With Google
      </button>
    </form>
  );
};

export const GithubButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/dashboard" });
      }}
    >
      <button
        type="submit"
        className="flex items-center justify-center gap-1 py-2.5 rounded-lg capitalize text-white font-medium bg-gray-700 hover:bg-gray-800 transition-all hover:text-white/50 w-full"
      >
        <IoLogoGithub />
        Sign In With Github
      </button>
    </form>
  );
};
