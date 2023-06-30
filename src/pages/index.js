import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import noise from "../../public/noise1.png";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Image
        src={noise}
        className="z-[-2] top-0 left-0 h-full w-full object-cover opacity-[0.1] absolute"
      />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
