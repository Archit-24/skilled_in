import React from "react";
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
      
      <div>
        <UserButton showName/>
      </div>
    </div>
    // </div>
  );
}
