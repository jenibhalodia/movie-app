import { HomeIcon, HomeModernIcon } from "@heroicons/react/16/solid";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import React from "react";

const topMenu = [
  {
    title: "Home",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
    link: "/",
  },
  {
    title: "My List",
    icon: <ListBulletIcon className="h-7 w-7" />,
    link: "/mylist",
  },
];

const bottomMenu = [
 
  {
    title: "Logout",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 42C8.9 42 7.95867 41.6087 7.176 40.826C6.39333 40.0433 6.00133 39.1013 6 38V10C6 8.9 6.392 7.95867 7.176 7.176C7.96 6.39333 8.90133 6.00133 10 6H24V10H10V38H24V42H10ZM32 34L29.25 31.1L34.35 26H18V22H34.35L29.25 16.9L32 14L42 24L32 34Z"
          fill="black"
        />
      </svg>
    ),

    link: "/login",
    
  },
];

export { bottomMenu, topMenu };
