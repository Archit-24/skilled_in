"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The platform bridges generational gaps by enabling the transfer of traditional skills, such as weaving and storytelling, ensuring these crafts and practices remain relevant for future generations.",
    name: "Potential Impact 1",
    title: "Preservation of Cultural Heritage",
  },
  {
    quote:
      "By fostering skill-sharing, the platform strengthens social bonds and provides individuals with opportunities to learn and teach, promoting a sense of belonging and collaboration within communities.",
    name: "Potential Impact 2",
    title: "Community Empowerment",
  },
  {
    quote: "Encouraging continuous education, the platform makes learning accessible to all age groups and skill levels, enabling users to adapt to modern demands or rediscover traditional skills.",
    name: "Potential Impact 3",
    title: "Promotion of Lifelong Learning",
  },
  {
    quote:
      "Facilitates meaningful interactions between younger and older generations, allowing them to exchange modern and traditional knowledge, thereby fostering mutual respect and understanding.",
    name: "Potential Impact 4",
    title: "Enhanced Intergenerational Collaboration",
  },
  {
    quote:
      "By empowering individuals with new skills, the platform opens doors for personal growth, career enhancement, and even new income sources, benefiting both learners and instructors.",
    name: "Potential Impact 5",
    title: "Economic Opportunities",
  },
];
