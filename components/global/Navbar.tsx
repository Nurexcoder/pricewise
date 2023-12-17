import Image from "next/image";
import Link from "next/link";
import React from "react";

import { NavIcons } from "@/utils/constantdata";
import NavUserComponent from "./NavUserComponent";

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
          <NavUserComponent />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
