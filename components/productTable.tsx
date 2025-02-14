import { getProducts } from "@/lib/data";
import { FormatDate } from "@/lib/utils";

export default async function ProductTable() {
  const products = await getProducts();
  if (!products?.length) return <h1 className="text-2xl">No Product Found!</h1>;
  return (
    <table className="w-full bg-slate-800 mt-3 rounded-lg">
      <thead className="border-b border-slate-600 text-slate-200">
        <tr>
          <th className="py-3 px-6 text-left text-sm">Product Name</th>
          <th className="py-3 px-6 text-left text-sm">Price</th>
          <th className="py-3 px-6 text-left text-sm">Created At</th>
          <th className="py-3 px-6 text-left text-sm">Created By</th>
        </tr>
      </thead>
      <tbody className="text-slate-400">
        {products.map((product, index) => (
          <tr
            key={product.id}
            className={index % 2 == 0 ? "" : "bg-slate-700/30"}
          >
            <td className="py-3 px-6">{product.name}</td>
            <td className="py-3 px-6">{product.price}</td>
            <td className="py-3 px-6">
              {FormatDate(product.createdAt.toString())}
            </td>
            <td className="py-3 px-6">{product.user.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
