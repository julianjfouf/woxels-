import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Navbar from "./Navbar";
import Button from "./subcomponents/Button";
import Image from "next/image";
import picture from "../../public/picture.png";
import picture1 from "../../public/project1/Hero Section.png";
import picture2 from "../../public/project1/Contact Section.png";
import picture3 from "../../public/project1/Gallery Section.png";
import arrow1 from "../../public/arrows/arrow1.png";
import arrow2 from "../../public/arrows/arrow2.png";
import arrow3 from "../../public/arrows/arrow3.png";
import arrow4 from "../../public/arrows/arrow4.png";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const Hero = () => {
  const [progress, setProgress] = useState(0);
  let { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
  });
  return (
    <div id="home">
      <Navbar />
      <div className="w-[500px] h-[500px] z-[-1] top-0 left-0 -translate-x-1/2 absolute rounded-full bg-[#D9D9D9]/10"></div>
      <div className="flex container mx-auto px-4">
        <div className="py-20 flex flex-col items-start">
          <motion.div
            style={{
              transform: `translateY(-${progress * 100}%)`,
            }}
            className="flex flex-col items-start z-10"
          >
            <h1
              className={`text-[64px] font-semibold ${playfair.className} max-w-lg z-10`}
            >
              Designs you can{" "}
              <span className="relative inline-block before:h-full before:z-[-1] before:opacity-[0.25] before:rotate-3 before:w-full before:absolute before:left-0 before:top-0 before:bg-[#a2a0ff]">
                fully
              </span>{" "}
              enjoy
            </h1>
            <p
              className={`${inter.className} mt-3 text-[20px] font-light mb-9 max-w-lg`}
            >
              Whether you need a completely new website or just a simple
              redesign, we have you covered.
            </p>
            <Button text="Get Started" />
          </motion.div>
          <motion.div
            style={{
              transform: `translateY(-${progress * 100}%)`,
            }}
            className="xl:absolute mt-16 xl:right-0 xl:top-12 max-h-[50vh] xl:h-full"
          >
            <div className="w-[500px] h-[500px] z-[-1] top-[100px] left-0 -translate-x-1/2 absolute rounded-full bg-[#D9D9D9]/10"></div>
            <div className="absolute top-0 right-0 h-[100px] w-[100px] bg-white md:visible invisible"></div>
            <div className="absolute top-0 left-0 h-[100px] w-[100px] bg-white md:visible invisible"></div>
            <div className="absolute top-0 left-0 translate-x-[200px] h-[100px] w-[100px] bg-white md:visible invisible"></div>
            <div className="absolute top-0 left-0 translate-y-[200px] h-[100px] w-[100px] bg-white md:visible invisible"></div>
            <div className="absolute top-0 left-0 translate-x-[100px] translate-y-[100px] h-[100px] w-[100px] bg-white md:visible invisible"></div>
            <div className="absolute top-0 right-0 -translate-x-[100px] translate-y-[100px] h-[100px] w-[100px] bg-white md:visible invisible"></div>
            <Image
              src={picture}
              quality={100}
              className="z-[-1] aspect-auto w-full"
            />
          </motion.div>
          <div className="mt-48 flex flex-col">
            <h1 className={`text-[48px] ${playfair.className} max-w-lg`}>
              Latest{" "}
              <span className="before:bg-[#a2a0ff]/50 before:h-2 before:absolute relative before:w-full before:bottom-[8px] before:z-[-1]">
                Work
              </span>
            </h1>
            <motion.div
              style={{
                transform: `translateX(-${progress * 100}%)`,
              }}
              className="mt-3 w-full flex items-start relative z-20"
            >
              <div
                style={{ transform: `translateX(${progress * 100}%)` }}
                className={`absolute flex justify-around w-full bottom-0 left-0 h-full`}
              >
                <div className="h-full w-0.5 bg-[#a2a0ff]/10"></div>
                <div className="h-full w-0.5 bg-[#a2a0ff]/10"></div>
                <div className="h-full w-0.5 bg-[#a2a0ff]/10"></div>
                <div className="h-full w-0.5 bg-[#a2a0ff]/10"></div>
                <div className="h-full w-0.5 bg-[#a2a0ff]/10"></div>
                <div className="h-full w-0.5 bg-[#a2a0ff]/10"></div>
                <div className="h-full w-0.5 bg-[#a2a0ff]/10"></div>
                <div className="h-full w-0.5 bg-[#a2a0ff]/10"></div>
                <div className="h-full w-0.5 bg-[#a2a0ff]/10"></div>
                <div className="h-full w-0.5 bg-[#a2a0ff]/10"></div>
                <div className="h-full w-0.5 bg-[#a2a0ff]/10"></div>
              </div>
              <Image
                src={arrow1}
                className="absolute left-0 translate-x-[-125%] opacity-50 lg:visible invisible"
              />
              <Image
                src={arrow2}
                className="absolute left-[25%] top-0 translate-y-[-110%] opacity-50 lg:visible invisible"
              />
              <Image
                src={arrow3}
                className="absolute right-[0%] bottom-0 translate-y-[-420px] opacity-50 lg:visible invisible"
              />
              <Image
                src={arrow4}
                className="absolute right-0 bottom-0 translate-x-[500%] translate-y-[-270px] z-20 opacity-50 lg:visible invisible"
              />
              <Image
                src={picture1}
                className="h-1/2 object-contain aspect-auto z-10 pr-2"
              />
              <Image
                src={picture2}
                className="h-1/2 object-contain aspect-auto z-10 px-1"
              />
              <Image
                src={picture3}
                className="h-1/2 object-contain aspect-auto z-10 pl-2"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
