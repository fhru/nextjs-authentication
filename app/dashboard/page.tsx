import { auth } from "@/auth";

export default async function Dashboard() {
  const session = await auth();

  return (
    <div className="max-w-screen-xl mx-auto py-6 p-4">
      <h1 className="text-2xl font-bold tracking-tighter">Dashboard Page</h1>
      <h1 className="text-2xl font-normal tracking-tighter">
        Welcome Back <span className="font-bold">{session?.user?.name}</span>
      </h1>
    </div>
  );
}
