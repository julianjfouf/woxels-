import { Inter, Playfair_Display } from "next/font/google";
import React from "react";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className="container relative mx-auto px-4 py-6 flex justify-between overflow-hidden">
      <div>
        <h1 className={`${playfair.className} text-4xl z-10`}>Woxels</h1>
        <p className={`${inter.className} font-light text-xs md:text-sm`}>
          &copy; 2023 Woxels | All Rights Rserved
        </p>
      </div>
      <div
        className={`text-[16px] md:text-[20px] font-light text-right ${inter.className} top-9 flex flex-col items-end gap-3`}
      >
        <a href="#home" className="relative before:absolute before:h-[1px] before:left-0 before:bg-black before:bottom-0 before:w-1/2 before:scale-x-0 hover:before:scale-x-100 cursor-pointer before:duration-300 before:transition-transform before:origin-right hover:before:origin-left">
          Home
        </a>
        <a href="#projects" className="relative before:absolute before:h-[1px] before:left-0 before:bg-black before:bottom-0 before:w-1/2 before:scale-x-0 hover:before:scale-x-100 cursor-pointer before:duration-300 before:transition-transform before:origin-right hover:before:origin-left">
          Projects
        </a>
        <a href="#contact" className="relative before:absolute before:h-[1px] before:left-0 before:bg-black before:bottom-0 before:w-1/2 before:scale-x-0 hover:before:scale-x-100 cursor-pointer before:duration-300 before:transition-transform before:origin-right hover:before:origin-left">
          Contact
        </a>
      </div>
      <div className="w-[500px] h-[500px] z-[-1] bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 absolute rounded-full bg-[#D9D9D9]/10"></div>
    </div>
  );
};

export default Footer;
