import Link from "next/link";
import React from "react";

interface ChipInt {
  title: string;
  href: string;
  classNames?: string;
}

function Chip({ title, href, classNames }: ChipInt) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-full border text-sm hover:text-gray-800 hover:backdrop-blur-lg hover:bg-white/70 ${classNames}`}
    >
      {title}
    </Link>
  );
}

export default Chip;
