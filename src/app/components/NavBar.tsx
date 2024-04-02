"use client";

import Link from "next/link";
import React from "react";
import { userData } from "../Constants/data";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import {
  GitHub,
  Instagram,
  LinkedIn,
  ModeNight,
  WbSunny,
  HomeOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";

export default function NavBar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  return (
    <div className="z-[999] absolute top-0 w-screen  place-content-between flex p-2 md:px-20 md:pt-10">
      <div className=" place-self-center">
        <Link href="/" className="font-normal text-gray-600 dark:text-gray-300">
          <HomeOutlined className="text-2xl md:text-4xl" />
        </Link>
      </div>
      <div className="place-self-end flex gap-2 h-full place-items-center">
        <div className="md:block hidden">
          <a href={userData.socialLinks.instagram}>
            <Instagram />
          </a>
          <a
            href={userData.socialLinks.github}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <GitHub />
          </a>
          <a
            href={userData.socialLinks.linkedin}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <LinkedIn />
          </a>
        </div>
        <div>
          {theme === "dark" ? (
            <Button
              className=" dark:text-gray-300"
              onClick={() => setTheme("bright")}
            >
              <WbSunny />
            </Button>
          ) : (
            <Button className="text-gray-600 " onClick={() => setTheme("dark")}>
              <ModeNight />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
