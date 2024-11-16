"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/tooltip";
const people = [
  {
    id: 1,
    name: "Archit Aggarwal",
    designation: "Member 1",
    image:
      "/TeamMembers/Archit.png",
  },
  {
    id: 2,
    name: "Abhinav Kumar",
    designation: "Member 2",
    image:
      "/TeamMembers/Abhinav.png",
  },
  {
    id: 3,
    name: "Tulsi Singhal",
    designation: "Member 3",
    image:
      "/TeamMembers/Tulsi.png",
  },
  {
    id: 4,
    name: "Abhay Kumar",
    designation: "Member 4",
    image:
      "/TeamMembers/Abhay.png",
  },
];

export function AnimatedTooltipPreview() {
  return (
    
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
