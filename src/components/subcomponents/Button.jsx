import React from "react";

const Button = ({ text }) => {
  return (
    <a
      href="#contact"
      className="p-6 text-[20px] hover:before:bg-[#a2a0ff]/80 duration-300 transition-all cursor-pointer before:h-full before:w-full relative before:absolute before:top-0 before:left-0 before:z-[-1] hover:rotate-3 before:transition-all before:duration-300 before:bg-[#a2a0ff]"
    >
      {text}
    </a>
  );
};

export default Button;
