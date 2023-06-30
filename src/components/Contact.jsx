import { Inter, Playfair_Display } from "next/font/google";
import Image from "next/image";
import React, { useRef, useState } from "react";
import send from "../../public/icons/send.png";
import icon1 from "../../public/icons/Facebook.png";
import icon2 from "../../public/icons/Gmail Logo.png";
import icon3 from "../../public/icons/Instagram.png";
import icon4 from "../../public/icons/Phone.png";
import arrow from "../../public/arrows/arrow5.png";
import emailjs from "@emailjs/browser";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_sbuvwtw",
        "template_o0s55mb",
        {
          from_name: form.name,
          to_name: "Julian",
          from_email: form.email,
          to_email: "contact@jssmastery.pro",
          message: form.message,
        },
        "MzVEfNIk0BOBDWWG0"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for the message! I will get back to you soon.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);

          alert("Message did not send. Something went wrong.");
        }
      );
  };
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
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-[#EEEEEE] p-6 xl:mt-0 mt-6 max-w-5xl flex w-full flex-col items-start gap-4"
          >
            <input
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="p-4 bg-white border-4 border-[#E8E8E8] focus:border-[#d8d8d8] duration-300 max-w-xs w-full ring-0 outline-0"
              placeholder="Name"
            ></input>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="p-4 bg-white border-4 border-[#E8E8E8] focus:border-[#d8d8d8] duration-300 max-w-lg w-full ring-0 outline-0"
              placeholder="Email"
            ></input>
            <textarea
              required
              name="message"
              type="text"
              value={form.message}
              onChange={handleChange}
              rows={10}
              className="p-4 bg-white border-4 border-[#E8E8E8] focus:border-[#d8d8d8] duration-300 transition-colors flex w-full ring-0 outline-0"
              placeholder="Message"
            ></textarea>
            <button
              type="submit"
              className="p-4 bg-[#a2a0ff] flex items-center gap-2 hover:rotate-3 duration-300 hover:bg-[#a2a0ff]/80"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  Sending... <Image src={send} className="h-6 w-6" />
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Send <Image src={send} className="h-6 w-6" />
                </span>
              )}
            </button>
          </form>
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
