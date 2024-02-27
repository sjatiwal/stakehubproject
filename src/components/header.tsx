import React from "react";
import Link from "next/link";
const header = () => {
  return (
    <div className="flex bg-green-500 text-white justify-between px-4 py-5 font-semibold">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div className="flex w-[40%] justify-between">
        <div>
          <Link href="/dialogues">Dialogues</Link>
        </div>
        <div>
          <Link href="/proverbs">Proverbs</Link>
        </div>
        <div>
          <Link href="/quotes">Quotes</Link>
        </div>
      </div>
    </div>
  );
};

export default header;
