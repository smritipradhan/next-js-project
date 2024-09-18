import React from "react";

const Listing = () => {
  console.log("Listing is Client Compoent");

  return (
    <div>
      <p className="flex gap-5 text-blue-400 bg-black p-3 font-semibold">
        Listing
      </p>

      <p className="p-3">Server Component</p>
    </div>
  );
};

export default Listing;
