"use client";
import { NavIcons } from "@/utils/constantdata";
import Image from "next/image";
import { useState } from "react";
// import LoginModal from "../LoginModal";
import { signIn, useSession } from "next-auth/react";
import DropdownComponent from "./DropdownComponent";

const NavUserComponent = () => {
  //   const [isLogin, setIsLogin] = useState(false);
  const { status, data } = useSession();
  return (
    <>
      {status === "authenticated" ? (
        <>
          {NavIcons.map((icon, index) => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain hover:scale-105 transition-all"
            />
          ))}
          {/* <div> */}
            <DropdownComponent data={data}/>

          {/* </div> */}
        </>
      ) : (
        <>
          <Image
            key={NavIcons[0].alt}
            src={NavIcons[0].src}
            alt={NavIcons[0].alt}
            width={28}
            height={28}
            className="object-contain hover:scale-105 transition-all"
          />

          <button className="login-btn" onClick={() => signIn("google")}>
            Signup 
          </button>
        </>
      )}
    </>
  );
};

export default NavUserComponent;
