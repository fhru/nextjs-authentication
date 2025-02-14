import Link from "next/link";
import Image from "next/image";
import { auth, signOut } from "@/auth";

export default async function Navbar() {
  const session = await auth();
  return (
    <nav className="bg-slate-900 border-b border-slate-700">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link href={"/"}>
          <Image
            alt="logoipsum"
            src={"/logoipsum2.svg"}
            priority
            width={128}
            height={64}
          />
        </Link>
        <div className="flex items-center gap-3">
          <ul className="hidden md:flex items-center gap-4 mr-5 font-semibold text-gray-500">
            <li className="hover:text-gray-600 transition-all">
              <Link href={"/"}>HomePage</Link>
            </li>
            {session && (
              <>
                <li className="hover:text-gray-600 transition-all">
                  <Link href={"/product"}>Product</Link>
                </li>
                <li className="hover:text-gray-600 transition-all">
                  <Link href={"/dashboard"}>Dashboard</Link>
                </li>
                {session.user.role === "admin" ? (
                  <li className="hover:text-gray-600 transition-all">
                    <Link href={"/user"}>User</Link>
                  </li>
                ) : null}
              </>
            )}
          </ul>

          {session && (
            <div className="flex gap-3 items-center">
              <div className="flex flex-col justify-center -space-y-1">
                <span className="font-semibold text-gray-400 text-right capitalize">
                  {session.user.name}
                </span>
                <span className="text-sm font-medium text-gray-600 text-right capitalize">
                  {session.user.role}
                </span>
              </div>
              <button
                type="button"
                className="text-sm ring-2 bg-gray-200 rounded-full"
              >
                <Image
                  src={session.user.image || "https://i.pravatar.cc/128"}
                  alt="avatar"
                  width={128}
                  height={128}
                  className="w-8 h-8 rounded-full"
                />
              </button>
            </div>
          )}

          {session ? (
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/login" });
              }}
            >
              <button
                type="submit"
                className="bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-950"
              >
                Sign Out
              </button>
            </form>
          ) : (
            <Link
              href={"/login"}
              className="bg-blue-900 text-white px-4 py-2.5 rounded-md hover:bg-blue-950"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
