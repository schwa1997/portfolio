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
    <div className="bg-white dark:bg-gray-900 md:place-content-between place-content-center grid grid-rows-2 grid-flow-col md:flex md:px-20 md:pt-10">
      <div className="place-self-center">
        <Link href="/" className="font-normal text-gray-600 dark:text-gray-300">
          <HomeOutlined className="text-4xl" />
        </Link>
      </div>
      <div className="md:place-self-center col-span-2 place-self-start">
        <Link
          className={`"text-base font-normal link px-6 py-2 rounded-3xl text-gray-600 dark:text-gray-300 ${
            pathname === "/about" ? " bg-slate-200  dark:bg-slate-600" : ""
          }`}
          href="/about"
        >
          About
        </Link>
        <Link
          className={`"text-base font-normal link px-6 py-2 rounded-3xl text-gray-600 dark:text-gray-300 ${
            pathname === "/projects" ? "bg-slate-200  dark:bg-slate-600" : ""
          }`}
          href="/projects"
        >
          projects
        </Link>
        <Link
          className={`"text-base font-normal link px-6 py-2 rounded-3xl text-gray-600 dark:text-gray-300 ${
            pathname === "/experience" ? "bg-slate-200  dark:bg-slate-600" : ""
          }`}
          href="/experience"
        >
          experience
        </Link>
        <Link
          className={`"text-base font-normal link px-6 py-2 rounded-3xl text-gray-600 dark:text-gray-300 ${
            pathname === "/contact" ? "bg-slate-200  dark:bg-slate-600" : ""
          }`}
          href="/contact"
        >
          contact
        </Link>
      </div>
      <div className="place-self-end flex gap-2 h-full place-items-center">
        {" "}
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
