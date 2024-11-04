import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Navbar() {
  const menu = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    { id: 2, name: "Explore", link: "/" },
    {
      id: 3,
      name: "Contact Us",
      link: "/",
    },
  ];
  return (
    <div className="p-4 flex items-center justify-between shadow-sm">
      <div className="p-4 flex items-center gap-10">
        <Image
          className="hover:transition-all ease-in-out hover:scale-105"
          src="/Click-To-Events.svg"
          alt="Logo"
          width={90}
          height={90}
        />
        <ul className="md:flex gap-8 hidden ">
          {menu.map((item, index) => (
            <Link href={item.link}>
              <li
                className="hover:text-primary cursor-pointer
                 hover:scale-110 transition-all ease-in-out"
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Button className="hover:transition-all ease-in-out hover:scale-105">
        Get Started
      </Button>
    </div>
  );
}

export default Navbar;
