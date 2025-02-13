export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-950">
      <div className="flex flex-col items-center justify-between px-6 py-8 mx-auto h-screen">
        <div className="w-full bg-slate-900 rounded-lg shadow mt-0 max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
}
