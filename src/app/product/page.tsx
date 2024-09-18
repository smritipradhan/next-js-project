"use client";

export default function Product() {
  console.log("Product is Client Compoent");
  return (
    <div>
      <p className="flex gap-5 text-blue-400 bg-black p-3 font-semibold">
        Product
      </p>
      <p className="p-3">Client Component</p>
    </div>
  );
}
