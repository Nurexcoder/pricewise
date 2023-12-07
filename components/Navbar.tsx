import Image from "next/image";
import Link from "next/link";
import React from "react";

import { NavIcons } from "@/utils/constantdata";

const Navbar = () => {
  return (
    <header className="w-full ">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src={"/assets/icons/logo.svg"}
            alt="logo"
            width={27}
            height={27}
          />
          <p className="nav-logo">
            Shop<span className="text-primary">Wise</span>
          </p>
        </Link>
        <div className="flex items-center gap-5">
          {NavIcons.map((icon) => (
            <Image key={icon.alt} src={icon.src} alt={icon.alt} width={28} height={28} className="object-contain hover:scale-105 transition-all" />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
