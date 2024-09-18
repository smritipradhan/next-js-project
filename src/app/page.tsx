import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul className="flex gap-5 text-blue-400 bg-black p-3 font-semibold">
        <li>
          <Link href={"/product"}>Product</Link>
        </li>
        <li>
          <Link href={"/listing"}>Listing</Link>
        </li>
      </ul>
      <div className="p-2">Home</div>
    </div>
  );
}
