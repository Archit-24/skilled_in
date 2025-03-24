import React, { useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBodyScan,
  IconBook,
  IconBrandGithub,
  IconBrandX,
  IconContract,
  IconExchange,
  IconHeartBolt,
  IconHome,
  IconMessage,
  IconNewSection,
  IconPhoneDone,
  IconPlane,
  IconPlugConnected,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { div } from "framer-motion/client";
import { UserButton } from "@clerk/nextjs";

export function FloatingDockDemo() {
  const DotIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
      >
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
      </svg>
    );
  };
  const ProfileIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 9c-5.33 0-8 2.667-8 5.333V20h16v-1.667C20 15.667 17.33 13 12 13zm-6 5.333c0-.938 2.272-3.333 6-3.333s6 2.395 6 3.333V18H6v-.667z" />
      </svg>
    );
  };
  
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/dashboard",
    },

    {
      title: "About",
      icon: (
        <IconBodyScan className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: "Connect",
      icon: (
        <IconPlugConnected className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/connect",
    },
    {
      title: "Chat",
      icon: (
        <IconMessage className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/chat",
    },
    {
      title: "Resources",
      icon: (
        <IconBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/resources",
    },
    {
      title: "Events & Workshops",
      icon: (
        <IconHeartBolt className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/events",
    },

    {
      title: "Contact Us",
      icon: (
        <IconPhoneDone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contactus",
    },
  ];
  return (
    // <div className="fixed top-0">
    <div className="fixed top-[-190px] flex items-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>

    // </div>
  );
}
