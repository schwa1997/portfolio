"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "../context/active-section-context";
import { links } from "../util/data";
import { userData } from "../util/data";
import { useTheme } from "next-themes";
import {
  GitHub,
  Instagram,
  LinkedIn,
  ModeNight,
  WbSunny,
  HomeOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { theme, setTheme } = useTheme();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:pl-4 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[24rem] flex-wrap items-center justify-center px-10 sm:px-0 gap-y-1 text-[1rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>{" "}
      <div className="flex fixed sm:right-2 right-0 top-4 sm:top-10 gap-2 h-6 place-text-center">
        <a href={userData.socialLinks.instagram} className="lg:flex hidden">
          <Instagram />
        </a>
        <a
          href={userData.socialLinks.github}
          className="lg:flex hidden text-base font-normal text-gray-600 dark:text-gray-300"
        >
          <GitHub />
        </a>
        <a
          href={userData.socialLinks.linkedin}
          className="lg:flex hidden text-base font-normal text-gray-600 dark:text-gray-300"
        >
          <LinkedIn />
        </a>

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
    </header>
  );
}
