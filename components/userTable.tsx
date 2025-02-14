import { getUsers } from "@/lib/data";

export default async function UserTable() {
  const users = await getUsers();
  if (!users?.length) return <h1 className="text-2xl">No User Found!</h1>;
  return (
    <table className="w-full bg-slate-800 mt-3 rounded-lg">
      <thead className="border-b border-slate-600 text-slate-200">
        <tr>
          <th className="py-3 px-6 text-left text-sm">Name</th>
          <th className="py-3 px-6 text-left text-sm">Email</th>
          <th className="py-3 px-6 text-left text-sm">Role</th>
        </tr>
      </thead>
      <tbody className="text-slate-400">
        {users.map((user, index) => (
          <tr key={user.id} className={index % 2 == 0 ? "" : "bg-slate-700/30"}>
            <td className="py-3 px-6">{user.name}</td>
            <td className="py-3 px-6">{user.email}</td>
            <td className="py-3 px-6">{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
