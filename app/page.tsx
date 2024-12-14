"use client";

import { AnimatedTestimonialsDemo } from "@/components/Animated-testimonials";
import { BackgroundLinesDemo } from "@/components/Background-lines";
import { BackgroundBeamsWithCollisionDemo } from "@/components/BeamBackground";
import { TypewriterEffectSmoothDemo } from "@/components/HeroSection";
import { NavbarDemo } from "@/components/Navbar";
import Image from "next/image";
import {useUser} from '@clerk/nextjs'
import { redirect } from "next/navigation";

export default function Home() {
  const {user} = useUser();
  if (user){
    redirect('/dashboard')
  }
  return (
    <>
    <NavbarDemo />
    <TypewriterEffectSmoothDemo />
    <AnimatedTestimonialsDemo />
    <BackgroundLinesDemo />
    <BackgroundBeamsWithCollisionDemo />
    </>
  );
}
