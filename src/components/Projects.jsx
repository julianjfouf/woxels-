import sidearrow1 from "../../public/sidearrows/sidearrow1.png";
import sidearrow2 from "../../public/sidearrows/sidearrow2.png";
import picture1 from "../../public/project1/Hero Section.png";
import picture2 from "../../public/project1/Contact Section.png";
import picture3 from "../../public/project1/Gallery Section.png";
import { Inter, Playfair_Display } from "next/font/google";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const Projects = () => {
  const [progress, setProgress] = useState(0);
  let { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
  });
  return (
    <div id="projects" className="relative mt-[-10%]">
      <div className="container mx-auto flex justify-between px-4">
        <div className="w-[500px] h-[500px] z-[-1] bottom-0 left-0 -translate-x-1/2 absolute rounded-full bg-[#D9D9D9]/10"></div>
        <div className="w-full absolute bottom-[250px] h-[4px] bg-[#a2a0ff]/10 left-[250px]"></div>
        <div className="flex flex-col items-end mt-20 relative">
          <div className="w-[500px] h-[500px] z-[-1] top-0 left-0 -translate-y-1/2 absolute rounded-full bg-[#D9D9D9]/10"></div>
          <h1 className={`text-[48px] ${playfair.className} text-right`}>
            Previous{" "}
            <span className="before:bg-[#a2a0ff]/50 before:h-2 before:absolute relative before:w-full before:bottom-[8px] before:z-[-1]">
              Work
            </span>
          </h1>
          <motion.div
            style={{
              transform: `translateX(${progress * 100 - 50}%)`,
            }}
            className="mt-3 flex flex-row-reverse w-full relative"
          >
            <Image
              src={sidearrow1}
              className="absolute right-0 translate-x-[125%] top-[25%] translate-y-[-50%]"
            />
            <Image
              src={picture1}
              className="h-1/2 object-contain aspect-auto z-10 pl-2"
            />
            <Image
              src={picture2}
              className="h-1/2 object-contain aspect-auto z-10 px-1"
            />
            <Image
              src={picture3}
              className="h-1/2 object-contain aspect-auto z-10 pr-2"
            />
            <div
              style={{ transform: `translateX(-${progress * 100}%)` }}
              className={`absolute flex justify-around w-full bottom-0 left-[50%] -translate-x-1/2 h-full`}
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
          </motion.div>
          <motion.div
            style={{
              transform: `translateX(-${progress * 100}%)`,
            }}
            className={`mt-3 flex flex-row w-full relative`}
          >
            <Image
              src={sidearrow2}
              className="absolute left-0 -translate-x-[125%] top-[25%] translate-y-[-50%]"
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
  );
};

export default Projects;
