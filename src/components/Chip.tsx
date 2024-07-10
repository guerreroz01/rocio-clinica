import Link from "next/link";
import React from "react";

interface ChipInt {
  title: string;
  href: string;
}

function Chip({ title, href }: ChipInt) {
  return (
    <Link
      href={href}
      className="px-4 py-2 rounded-full border text-sm hover:text-gray-800 hover:backdrop-blur-lg hover:bg-white/70 "
    >
      {title}
    </Link>
  );
}

export default Chip;
