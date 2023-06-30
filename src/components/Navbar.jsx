import React from "react";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="container mx-auto z-10 flex justify-between items-baseline py-6 px-4 w-full">
      <h1 className={`${playfair.className} text-4xl z-10`}>Woxels</h1>
      <div className={`${inter.className} flex gap-4 text-[16px] md:text-[20px] font-light`}>
        <a href="#home" className="relative before:absolute before:h-[1px] before:left-0 before:bg-black before:bottom-0 before:w-1/2 before:scale-x-0 hover:before:scale-x-100 cursor-pointer before:duration-300 before:transition-transform before:origin-right hover:before:origin-left">
          Home
        </a>
        <a href="#projects" className="relative before:absolute before:h-[1px] before:left-0 before:bg-black before:bottom-0 before:w-1/2 before:scale-x-0 hover:before:scale-x-100 cursor-pointer before:duration-300 before:transition-transform before:origin-right hover:before:origin-left">
          Projects
        </a>
        <a href="#contacts" className="relative before:absolute before:h-[1px] before:left-0 before:bg-black before:bottom-0 before:w-1/2 before:scale-x-0 hover:before:scale-x-100 cursor-pointer before:duration-300 before:transition-transform before:origin-right hover:before:origin-left">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
