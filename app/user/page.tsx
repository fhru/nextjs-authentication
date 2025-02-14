import UserTable from "@/components/userTable";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
};

export default function UserPage() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="max-w-screen-md mx-auto py-10">
        <h1 className="text-2xl font-bold">User List</h1>
        <UserTable />
      </div>
    </div>
  );
}
