import Link from "next/link";
import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

interface Btn01Int {
  title: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

function Btn01({ href, onClick, title, className }: Btn01Int) {
  if (!href) return <button onClick={onClick}>{title}</button>;

  return (
    <Link
      href={href}
      className={`font-semibold border rounded-full px-6 py-4 flex items-center gap-4 hover:bg-white/70 hover:text-gray-900 ${className}`}
    >
      {title}
      <IoArrowForwardOutline size={20} className="hover:text-gray-900" />
    </Link>
  );
}

export default Btn01;
