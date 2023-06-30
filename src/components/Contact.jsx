import { Inter, Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";
import send from "../../public/icons/send.png";
import icon1 from "../../public/icons/Facebook.png";
import icon2 from "../../public/icons/Gmail Logo.png";
import icon3 from "../../public/icons/Instagram.png";
import icon4 from "../../public/icons/Phone.png";
import arrow from "../../public/arrows/arrow5.png";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const Contact = () => {
  return (
    <div id="contact" className="relative">
      <div className="container mx-auto px-4 pb-60 relative">
        <Image
          className="absolute z-[-1] right-0 select-none pointer-events-none -translate-y-16 translate-x-24 opacity-50"
          src={arrow}
        />
        <h1 className={`${playfair.className} text-[48px]`}>
          Let's Get In Touch!
        </h1>
        <p className={`${inter.className} text-[20px] mt-3 font-light`}>
          We can make amazing things happen together.
        </p>
        <div
          className={`${inter.className} text-[20px] mt-9 flex xl:flex-row flex-col-reverse`}
        >
          <div className="bg-[#EEEEEE] p-6 xl:mt-0 mt-6 max-w-5xl flex w-full flex-col items-start gap-4">
            <input
              className="p-4 bg-white border-4 border-[#E8E8E8] focus:border-[#d8d8d8] duration-300 max-w-xs w-full ring-0 outline-0"
              placeholder="Name"
            ></input>
            <input
              type="email"
              className="p-4 bg-white border-4 border-[#E8E8E8] focus:border-[#d8d8d8] duration-300 max-w-lg w-full ring-0 outline-0"
              placeholder="Email"
            ></input>
            <textarea
              rows={10}
              className="p-4 bg-white border-4 border-[#E8E8E8] focus:border-[#d8d8d8] duration-300 transition-colors flex w-full ring-0 outline-0"
              placeholder="Message"
            ></textarea>
            <button
              type="submit"
              className="p-4 bg-[#a2a0ff] flex items-center gap-2 hover:rotate-3 duration-300 hover:bg-[#a2a0ff]/80"
            >
              Send <Image src={send} className="h-6 w-6" />
            </button>
          </div>
          <div className="xl:pl-8 flex flex-col gap-4">
            <a className="flex items-center gap-2">
              <Image src={icon1} />
              <p>@WoxelsWeb</p>
            </a>
            <a className="flex items-center gap-2">
              <Image src={icon3} />
              <p>@WoxelsWebsites</p>
            </a>
            <a className="flex items-center gap-2">
              <Image src={icon2} />
              <p>woxelswebsites@gmail.com</p>
            </a>
            <a className="flex items-center gap-2">
              <Image src={icon4} />
              <p>(209) 637-9231</p>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 w-full bottom-0 bg-[#a2a0ff] z-[-5] border-t-4 border-b-4 border-white/50"></div>
    </div>
  );
};

export default Contact;
