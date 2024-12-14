import React from "react";
import { BackgroundLines } from "./ui/bg-lines";

export function BackgroundLinesDemo() {
  return (
    <>
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Technologies Used
      </h2>
      <div className="flex items-center justify-center space-x-8">
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png" className="w-[85px] h-[85px]" />
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/typescript-programming-language-icon.png" className="w-[65px] h-[65px]" />
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png" className="w-[85px] h-[85px]" />
        </div>
      {/* <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        NextJS, TypeScript, TailwindCSS
      </p> */}
    </>
  );
}
