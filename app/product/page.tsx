import ProductTable from "@/components/productTable";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
};

export default function Product() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="max-w-screen-md mx-auto py-10">
        <h1 className="text-2xl font-bold">User List</h1>
        <ProductTable />
      </div>
    </div>
  );
}
