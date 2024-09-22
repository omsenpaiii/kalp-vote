import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HyperText from "@/components/magicui/hyper-text";

import Meteors from "@/components/magicui/meteors";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      {/* <Meteors /> */}
      {/* <Navbar /> */}
      <Hero />
      <Footer />
    </div>
  );
}
