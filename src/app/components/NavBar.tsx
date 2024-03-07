import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="flex ">
      <div><Link
          href="/"
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          Home
        </Link></div>
      {/* <div>Nav Links, clicked with changed effect, and Link function to router to new page</div> */}
      <div className="space-x-6 mt-4">
        <Link
          href="/about"
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          About
        </Link>
        <Link
          href="/about"
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          Projects
        </Link>
        <Link
          href="/about"
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          Experience
        </Link>
        <Link
          href="/about"
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          Contact
        </Link>
      </div>
      <div>operations</div>
    </div>
  );
}
