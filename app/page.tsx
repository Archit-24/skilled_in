import { AnimatedTestimonialsDemo } from "@/components/Animated-testimonials";
import { BackgroundLinesDemo } from "@/components/Background-lines";
import { TypewriterEffectSmoothDemo } from "@/components/HeroSection";
import { NavbarDemo } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <NavbarDemo />
    <TypewriterEffectSmoothDemo />
    <AnimatedTestimonialsDemo />
    <BackgroundLinesDemo />
    </>
  );
}
